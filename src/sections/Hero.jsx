import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative md:min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden animate-fade-in pt-16 md:pt-0"
      aria-label="Hero section"
    >
      <style>
        {`
          @keyframes slide-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-slide-left {
            animation: slide-left 40s linear infinite;
          }
        `}
      </style>
      {/* Decorative gradient blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-primary-200/30 via-primary-100/20 to-transparent rounded-full blur-3xl z-0 animate-bounce-subtle"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gradient-to-tl from-secondary-200/20 via-secondary-100/15 to-transparent rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 w-full max-w-4xl px-4 md:px-6 pt-16 md:pt-32 flex flex-col items-center text-center">
        {/* Brand icon */}
        <div className="mb-4 md:mb-6 animate-slide-up">
          <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-primary-600 mx-auto" aria-hidden="true" />
        </div>

        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-neutral-900 mb-4 md:mb-6 leading-tight animate-slide-up">
          ShineX: <span className="bg-gradient-to-r from-[#0437F2] to-[#0329c1] bg-clip-text text-transparent">Ask for Wash</span>
        </h1>

        <p className="text-base md:text-xl text-neutral-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up px-2">
          Professional vehicle washing services at your doorstep. From cars and bikes to big vehicles - we deliver sparkling results with eco-friendly solutions.
        </p>

        <div className="flex flex-row gap-2 md:gap-4 animate-slide-up px-4">
          <Link to="/booking">
            <Button
              className="group text-xs md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-soft bg-[#0437F2] hover:bg-[#0329c1] text-white focus-visible:ring-2 focus-visible:ring-[#0437F2] focus-visible:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 md:gap-3 hover:shadow-medium transform hover:-translate-y-0.5 whitespace-nowrap"
              aria-label="Book a Wash"
            >
              Book a Wash
              <ArrowRight className="hidden md:block w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>

          <Link to="/franchise">
            <Button
              className="group text-xs md:text-lg px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-soft bg-secondary-500 hover:bg-secondary-600 text-white focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 transition-all duration-200 flex items-center justify-center gap-2 md:gap-3 hover:shadow-medium transform hover:-translate-y-0.5 whitespace-nowrap"
              aria-label="Become a Franchise"
            >
              Become a Franchise
              <Sparkles className="hidden md:block w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 md:mt-12 flex flex-row items-center gap-4 md:gap-6 text-xs md:text-sm text-neutral-500 animate-slide-up px-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-secondary-500 rounded-full"></div>
            <span>Eco-friendly cleaning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-500 rounded-full"></div>
            <span>Professional service</span>
          </div>
          <Link to="/support" className="flex items-center gap-2 hover:text-green-600 transition-colors">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>24/7 support</span>
          </Link>
        </div>

        {/* Sliding services */}
        <div className="mt-6 md:mt-8 overflow-hidden bg-white/90 backdrop-blur-sm py-3 px-4 rounded-xl shadow-soft border border-neutral-200/50">
          <p className="text-sm md:text-base text-primary-700 animate-slide-left whitespace-nowrap font-semibold">
            ⭐ Doorstep Car Wash ⭐ Home Car Detailing ⭐ Bike Wash at Home ⭐ Vehicle Cleaning Service ⭐ Foam Washing at Doorstep ⭐ Basic Car Washing Home Service ⭐ Eco-Friendly Car Wash ⭐ Professional Car Detailing ⭐ ⭐ Doorstep Car Wash ⭐ Home Car Detailing ⭐ Bike Wash at Home ⭐ Vehicle Cleaning Service ⭐ Foam Washing at Doorstep ⭐ Basic Car Washing Home Service ⭐ Eco-Friendly Car Wash ⭐ Professional Car Detailing ⭐
          </p>
        </div>
      </div>
    </section>
  );
}
