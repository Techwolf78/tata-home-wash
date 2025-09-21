import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white via-white to-gray-100 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-tr from-[#004289]/20 via-[#004289]/10 to-transparent rounded-full blur-3xl z-0"
      />
      <div className="relative z-10 w-full max-w-3xl px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5 leading-tight">
          ShineX: <span className="text-[#004289]">Ask for Wash</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
          Professional vehicle washing services at your doorstep. Car, Bike, or Big Vehicle - we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/booking">
            <Button
              className="text-base md:text-lg px-8 py-3 rounded-lg shadow-lg bg-[#004289] hover:bg-[#00336b] text-white focus-visible:ring-2 focus-visible:ring-[#004289] focus-visible:ring-offset-2 transition-all flex items-center gap-2"
              aria-label="Book a Wash"
            >
              Book a Wash
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
          <Link to="/franchise">
            <Button
              className="text-base md:text-lg px-8 py-3 rounded-lg shadow-lg bg-green-500 hover:bg-green-600 text-white focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-all"
              aria-label="Become a Franchise"
            >
              Become a Franchise
            </Button>
          </Link>
          <Link to="/support">
            <Button
              className="text-base md:text-lg px-8 py-3 rounded-lg shadow-lg bg-gray-500 hover:bg-gray-600 text-white focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 transition-all"
              aria-label="Contact Support"
            >
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
