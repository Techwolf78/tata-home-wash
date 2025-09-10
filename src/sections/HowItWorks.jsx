import React from 'react';
import { CalendarCheck, ClipboardList, Car } from 'lucide-react';

const steps = [
  {
    icon: <CalendarCheck size={40} className="mx-auto text-blue-600" />,
    title: '1. Book',
    desc: 'Choose your package and schedule your wash online in seconds.'
  },
  {
    icon: <ClipboardList size={40} className="mx-auto text-blue-600" />,
    title: '2. Confirm',
    desc: 'We confirm your booking and assign a trained expert to your location.'
  },
  {
    icon: <Car size={40} className="mx-auto text-blue-600" />,
    title: '3. Enjoy',
    desc: 'Relax while we deliver a spotless, eco-friendly car wash at your doorstep.'
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-8 text-center shadow-sm">
              {step.icon}
              <h3 className="mt-4 text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
