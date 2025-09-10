
import React from 'react';
import { CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: <CheckCircle className="text-[#004289] group-hover:text-[#00336b] transition-colors" size={22} aria-hidden="true" />, 
    label: '500+ Cars Washed',
    desc: 'Experience you can trust',
  },
  {
    icon: <CheckCircle className="text-green-600 group-hover:text-green-700 transition-colors" size={22} aria-hidden="true" />, 
    label: 'Eco-Friendly Products',
    desc: 'Safe for your car & planet',
  },
  {
    icon: <CheckCircle className="text-yellow-500 group-hover:text-yellow-600 transition-colors" size={22} aria-hidden="true" />, 
    label: 'Rated 4.9/5 Stars',
    desc: 'Top-rated by customers',
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Quick stats"
      className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-100 py-3 md:py-4 shadow-sm border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="group flex items-center gap-3 px-4 py-2 rounded-lg bg-white/80 hover:bg-white shadow transition-all duration-200 cursor-default min-w-[180px] md:min-w-0"
            tabIndex={0}
            aria-label={stat.label + '. ' + stat.desc}
          >
            <span className="flex-shrink-0">{stat.icon}</span>
            <span className="flex flex-col text-left">
              <span className="font-semibold text-gray-800 text-base md:text-lg leading-tight">{stat.label}</span>
              <span className="text-xs text-gray-500 font-normal leading-tight">{stat.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
