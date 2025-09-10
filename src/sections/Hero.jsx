
import React from 'react';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onBook }) {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-tr from-blue-500/20 via-blue-300/10 to-transparent rounded-full blur-3xl z-0"
      />
      <div className="relative z-10 w-full max-w-3xl px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight">
          Premium Car Care, <span className="text-blue-600">Delivered</span> to Your Door
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          Save time and water. Our professional team brings the premium car wash experience to your home or office in Pune. <span className="hidden md:inline">Enterprise-grade service, now for everyone.</span>
        </p>
        <Button
          onClick={onBook}
          className="text-base md:text-lg px-8 py-3 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all flex items-center gap-2"
          aria-label="Book a Wash"
        >
          Book a Wash
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Button>
      
      </div>
    </section>
  );
}
