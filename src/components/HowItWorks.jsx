import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Select Your Service",
      desc: "Choose from our versatile transport solutions, from luxury bus hiring to professional driving school courses."
    },
    {
      num: "02",
      title: "Schedule & Customize",
      desc: "Pick your preferred dates, fleet types, or custom licensing requirements through our instant booking system."
    },
    {
      num: "03",
      title: "Enjoy Safe Transit",
      desc: "Experience premier, structured transit managed by seasoned professionals dedicated to your safety and comfort."
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1F628D] text-white font-poppins relative overflow-hidden">
      {/* Subtle tech grid for the dark background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] bg-[size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-anton text-[#FF914C] tracking-widest uppercase mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-anton text-white uppercase drop-shadow-md">
            How It Works
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          
          {/* Optional connecting line for desktop view */}
          <div className="hidden md:block absolute top-12 left-[15%] w-[70%] h-0.5 bg-white/10 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative bg-white/5 p-8 rounded-xl shadow-lg border border-white/10 flex flex-col items-start group hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm z-10">
              <span className="text-5xl font-anton text-white/10 group-hover:text-[#FF914C]/80 transition-colors duration-300 mb-4 block drop-shadow-sm">
                {step.num}
              </span>
              <h4 className="text-xl font-bold text-[#FF914C] mb-3">{step.title}</h4>
              <p className="text-gray-200 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;