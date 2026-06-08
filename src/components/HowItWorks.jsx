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
    <section className="py-20 px-6 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-anton text-[#FF914C] tracking-widest uppercase mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-anton text-[#1F628D] uppercase">How It Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start group hover:shadow-md transition-all duration-300">
              <span className="text-5xl font-anton text-[#FF914C]/20 group-hover:text-[#FF914C]/40 transition-colors duration-300 mb-4 block">
                {step.num}
              </span>
              <h4 className="text-xl font-bold text-[#1F628D] mb-2">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;