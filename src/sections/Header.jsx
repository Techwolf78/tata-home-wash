import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { Menu, X, Sparkles, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/franchise', label: 'Franchise' },
    { path: '/support', label: 'Support' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-neutral-200/50'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 via-transparent to-secondary-50/20 opacity-50" />

      <div className="relative container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center group" aria-label="ShineX Home">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0437F2] to-[#0437F2] rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
              <Sparkles className="w-7 h-7 text-white animate-pulse" aria-hidden="true" />
            </div>
          </div>
          <div className="ml-4">
            <span className="font-bold text-2xl text-neutral-900 group-hover:text-[#0437F2] transition-colors">
              ShineX
            </span>
            <div className="text-xs text-neutral-500 font-medium -mt-1">
              Ask for Wash
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 group ${
                location.pathname === item.path
                  ? 'text-[#0437F2] bg-[#0437F2]/10'
                  : 'text-neutral-700 hover:text-[#0437F2] hover:bg-neutral-50'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#0437F2] group-hover:w-full transition-all duration-200 ${
                location.pathname === item.path ? 'w-full' : ''
              }`} />
            </Link>
          ))}
        </nav>

        {/* Contact Info & CTA */}
        <div className="hidden md:flex items-center gap-6">
          {/* Quick Contact */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-medium">+91 99999 99999</span>
            </a>
            <div className="w-px h-4 bg-neutral-300" />
            <a
              href="mailto:support@shinex.com"
              className="flex items-center gap-2 text-neutral-600 hover:text-[#0437F2] transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="font-medium">support@shinex.com</span>
            </a>
          </div>

          {/* CTA Button */}
          <Link to="/booking">
            <Button className="bg-gradient-to-r from-[#0437F2] to-[#0437F2] hover:from-[#0329c1] hover:to-[#0329c1] text-white px-6 py-2.5 rounded-lg shadow-soft hover:shadow-medium transition-all duration-200 flex items-center gap-2 hover:scale-105">
              Book Now
              <Sparkles className="w-4 h-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200/50 shadow-medium animate-slide-up">
          <div className="container mx-auto px-6 py-6">
            {/* Mobile Navigation */}
            <nav className="flex flex-col gap-2 mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#0437F2] bg-[#0437F2]/10'
                      : 'text-neutral-700 hover:text-[#0437F2] hover:bg-neutral-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Contact */}
            <div className="border-t border-neutral-200 pt-6 mb-6">
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-3 text-neutral-600 hover:text-[#0437F2] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium">+91 99999 99999</span>
                </a>
                <a
                  href="mailto:support@shinex.com"
                  className="flex items-center gap-3 text-neutral-600 hover:text-[#0437F2] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <span className="font-medium">support@shinex.com</span>
                </a>
              </div>
            </div>

            {/* Mobile CTA */}
            <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#0437F2] to-[#0437F2] hover:from-[#0329c1] hover:to-[#0329c1] text-white py-3 rounded-lg flex items-center justify-center gap-2">
                Book Now
                <Sparkles className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
