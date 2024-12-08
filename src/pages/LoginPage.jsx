import React, { useState } from 'react';
import MobileHeader from "../components/header_mobile";
import Footer from "../components/Footer/Footer";
import Header2 from "../components/Header2";

// Login form data object
const LOGIN_FORM_CONFIG = {
  title: 'Sign In',
  subtitle: 'Enter your email and password to sign in!',
  emailLabel: 'Email',
  passwordLabel: 'Password',
  submitButtonText: 'Sign in',
  googleButtonText: 'Google',
  forgotPasswordText: 'Forgot your password?',
  magicLinkText: 'Sign in via magic link',
  signupText: "Don't have an account? Sign up",
  forgotPasswordLink: '/dashboard/signin/forgot_password',
  magicLinkLink: '/dashboard/signin/email_signin',
  signupLink: '/dashboard/signin/signup'
};

const LoginPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // State for form validation errors
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear previous error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate email
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset previous errors
    setErrors({ email: '', password: '' });
    
    // Validate email
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }));
    } else if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
    }
    
    // Validate password
    if (!formData.password) {
      setErrors(prev => ({ ...prev, password: 'Password is required' }));
    } else if (formData.password.length < 6) {
      setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters' }));
    }
    
    // If no errors, proceed with login
    if (!errors.email && !errors.password) {
      // TODO: Implement actual login logic
      console.log('Login attempt with:', formData);
    }
  };

  // Google Sign In Handler
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    // TODO: Implement Google Sign In
    console.log('Google Sign In clicked');
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Responsive Header */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50">
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <Header2 />
      </div>

      {/* Login Content */}
      <div className="w-full px-4 my-10 pt-16 md:pt-0 flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="w-full max-w-md">
          {/* Back to Website Link */}
          <a href="/" className="flex items-center text-zinc-950 mb-3">
            <svg 
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 320 512"
              className="mr-3 h-4 w-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
            </svg>
            <p className="text-sm">Back to the website</p>
          </a>

          {/* Login Form */}
          <div className="bg-white p-6 mt-0 rounded-3xl shadow-2xl">
            <h1 className="text-3xl font-bold text-zinc-950 mb-4">
              {LOGIN_FORM_CONFIG.title}
            </h1>
            <p className="text-zinc-600 mb-6">
              {LOGIN_FORM_CONFIG.subtitle}
            </p>

            {/* Google Sign In Button */}
            <button 
              onClick={handleGoogleSignIn}
              className="w-full py-3 border rounded-md flex bg-gray-900 text-white items-center justify-center mb-4 hover:bg-gray-400 transition-colors"
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                version="1.1" 
                viewBox="0 0 48 48" 
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              {LOGIN_FORM_CONFIG.googleButtonText}
            </button>

            {/* Divider */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-zinc-500">Or</span>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4 w-full">
                {/* Email Input */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-zinc-700 mb-2"
                  >
                    {LOGIN_FORM_CONFIG.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
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

                {/* Password Input */}
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-zinc-700 mb-2"
                  >
                    {LOGIN_FORM_CONFIG.passwordLabel}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={`w-full px-4 py-3 rounded-md bg-gray-200 font-medium placeholder-gray-400 ${
                      errors.password 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-zinc-300 focus:border-blue-500 focus:ring-blue-200'
                    } focus:outline-none focus:ring-2 transition-colors`}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {LOGIN_FORM_CONFIG.submitButtonText}
                </button>
              </div>
            </form>

            {/* Additional Links */}
            <div className="mt-4 space-y-2 text-center">
              <a 
                href={LOGIN_FORM_CONFIG.forgotPasswordLink} 
                className="text-sm text-blue-600 hover:underline"
              >
                {LOGIN_FORM_CONFIG.forgotPasswordText}
              </a>
              <a 
                href={LOGIN_FORM_CONFIG.magicLinkLink} 
                className="block text-sm text-blue-600 hover:underline"
              >
                {LOGIN_FORM_CONFIG.magicLinkText}
              </a>
              <a 
                href={LOGIN_FORM_CONFIG.signupLink} 
                className="block text-sm text-blue-600 hover:underline"
              >
                {LOGIN_FORM_CONFIG.signupText}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer className="w-full"/>
    </div>
  );
};

export default LoginPage;