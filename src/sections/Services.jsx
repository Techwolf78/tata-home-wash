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
    <section id="services" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 text-gray-900 tracking-tight">
          Our Services & Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`group rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 hover:border-primary-600/30 focus-within:ring-2 focus-within:ring-primary-600 focus-within:ring-offset-2 outline-none bg-white relative ${selected === pkg.name ? 'ring-2 ring-primary-600 ring-offset-2' : ''}`}
              tabIndex={0}
              aria-label={pkg.name + ' package'}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-600/10 mb-4">
                <CheckCircle className="text-primary-600" size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 tracking-tight">{pkg.name}</h3>
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-4">{pkg.price}</div>
              <ul className="mb-6 space-y-2 w-full">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 justify-center">
                    <CheckCircle className="text-primary-600" size={18} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/booking">
                <button
                  type="button"
                  onClick={() => handleSelect(pkg)}
                  aria-pressed={selected === pkg.name}
                  className={`w-full mt-auto font-semibold rounded-full py-2.5 px-4 text-base flex items-center justify-center transition-all duration-200 border outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2
                    ${selected === pkg.name
                      ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700'
                      : 'bg-white text-primary-600 border-primary-600 hover:bg-primary-50 hover:border-primary-700'}
                  `}
                  style={{ letterSpacing: 0.2 }}
                >
                  Book Now
                </button>
              </Link>
              {selected === pkg.name && (
                <span className="absolute top-4 right-4 text-xs bg-primary-600 text-white px-3 py-1 rounded-full shadow-sm animate-fade-in">Selected</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
