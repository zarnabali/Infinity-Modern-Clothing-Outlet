







import React, { useState , useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { 
  Elements, 
  CardElement, 
  useStripe, 
  useElements 
} from '@stripe/react-stripe-js';
import { FaGoogle, FaPaypal } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from "../components/header";
import MobileHeader from "../components/header_mobile";
import Footer from "../components/Footer/Footer";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51Q6UcNIxAChkB7DUBzwbQrPJDytMDolcH7a9Kr6a3T4fmAH0gtgQz1E8OH5YskH02OB3IzxG7xhtziUfFlyGiKeT00lmN8H64R');

const PaymentForm = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsive header
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        expiryDate: '',
        cvv: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        expiryDate: '',
        cvv: '',
        payment: ''
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const validateFullName = (name) => {
        if (!name.trim()) return 'Full name is required';
        if (name.trim().split(' ').length < 2) return 'Please enter full name (first and last)';
        return '';
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) return 'Email is required';
        if (!emailRegex.test(email)) return 'Invalid email format';
        return '';
    };

    const validateExpiryDate = (date) => {
        if (!date) return 'Expiry date is required';
        const [month, year] = date.split('/');
        if (!/^\d{2}\/\d{2}$/.test(date)) return 'Invalid date format (MM/YY)';
        
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        
        const monthNum = parseInt(month, 10);
        const yearNum = parseInt(year, 10);
        
        if (monthNum < 1 || monthNum > 12) return 'Invalid month';
        if (yearNum < currentYear) return 'Card has expired';
        if (yearNum === currentYear && monthNum < currentMonth) return 'Card has expired';
        
        return '';
    };

    const validateCVV = (cvv) => {
        if (!cvv) return 'CVV is required';
        if (!/^\d{3,4}$/.test(cvv)) return 'CVV must be 3-4 digits';
        return '';
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(false);

        // Validate form fields
        const newErrors = {
            fullName: validateFullName(formData.fullName),
            email: validateEmail(formData.email),
            expiryDate: validateExpiryDate(formData.expiryDate),
            cvv: validateCVV(formData.cvv)
        };

        setErrors(newErrors);

        // Check if any errors exist
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        
        if (hasErrors) return;

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet
            return;
        }

        setIsProcessing(true);

        try {
            // Create payment method
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
                billing_details: {
                    name: formData.fullName,
                    email: formData.email
                }
            });

            if (error) {
                setErrors(prev => ({
                    ...prev,
                    payment: error.message
                }));
                setIsProcessing(false);
                return;
            }

            // Here you would typically send the payment method to your backend
            // For this example, we'll simulate a successful payment
            console.log('Payment successful', paymentMethod);
            
            // Navigate to landing page on successful payment
        } catch (err) {
            setErrors(prev => ({
                ...prev,
                payment: 'Payment processing failed. Please try again.'
            }));
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen w-full overflow-x-hidden">
            {isMobile ? <MobileHeader /> : <Header />}
            <div className="w-full px-4 pt-16 flex flex-col justify-center items-center bg-white">
                <div className="w-full max-w-md">
                    <div className="bg-white p-6 rounded-3xl shadow-2xl">
                        {/* Steps Progress Bar */}
                        <div className="flex justify-between items-center mb-8">
                            <div className="text-center">
                                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold">1</div>
                                <p className="text-sm mt-2 text-zinc-600">Cart</p>
                            </div>
                            <div className="text-center">
                                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold">2</div>
                                <p className="text-sm mt-2 text-zinc-600">Checkout</p>
                            </div>
                            <div className="text-center">
                                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold">3</div>
                                <p className="text-sm mt-2 text-zinc-600">Payment</p>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="space-y-4 w-full">
                                {/* Full Name Input */}
                                <div>
                                    <label 
                                        htmlFor="fullName" 
                                        className="block text-zinc-700 mb-2"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className={`w-full px-4 py-3 border rounded-md bg-gray-200 font-medium placeholder-gray-400 ${
                                            errors.fullName 
                                                ? 'border-red-500 focus:ring-red-200' 
                                                : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-200'
                                        } focus:outline-none focus:ring-2 transition-colors`}
                                    />
                                    {errors.fullName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label 
                                        htmlFor="email" 
                                        className="block text-zinc-700 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className={`w-full px-4 py-3 border rounded-md bg-gray-200 font-medium placeholder-gray-400 ${
                                            errors.email 
                                                ? 'border-red-500 focus:ring-red-200' 
                                                : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-200'
                                        } focus:outline-none focus:ring-2 transition-colors`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Stripe Card Element */}
                                <div>
                                    <label 
                                        htmlFor="card-element" 
                                        className="block text-zinc-700 mb-2"
                                    >
                                        Card Details
                                    </label>
                                    <CardElement 
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '16px',
                                                    color: '#424770',
                                                    '::placeholder': {
                                                        color: '#aab7c4',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#9e2146',
                                                },
                                            },
                                        }} 
                                        className="p-3 border rounded-md bg-gray-200"
                                    />
                                    {errors.payment && (
                                        <p className="text-red-500 text-sm mt-1">{errors.payment}</p>
                                    )}
                                </div>

                                {/* Expiry Date and CVV Inputs */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label 
                                            htmlFor="expiryDate" 
                                            className="block text-zinc-700 mb-2"
                                        >
                                            Expiry Date
                                        </label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            name="expiryDate"
                                            value={formData.expiryDate}
                                            onChange={handleInputChange}
                                            placeholder="MM/YY"
                                            className={`w-full px-4 py-3 border rounded-md bg-gray-200 font-medium placeholder-gray-400 ${
                                                errors.expiryDate 
                                                    ? 'border-red-500 focus:ring-red-200' 
                                                    : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-200'
                                            } focus:outline-none focus:ring-2 transition-colors`}
                                        />
                                        {errors.expiryDate && (
                                            <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="cvv" 
                                            className="block text-zinc-700 mb-2"
                                        >
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleInputChange}
                                            placeholder="CVV"
                                            className={`w-full px-4 py-3 border rounded-md bg-gray-200 font-medium placeholder-gray-400 ${
                                                errors.cvv 
                                                    ? 'border-red-500 focus:ring-red-200' 
                                                    : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-200'
                                            } focus:outline-none focus:ring-2 transition-colors`}
                                        />
                                        {errors.cvv && (
                                            <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Google and PayPal Buttons */}
                                <div className="space-y-4 mt-4">
                                    <button 
                                        type="button"
                                        className="w-full py-3 border rounded-md flex bg-gray-900 text-white items-center justify-center hover:bg-gray-400 transition-colors"
                                    >
                                        <FaGoogle className="h-5 w-5 mr-2" /> Sign in with Google
                                    </button>
                                    <button 
                                        type="button"
                                        className="w-full py-3 border rounded-md flex bg-blue-500 text-white items-center justify-center hover:bg-gray-400 transition-colors"
                                    >
                                        <FaPaypal className="h-5 w-5 mr-2" /> Sign in with PayPal
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="relative my-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-zinc-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-white px-2 text-zinc-500">Or</span>
                                    </div>
                                </div>

                                {/* Pay Now Button */}
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
                                >
                                    {isProcessing ? 'Processing...' : 'Pay Now'}
                                </button>
                            </div>
                        </form>

                          {/* Order Summary */}
          <div className="mt-8 bg-gray-900 rounded-lg text-white p-4 w-full">
            <div className="flex justify-between mb-2">
              <span className="text-white">Original Price</span>
              <span className="text-white">$6,592.00</span>
            </div>
            <div className="flex justify-between mb-2 text-green-600">
              <span>Savings</span>
              <span>- $299.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-white">Store Pickup</span>
              <span className="text-white">$99.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-white">Tax</span>
              <span className="text-white">$799.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span className="text-white">Total</span>
              <span className="text-white">$7,191.00</span>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-zinc-500 mt-6">
            Payment processed by Stripe for your business
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const StripePaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripePaymentPage;







