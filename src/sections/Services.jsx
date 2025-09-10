import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';

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

export default function Services({ onSelectPackage }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (pkg) => {
    setSelected(pkg.name);
    if (onSelectPackage) onSelectPackage(pkg.name);
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services & Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-lg p-8 shadow transition hover:shadow-lg border-2 ${selected === pkg.name ? 'border-blue-600' : 'border-transparent'}`}
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">{pkg.price}</div>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-blue-600" size={18} /> {f}
                  </li>
                ))}
              </ul>
              <Button onClick={() => handleSelect(pkg)} className="w-full">
                {selected === pkg.name ? 'Selected' : 'Select Package'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
