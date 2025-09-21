
import React from 'react';
import { CheckCircle, Star, Leaf, Users } from 'lucide-react';

const stats = [
  {
    icon: <Users className="text-primary-600 group-hover:text-primary-700 transition-colors" size={22} aria-hidden="true" />,
    label: '10,000+ Vehicles Served',
    desc: 'Trusted by thousands',
  },
  {
    icon: <Leaf className="text-secondary-600 group-hover:text-secondary-700 transition-colors" size={22} aria-hidden="true" />,
    label: '100% Eco-Friendly',
    desc: 'Sustainable cleaning solutions',
  },
  {
    icon: <Star className="text-yellow-500 group-hover:text-yellow-600 transition-colors" size={22} aria-hidden="true" />,
    label: '4.9/5 Customer Rating',
    desc: 'Excellent service quality',
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust indicators"
      className="w-full bg-gradient-to-r from-neutral-50 via-white to-primary-50/30 py-4 md:py-6 shadow-soft border-b border-neutral-200/50"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-white/90 hover:bg-white shadow-soft hover:shadow-medium transition-all duration-300 cursor-default min-w-[200px] md:min-w-0 border border-neutral-200/50"
            tabIndex={0}
            aria-label={stat.label + '. ' + stat.desc}
          >
            <span className="flex-shrink-0">{stat.icon}</span>
            <span className="flex flex-col text-left">
              <span className="font-bold text-neutral-900 text-base md:text-lg leading-tight">{stat.label}</span>
              <span className="text-sm text-neutral-600 font-medium leading-tight">{stat.desc}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
