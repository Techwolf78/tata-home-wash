import React from 'react';
import { CalendarCheck, ClipboardList, Car } from 'lucide-react';

const steps = [
  {
    icon: <CalendarCheck size={36} className="mx-auto text-[#004289] group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />,
    title: 'Book',
    desc: 'Choose your package and schedule your wash online in seconds.'
  },
  {
    icon: <ClipboardList size={36} className="mx-auto text-[#004289] group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />,
    title: 'Confirm',
    desc: 'We confirm your booking and assign a trained expert to your location.'
  },
  {
    icon: <Car size={36} className="mx-auto text-[#004289] group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />,
    title: 'Enjoy',
    desc: 'Relax while we deliver a spotless, eco-friendly car wash at your doorstep.'
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
          <span className="bg-gradient-to-r from-[#004289] via-[#004289]/80 to-[#4f6fa6] bg-clip-text text-transparent">How It Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100 hover:border-[#004289]/30 focus-within:ring-2 focus-within:ring-[#004289] focus-within:ring-offset-2 outline-none"
              tabIndex={0}
              aria-label={step.title + ': ' + step.desc}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#004289]/10 mb-4">
                {step.icon}
              </div>
              <h3 className="mt-2 text-lg md:text-xl font-semibold mb-2 text-gray-900 tracking-tight">
                <span className="inline-block align-middle">{i + 1}.</span> {step.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
