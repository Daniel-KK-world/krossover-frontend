import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import AboutSnippet from './components/AboutSnippet'
import ServicesPreview from './components/ServicesPreview'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import CTASection from './components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSnippet /> 
      <ServicesPreview /> 
      <TestimonialsCarousel />
      <CTASection /> 


      <Footer /> 
    </div>
  )
}

export default App
