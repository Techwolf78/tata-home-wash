import React from 'react';
import { CalendarCheck, ClipboardList, Car } from 'lucide-react';

const steps = [
  {
    icon: <CalendarCheck size={32} className="mx-auto text-[#0437F2] group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />,
    title: 'Book',
    desc: 'Choose your package and schedule your wash online in seconds.'
  },
  {
    icon: <ClipboardList size={32} className="mx-auto text-[#0437F2] group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />,
    title: 'Confirm',
    desc: 'We confirm your booking and assign a trained expert to your location.'
  },
  {
    icon: <Car size={32} className="mx-auto text-[#0437F2] group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />,
    title: 'Enjoy',
    desc: 'Relax while we deliver a spotless, eco-friendly car wash at your doorstep.'
  }
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-2 md:py-6 bg-gradient-to-r from-neutral-50 via-white to-primary-50/30">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-[#0437F2] tracking-tight">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group bg-white/90 rounded-xl p-4 md:p-6 flex flex-col items-center text-center shadow-soft hover:shadow-medium transition-shadow duration-200 border border-neutral-200/50 hover:border-[#0437F2]/30 focus-within:ring-2 focus-within:ring-[#0437F2] focus-within:ring-offset-2 outline-none"
              tabIndex={0}
              aria-label={step.title + ': ' + step.desc}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0437F2]/10 mb-3 md:mb-4">
                {step.icon}
              </div>
              <h3 className="mt-1 md:mt-2 text-base md:text-xl font-semibold mb-1 md:mb-2 text-neutral-900 tracking-tight">
                <span className="inline-block align-middle">{i + 1}.</span> {step.title}
              </h3>
              <p className="text-neutral-600 text-sm md:text-lg leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
