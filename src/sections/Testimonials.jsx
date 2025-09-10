import React from 'react';
// If you want to use embla-carousel-react, import and set up here
// import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    quote: 'Absolutely fantastic service! My car has never looked better and the team was so professional.',
    name: 'Rohit S.',
    area: 'Baner',
    rating: 5
  },
  {
    quote: 'Convenient, eco-friendly, and top quality. Highly recommend Tata Home Wash!',
    name: 'Priya M.',
    area: 'Koregaon Park',
    rating: 5
  },
  {
    quote: 'On time, polite staff, and spotless results. Will book again!',
    name: 'Amit D.',
    area: 'Kalyani Nagar',
    rating: 5
  }
];

function StarRating({ count }) {
  return (
    <span className="text-yellow-400">
      {'★★★★★'.slice(0, count)}
    </span>
  );
}

export default function Testimonials() {
  // For MVP, simple horizontal scroll. For embla, replace below with carousel logic.
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="flex gap-8 overflow-x-auto pb-4 snap-x">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-sm bg-slate-50 rounded-lg p-8 shadow-md snap-center flex-shrink-0"
            >
              <p className="text-lg italic mb-4">“{t.quote}”</p>
              <div className="font-semibold mb-1">{t.name}</div>
              <div className="text-sm text-gray-500 mb-2">{t.area}</div>
              <StarRating count={t.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
