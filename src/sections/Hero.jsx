import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative  flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Trust banner */}
          <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 mb-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle
                  className="w-5 h-5 text-emerald-600"
                  aria-hidden="true"
                />
                <span className="text-slate-700 font-semibold text-sm">
                  Trusted by 10,000+ customers
                </span>
              </div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Professional Car Care{" "}
            <span className="block bg-gradient-to-r from-[#0437F2] via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              At Your Doorstep
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience premium vehicle washing services with eco-friendly
            solutions. From cars and bikes to commercial vehicles - we bring the
            sparkle to you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/booking">
              <Button
                className="group relative px-8 py-4 bg-gradient-to-r from-[#0437F2] to-indigo-600 hover:from-[#0437F2] hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#0437F2]/25"
                aria-label="Book your car wash service now"
              >
                <span className="flex items-center gap-2">
                  Book Your Wash
                  <ArrowRight
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0437F2] to-indigo-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl" />
              </Button>
            </Link>

            <Link to="/franchise">
              <Button
                className="group px-8 py-4 bg-[#0437F2] hover:bg-[#032b9e] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[#0437F2] focus:outline-none focus:ring-4 focus:ring-[#0437F2]/25"
                aria-label="Learn about franchise opportunities"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
                  Become a Partner
                </span>
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200/50">
              <Shield className="w-4 h-4" aria-hidden="true" />
              <span>100% Safe & Secure</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200/50">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>Expert Team</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-200/50">
              <Award className="w-4 h-4" aria-hidden="true" />
              <span>Eco-Friendly</span>
            </div>
          </div>

          {/* Service highlights marquee */}
          <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl p-2 md:p-6 shadow-lg border border-white/20">
            <div className="overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                <div className="flex items-center gap-8 px-4">
                  <span className="text-slate-700 font-medium">
                    🚗 Car Wash
                  </span>
                  <span className="text-slate-700 font-medium">
                    🏍️ Bike Wash
                  </span>
                  <span className="text-slate-700 font-medium">
                    🚛 Commercial Vehicles
                  </span>
                  <span className="text-slate-700 font-medium">
                    ✨ Interior Detailing
                  </span>
                  <span className="text-slate-700 font-medium">
                    🧽 Exterior Cleaning
                  </span>
                  <span className="text-slate-700 font-medium">
                    💧 Waterless Wash
                  </span>
                </div>
                <div className="flex items-center gap-8 px-4">
                  <span className="text-slate-700 font-medium">
                    🚗 Car Wash
                  </span>
                  <span className="text-slate-700 font-medium">
                    🏍️ Bike Wash
                  </span>
                  <span className="text-slate-700 font-medium">
                    🚛 Commercial Vehicles
                  </span>
                  <span className="text-slate-700 font-medium">
                    ✨ Interior Detailing
                  </span>
                  <span className="text-slate-700 font-medium">
                    🧽 Exterior Cleaning
                  </span>
                  <span className="text-slate-700 font-medium">
                    💧 Waterless Wash
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
