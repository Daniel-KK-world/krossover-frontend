import React from 'react';

export default function TeamGrid() {
  const teamMembers = [
    { 
      name: "Mr. Appau Prince Kwame", 
      role: "CEO", 
      image: "src/assets/krossover_ceo.jpg" 
    },
    { 
      name: "Elvis Owusu Mark", 
      role: "Operations Manager", 
      image: "src/assets/krossover_operationsmanager.jpg" 
    },
    { 
      name: "Joshua Ansah", 
      role: "Fleet Manager", 
      image: "src/assets/krossover_fleetmanager.jpg" 
    },
    { 
      name: "Erica Lekey Mawunyo", 
      role: "Human Relations Manageress", 
      image: "src/assets/krossover_hr.jpg" 
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F628D] mb-4 font-['Anton',_sans-serif] tracking-wide uppercase">
          Meet Our Leadership
        </h2>
        <div className="w-24 h-1 bg-[#FF914C] mx-auto mb-12"></div>
        
        {/* Updated grid from md:grid-cols-3 to lg:grid-cols-4 for 4 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-gray-50 overflow-hidden shadow-inner">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover"/>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-[#FF914C] font-semibold mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}