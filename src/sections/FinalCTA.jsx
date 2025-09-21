import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({ onBook }) {
  return (
    <section className="py-8 bg-gradient-to-r from-[#0437F2] to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Ready to Get Your Car Sparkling Clean?
          </h2>
          <p className="text-lg text-white/90 mb-4 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Book your professional car wash service today and experience the ShineX difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <button
              onClick={onBook}
              className="px-6 py-3 bg-white !text-[#0437F2] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/25"
              aria-label="Book your car wash service now"
            >
              <span className="flex items-center gap-2">
                Book Now
                <ArrowRight className="w-5 h-5 text-[#0437F2]" aria-hidden="true" />
              </span>
            </button>
            <p className="text-white/80 text-sm">
              Free cancellation • 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
