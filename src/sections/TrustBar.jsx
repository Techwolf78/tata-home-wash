
import React from 'react';
import { CheckCircle, Star, Users, Sparkles, Home } from 'lucide-react';

const services = [
  'Doorstep Car Wash',
  'Home Car Detailing',
  'Bike Wash at Home',
  'Vehicle Cleaning Service',
  'Foam Washing at Doorstep',
  'Basic Car Washing Home Service',
  'Eco-Friendly Car Wash',
  'Professional Car Detailing',
];

const stats = [
  {
    icon: <Users className="text-[#0437F2]" size={24} aria-hidden="true" />,
    label: '10,000+ Vehicles Served',
    desc: 'Trusted by thousands',
  },
  {
    icon: <Home className="text-[#0437F2]" size={24} aria-hidden="true" />,
    label: 'At-Home Service',
    desc: 'Convenient doorstep cleaning',
  },
  {
    icon: <Star className="text-[#0437F2]" size={24} aria-hidden="true" />,
    label: '4.9/5 Customer Rating',
    desc: 'Excellent service quality',
  },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Trust and Services"
      className="w-full bg-gradient-to-r from-neutral-50 via-white to-primary-50/30 py-8 md:py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Side: Services Grid */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold text-[#0437F2] mb-6 text-center lg:text-left">
              Cleaning Services at Your Doorstep
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white/90 rounded-lg shadow-soft border border-neutral-200/50 hover:shadow-medium transition-shadow"
                >
                  <Sparkles className="w-4 h-4 text-[#0437F2] flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-neutral-700 leading-tight">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Heading, Para, Stats */}
          <div className="flex-1">
            <h2 className="text-xl md:text-3xl font-bold text-[#0437F2] mb-4 text-center lg:text-left">
              Why Choose ShineX?
            </h2>
            <p className="text-base md:text-lg text-neutral-600 mb-6 leading-relaxed">
              Unlike traditional car washes where you have to drive to a shop, we bring professional cleaning services directly to your home. No more wasting time traveling - get your vehicle sparkling clean in the comfort of your own driveway.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 bg-white/90 rounded-lg shadow-soft border border-neutral-200/50 hover:shadow-medium transition-shadow"
                >
                  <div className="mb-2">{stat.icon}</div>
                  <span className="font-bold text-neutral-900 text-sm md:text-base leading-tight mb-1">{stat.label}</span>
                  <span className="text-xs md:text-sm text-neutral-600 font-medium">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
