import React from 'react';

const WhyChooseUs = () => {
  const features = [
    { title: "Seasoned Professionals", desc: "Our operators, drivers, and mechanics are heavily vetted, certified experts.", icon: "🛡️" },
    { title: "Global Excellence", desc: "Providing premium logistics consultancy and transportation across the globe.", icon: "🌐" },
    { title: "24/7 Rapid Response", desc: "Our towing and maintenance assistance networks never sleep.", icon: "⚡" }
  ];

  return (
    <section className="py-24 px-6 bg-[#1F628D] text-white font-poppins relative overflow-hidden">
      {/* Dynamic tech grid dots matching the hero art direction */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] bg-[size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-sm font-anton text-[#FF914C] tracking-widest uppercase">The Krossover Edge</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold font-anton text-white uppercase leading-tight">
            Setting the Standard in Modern Transit
          </h3>
          <p className="text-gray-200 leading-relaxed text-base md:text-lg">
            We don't just move assets; we take the entire burden off your shoulders. Whether it's removing the stress of getting your driver's license or recovering a broken-down vehicle at midnight, we bring elite styling and efficiency to every operation.
          </p>
        </div>

        <div className="lg:w-1/2 w-full space-y-6">
          {features.map((feat, index) => (
            <div key={index} className="flex gap-5 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl p-3 bg-white/10 rounded-lg h-fit flex items-center justify-center shadow-inner">{feat.icon}</div>
              <div>
                <h4 className="text-lg font-bold text-[#FF914C] mb-1 font-poppins">{feat.title}</h4>
                <p className="text-gray-200 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;