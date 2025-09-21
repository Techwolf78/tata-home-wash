import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
// Custom button for maximum control

const packages = [
  {
    name: 'Basic Wash',
    price: '₹399',
    features: [
      'Exterior hand wash',
      'Towel dry',
      'Tyre & wheel clean',
    ],
  },
  {
    name: 'Premium Wash',
    price: '₹699',
    features: [
      'Everything in Basic',
      'Interior vacuum',
      'Dashboard polish',
      'Windows in/out',
    ],
  },
  {
    name: 'Ultimate Detail',
    price: '₹1199',
    features: [
      'Everything in Premium',
      'Wax polish',
      'Engine bay clean',
      'Odour removal',
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (pkg) => {
    setSelected(pkg.name);
  };

  return (
    <section id="services" className="py-8 md:py-12 bg-gradient-to-r from-neutral-50 via-white to-primary-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#0437F2] tracking-tight">
          Our Services & Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group rounded-xl p-4 md:p-6 flex flex-col items-center text-center shadow-soft hover:shadow-medium transition-shadow duration-200 border border-neutral-200/50 hover:border-[#0437F2]/30 focus-within:ring-2 focus-within:ring-[#0437F2] focus-within:ring-offset-2 outline-none bg-white/90 relative ${selected === pkg.name ? 'ring-2 ring-[#0437F2] ring-offset-2' : ''}`}
              tabIndex={0}
              aria-label={pkg.name + ' package'}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0437F2]/10 mb-3 md:mb-4">
                <CheckCircle className="text-[#0437F2]" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-2 text-neutral-900 tracking-tight">{pkg.name}</h3>
              <div className="text-xl md:text-2xl font-bold text-[#0437F2] mb-4">{pkg.price}</div>
              <ul className="mb-4 md:mb-6 space-y-2 w-full">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-neutral-700 justify-center">
                    <CheckCircle className="text-[#0437F2]" size={18} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/booking">
                <button
                  type="button"
                  onClick={() => handleSelect(pkg)}
                  aria-pressed={selected === pkg.name}
                  className={`w-full mt-auto font-semibold rounded-full py-2.5 px-4 text-sm md:text-base flex items-center justify-center transition-all duration-200 border outline-none focus-visible:ring-2 focus-visible:ring-[#0437F2] focus-visible:ring-offset-2
                    ${selected === pkg.name
                      ? 'bg-[#0437F2] text-white border-[#0437F2] hover:bg-[#0329c1]'
                      : 'bg-white text-[#0437F2] border-[#0437F2] hover:bg-[#0437F2]/5 hover:border-[#0329c1]'}}
                  `}
                  style={{ letterSpacing: 0.2 }}
                >
                  Book Now
                </button>
              </Link>
              {selected === pkg.name && (
                <span className="absolute top-4 right-4 text-xs bg-[#0437F2] text-white px-3 py-1 rounded-full shadow-sm animate-fade-in">Selected</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
