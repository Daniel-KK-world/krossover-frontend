import React from 'react';

export default function MissionVision() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white text-gray-800 font-['Poppins',_sans-serif]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#1F628D] mb-6 font-['Anton',_sans-serif] tracking-wide uppercase">Who We Are</h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            With a seasoned team of professionals, we are the source of excellence in providing comprehensive and the most efficient transportation solutions and consultancy across the globe. 
          </p>
          <p className="leading-relaxed text-gray-600">
            As your best bet, we provide you with the best Bus hiring transport services, the modern driving school service, and we train the very seasoned professional drivers for business firms and private individuals. 
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#FF914C] text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-3 font-['Anton',_sans-serif] tracking-wide uppercase">Our Mission</h3>
            <p className="text-sm md:text-base">
              To deliver reliable, safe, and comfortable transport and driving school services while continuously exceeding customer expectations through professional excellence.
            </p>
          </div>
          <div className="bg-gray-50 border-l-4 border-[#1F628D] p-8 rounded-r-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#1F628D] mb-3 font-['Anton',_sans-serif] tracking-wide uppercase">Our Vision</h3>
            <p className="text-sm md:text-base text-gray-700">
              To be the most trusted, multi-faceted transport agency and consultancy, seamlessly connecting every aspect of logistics, training, and maintenance into one large, efficient corporation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}