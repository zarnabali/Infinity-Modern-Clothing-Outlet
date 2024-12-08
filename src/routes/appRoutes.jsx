import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from '../pages/SplashPage';
import LandingPage from '../pages/LandingPage';
import MensPage from '../pages/MensPage';
import WomensPage from '../pages/WomensPage';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import GeminiFashionAssistant from "../pages/Chatbot";
import AdminDashboard from '../pages/AdminDashboard';
import CheckoutPage from '../pages/PaymentPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/menspage" element={<MensPage />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/ChatbotPage" element={<GeminiFashionAssistant />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/Checkout" element={<CheckoutPage />} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
