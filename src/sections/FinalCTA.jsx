import React from 'react';
import { Button } from '../components/Button';

export default function FinalCTA({ onBook }) {
  return (
    <section className="py-20 bg-primary-600 flex items-center justify-center">
      <div className="bg-white/95 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 px-8 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready for a Spotless Car?</h2>
        <p className="text-xl mb-8 text-gray-700">Schedule your wash in under 60 seconds.</p>
        <Button
          onClick={onBook}
          className="text-lg px-10 py-4 bg-white text-primary-600 hover:bg-gray-50 font-bold shadow-lg rounded-full transition-all duration-200 border-2 border-white"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
}
