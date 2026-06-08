import React from 'react';

export default function BrandStory() {
  const services = [
    { title: "Transport Solutions", desc: "Premium bus hiring and logistics across the globe." },
    { title: "Driving Institution", desc: "Training seasoned professional drivers for firms and individuals." },
    { title: "Consultancy & Licensing", desc: "Removing the stress from acquiring, renewing, or replacing licenses." },
    { title: "Mechanics & Towing", desc: "Reliable maintenance and emergency recovery services." }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-sm font-['Anton',_sans-serif] text-[#FF914C] tracking-widest uppercase">
            Our Ecosystem
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-['Anton',_sans-serif] text-[#1F628D] uppercase leading-tight">
            One Large, Connected Corporation
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            The negative space in our "K" represents more than just a letter—it symbolizes a connected road network. From the modern driving institution down to car rentals and delivery services, every aspect of Krossover Transport Agency is seamlessly linked to provide comprehensive solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1F628D] to-[#FF914C] mt-8 rounded-full"></div>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#FF914C]/30 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#1F628D]/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150 group-hover:bg-[#FF914C]/10"></div>
              <h4 className="text-xl font-bold text-[#1F628D] mb-3">
                {service.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}