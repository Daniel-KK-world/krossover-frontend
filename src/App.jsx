import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Components (persist across all pages)
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage Components
import Hero from './components/Hero';
import AboutSnippet from './components/AboutSnippet';
import ServicesPreview from './components/ServicesPreview';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import CTASection from './components/CTASection';

// New Pages
import AboutPage from './pages/AboutPage';
// 👇 FIX: Import the ServicesPage component here!
import ServicesPage from './pages/ServicesPage'; 

// 1. Group current landing page components into a single 'Home' view
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
    // 2. Wrap the entire app in Router
    <Router>
      {/* flex & flex-col ensure the footer is always pushed to the bottom if a page is short */}
      <div className="min-h-screen bg-white flex flex-col">
        
        {/* Navbar stays OUTSIDE the Routes so it never unmounts */}
        <Navbar />
        
        {/* 3. The main content area where views will swap out */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>

        {/* Footer stays OUTSIDE the Routes */}
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;