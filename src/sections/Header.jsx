import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <img src="/vite.svg" alt="ShineX Logo" className="h-10 w-auto" />
          <span className="ml-2 font-bold text-xl text-[#004289]">ShineX</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-[#004289] font-medium">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-[#004289] font-medium">Services</Link>
          <Link to="/franchise" className="text-gray-700 hover:text-[#004289] font-medium">Franchise</Link>
          <Link to="/support" className="text-gray-700 hover:text-[#004289] font-medium">Support</Link>
        </nav>
        <Link to="/booking">
          <Button>Book a Wash</Button>
        </Link>
      </div>
    </header>
  );
}
