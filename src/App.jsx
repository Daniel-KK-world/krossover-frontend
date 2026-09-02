// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ─── AUTH CONTEXT & PROTECTED ROUTE ─────────────────────
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// ─── GLOBAL COMPONENTS ───────────────────────────────────
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; 

// ─── HOMEPAGE COMPONENTS ─────────────────────────────────
import Hero from './components/Hero';
import AboutSnippet from './components/AboutSnippet';
import ServicesPreview from './components/ServicesPreview';
import ServiceDetailPage from './pages/ServiceDetailPage'; 
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CTASection from './components/CTASection';

// ─── PAGES ───────────────────────────────────────────────
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import VerifyOTPPage from './pages/VerifyOTPPage';          
import ForgotPasswordPage from './pages/ForgotPasswordPage'; 
import ResetPasswordPage from './pages/ResetPasswordPage';  
import BookingPage from './pages/BookingPage';
import ConfirmBookingPage from './pages/ConfirmBookingPage';
import EnquiryPage from './pages/EnquiryPage';
import AllCarsPage from './pages/AllCarsPage';

// ─── HOME VIEW ────────────────────────────────────────────
const Home = () => {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <ServicesPreview />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          
          <ScrollToTop /> {/* ← ADD THIS - Scrolls to top on page change */}

          <main className="flex-grow">
            <Routes>
              {/* ─── PUBLIC ROUTES ─── */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verify-otp" element={<VerifyOTPPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/all-cars" element={<AllCarsPage />} />

              {/* ─── SERVICES ROUTES (PUBLIC) ─── */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />

              {/* ─── ENQUIRY FORM (PUBLIC) ─── */}
              <Route path="/enquiry" element={<EnquiryPage />} />

              {/* ─── PROTECTED ROUTES (BOOKING ONLY) ─── */}
              <Route
                path="/bookings"
                element={
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/booking"
                element={
                  <ProtectedRoute>
                    <BookingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/confirm-booking"
                element={
                  <ProtectedRoute>
                    <ConfirmBookingPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;