import React from 'react';
import { Button } from '../components/Button';

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative h-[90vh] flex items-center bg-gradient-to-r from-blue-900/70 to-black/50">
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium Car Care, Delivered to Your Door
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Save time and water. Our professional team brings the premium car wash experience to your home or office in Pune.
          </p>
          <Button onClick={onBook} className="text-lg px-8 py-3">Book a Wash</Button>
        </div>
      </div>
    </section>
  );
}
