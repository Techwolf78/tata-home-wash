import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="Tata Home Wash Logo" className="h-8 w-auto" />
          <span className="font-bold text-lg">Tata Home Wash</span>
        </div>
        <div className="text-gray-400 text-sm">
          <div>Pune, India | Service Hours: 7am - 9pm</div>
          <div>Contact: <a href="tel:+919999999999" className="underline">+91 99999 99999</a> | <a href="mailto:info@tatahomewash.com" className="underline">info@tatahomewash.com</a></div>
          <div className="mt-2">
            <a href="#" className="underline mr-4">Privacy Policy</a>
            <a href="#" className="underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
