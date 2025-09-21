import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden animate-fade-in"
      aria-label="Hero section"
    >
      {/* Decorative gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-primary-200/30 via-primary-100/20 to-transparent rounded-full blur-3xl z-0 animate-bounce-subtle"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-secondary-200/20 via-secondary-100/15 to-transparent rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 w-full max-w-4xl px-6 py-20 md:py-32 flex flex-col items-center text-center">
        {/* Brand icon */}
        <div className="mb-6 animate-slide-up">
          <Sparkles className="w-16 h-16 text-primary-600 mx-auto" aria-hidden="true" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 mb-6 leading-tight animate-slide-up">
          ShineX: <span className="bg-gradient-to-r from-[#0437F2] to-[#0329c1] bg-clip-text text-transparent">Ask for Wash</span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Professional vehicle washing services at your doorstep. From cars and bikes to big vehicles - we deliver sparkling results with eco-friendly solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Link to="/booking">
            <Button
              className="group text-base md:text-lg px-8 py-4 rounded-xl shadow-soft bg-[#0437F2] hover:bg-[#0329c1] text-white focus-visible:ring-2 focus-visible:ring-[#0437F2] focus-visible:ring-offset-2 transition-all duration-200 flex items-center gap-3 hover:shadow-medium transform hover:-translate-y-0.5"
              aria-label="Book a Wash"
            >
              Book a Wash
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>

          <Link to="/franchise">
            <Button
              className="group text-base md:text-lg px-8 py-4 rounded-xl shadow-soft bg-secondary-500 hover:bg-secondary-600 text-white focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-all duration-200 flex items-center gap-3 hover:shadow-medium transform hover:-translate-y-0.5"
              aria-label="Become a Franchise"
            >
              Become a Franchise
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            </Button>
          </Link>

          <Link to="/support">
            <Button
              className="group text-base md:text-lg px-8 py-4 rounded-xl shadow-soft bg-neutral-600 hover:bg-neutral-700 text-white focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 transition-all duration-200 flex items-center gap-3 hover:shadow-medium transform hover:-translate-y-0.5"
              aria-label="Contact Support"
            >
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 text-sm text-neutral-500 animate-slide-up">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
            <span>Eco-friendly cleaning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <span>Professional service</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
