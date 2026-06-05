import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  // Mock data tailored to Krossover's specific services
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

  // Auto-scroll functionality: changes the slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 bg-[#1F628D] text-white font-poppins relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF914C]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-1 bg-[#FF914C]"></div>
          <h3 className="font-anton text-[#FF914C] tracking-widest text-lg uppercase">
            Client Feedback
          </h3>
          <div className="w-8 h-1 bg-[#FF914C]"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-anton uppercase mb-12 drop-shadow-md">
          What Our Clients Say
        </h2>

        {/* Carousel Card */}
        <div className="bg-white text-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl mx-auto relative min-h-[250px] flex flex-col justify-center transition-all duration-300">
          
          {/* Floating Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#FF914C] text-white w-12 h-12 flex items-center justify-center rounded-full text-3xl font-serif shadow-lg">
            "
          </div>

          <div className="animate-fade-in">
            {/* Star Ratings */}
            <div className="flex justify-center gap-1 mb-6 text-[#FF914C]">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-8 text-gray-700 min-h-[80px]">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Author Info */}
            <div>
              <h4 className="text-xl font-anton text-[#1F628D] uppercase tracking-wide">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-gray-500 font-semibold mt-1">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#FF914C] w-8' : 'bg-white/50 w-3 hover:bg-white'
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