import React from 'react';
import { Button } from '../components/Button';

export default function FinalCTA({ onBook }) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for a Spotless Car?</h2>
        <p className="text-xl mb-8">Schedule your wash in under 60 seconds.</p>
        <Button
          onClick={onBook}
          className="text-lg px-10 py-4 bg-white text-blue-700 hover:bg-blue-100 font-bold shadow-lg rounded-full transition-all duration-200"
        >
          Book Now
        </Button>
      </div>
    </section>
  );
}
