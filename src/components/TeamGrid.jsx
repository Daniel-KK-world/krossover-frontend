import React from 'react';

import ceoImg from '../assets/krossover_ceo.JPG';
import opsManagerImg from '../assets/krossover_operationsmanager.JPG';
import fleetManagerImg from '../assets/krossover_fleetmanager.JPG';
import hrManagerImg from '../assets/krossover_hr.JPG';
import itManagerImg from '../assets/krossover_itmanager.JPG';
import financeManagerImg from '../assets/krossover_financemanager.JPG';
import customerRelationsImg from '../assets/krossover_customerrelations.JPG';

export default function TeamGrid() {
  const teamMembers = [
    { 
      name: "Mr. Appau Prince Kwame", 
      role: "CEO", 
      image: ceoImg 
    },
    { 
      name: "Elvis Owusu Mark", 
      role: "Operations Manager", 
      image: opsManagerImg 
    },
    { 
      name: "Okyere George Frimpong", 
      role: "Financial Manager", 
      image: financeManagerImg 
    },
    { 
      name: "Joshua Ansah", 
      role: "Marketing Manager",
      image: fleetManagerImg
    },
    {
      name: "Mr. Isaac Mensah JY", 
      role: "Brand and IT Manager",
      image: itManagerImg
    },
    { 
      name: "Michellina Nana Oye Kwabi", 
      role: "Customer Relations Manager",
      image: customerRelationsImg 
    },
    { 
      name: "Erica Lekey Mawunyo",
      role: "HR and Administration Manager", 
      image: hrManagerImg 
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50 font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F628D] mb-4 font-['Anton',_sans-serif] tracking-wide uppercase">
          Meet Our Leadership
        </h2>
        <div className="w-24 h-1 bg-[#FF914C] mx-auto mb-12"></div>
        
        {/* 4 columns - gives us 4 + 3 (centered with auto margins) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-full max-w-xs"
            >
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