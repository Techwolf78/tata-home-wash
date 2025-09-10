import React from 'react';
import { Button } from '../components/Button';

export default function Header({ onBook }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src="/vite.svg" alt="Tata Home Wash Logo" className="h-10 w-auto" />
          <span className="ml-2 font-bold text-xl text-blue-700">Tata Home Wash</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
          <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium">Process</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
        </nav>
        <Button onClick={onBook}>Book a Wash</Button>
      </div>
    </header>
  );
}
