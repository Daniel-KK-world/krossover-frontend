import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ─── AUTH CONTEXT & PROTECTED ROUTE ─────────────────────
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// ─── GLOBAL COMPONENTS ───────────────────────────────────
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ─── HOMEPAGE COMPONENTS ─────────────────────────────────
import Hero from './components/Hero';
import AboutSnippet from './components/AboutSnippet';
import ServicesPreview from './components/ServicesPreview';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CTASection from './components/CTASection';

// ─── PAGES ───────────────────────────────────────────────
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import VerifyOTPPage from './pages/VerifyOTPPage';           // ← ADD THIS
import ForgotPasswordPage from './pages/ForgotPasswordPage'; // ← ADD THIS
import ResetPasswordPage from './pages/ResetPasswordPage';   // ← ADD THIS
import BookingPage from './pages/BookingPage';
import ConfirmBookingPage from './pages/ConfirmBookingPage';

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
    // ─── WRAP ENTIRE APP WITH AuthProvider ──────────────
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />

          <main className="flex-grow">
            <Routes>
              {/* ─── PUBLIC ROUTES (No login required) ─── */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/verify-otp" element={<VerifyOTPPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />

              {/* ─── PROTECTED ROUTES (Login required) ─── */}
              <Route
                path="/services"
                element={
                  <ProtectedRoute>
                    <ServicesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/bookings"
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