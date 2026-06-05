import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kwame Mensah",
      role: "Corporate Client",
      text: "We hired Krossover for our annual company retreat. The buses were in pristine condition, fully air-conditioned, and the drivers were highly professional. Top-tier service!",
      rating: 5,
    },
    {
      id: 2,
      name: "Abena Osei",
      role: "Driving School Graduate",
      text: "I was so nervous about learning to drive, but the instructors here are incredibly patient. They also helped me navigate the entire license acquisition process stress-free.",
      rating: 5,
    },
    {
      id: 3,
      name: "Samuel Tetteh",
      role: "Emergency Towing Customer",
      text: "My car broke down on the highway at 2 AM. I called their towing service, and they arrived in under 30 minutes. Extremely reliable and professional team.",
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // New state to track mouse hover

  // Auto-scroll functionality: changes the slide every 5 seconds, BUT pauses if hovered
  useEffect(() => {
    if (isHovered) return; // Stop the timer if the user is reading

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(timer);
  }, [testimonials.length, isHovered]);

  return (
    <section className="py-24 px-6 bg-[#1F628D] text-white font-poppins relative overflow-hidden">
      
      {/* Decorative Background Glows - Now with a breathing 'animate-pulse' effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF914C]/15 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-4 group/header cursor-default">
          <div className="w-8 h-1 bg-[#FF914C] transition-all duration-500 group-hover/header:w-16"></div>
          <h3 className="font-anton text-[#FF914C] tracking-widest text-lg uppercase transition-transform duration-500 group-hover/header:-translate-y-1">
            Client Feedback
          </h3>
          <div className="w-8 h-1 bg-[#FF914C] transition-all duration-500 group-hover/header:w-16"></div>
        </div>
        
        {/* Extrabold added back in! */}
        <h2 className="text-4xl md:text-5xl font-extrabold font-anton uppercase mb-16 drop-shadow-md tracking-wide">
          What Our Clients Say
        </h2>

        {/* Carousel Card - Lifts up and pauses timer on hover */}
        <div 
          className="bg-white text-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl mx-auto relative min-h-[250px] flex flex-col justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] group/card cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Floating Quote Icon - Pops up and tilts on card hover */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#FF914C] text-white w-14 h-14 flex items-center justify-center rounded-full text-4xl font-serif shadow-lg transition-all duration-500 group-hover/card:-translate-y-2 group-hover/card:rotate-12 group-hover/card:shadow-[0_0_20px_rgba(255,145,76,0.6)]">
            <span className="mt-4">"</span>
          </div>

          {/* By using the 'key' prop, React automatically forces a re-render of this specific div, 
              which re-triggers standard Tailwind animation classes if you have them configured, 
              or at least forces a clean snap instead of messy text overwriting. */}
          <div key={currentIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            {/* Star Ratings - Individual stars pop when hovered */}
            <div className="flex justify-center gap-1.5 mb-8 text-[#FF914C]">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-6 h-6 fill-current hover:scale-125 hover:rotate-12 transition-transform duration-300 cursor-pointer" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-8 text-gray-700 min-h-[90px]">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div className="transform transition-all duration-500 group-hover/card:scale-105">
              <h4 className="text-xl font-extrabold font-anton text-[#1F628D] uppercase tracking-wide">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-[#FF914C] font-bold mt-1 tracking-wider uppercase">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Dots - Expand into pills on hover */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'bg-[#FF914C] w-10 shadow-[0_0_10px_rgba(255,145,76,0.8)]' 
                  : 'bg-white/40 w-3 hover:bg-white hover:w-6'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsCarousel;