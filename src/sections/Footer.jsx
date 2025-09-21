import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#0437F2] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-bold text-xl">ShineX</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Professional vehicle washing services at your doorstep. Eco-friendly, reliable, and trusted by thousands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Book a Wash
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Become a Franchise
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/car-wash" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Car Wash
                </Link>
              </li>
              <li>
                <Link to="/services/bike-wash" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Bike Wash
                </Link>
              </li>
              <li>
                <Link to="/services/big-vehicle-wash" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Big Vehicle Wash
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0437F2] flex-shrink-0" aria-hidden="true" />
                <a href="tel:+919999999999" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0437F2] flex-shrink-0" aria-hidden="true" />
                <a href="mailto:support@shinex.com" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  support@shinex.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0437F2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-neutral-400 text-sm">Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0437F2] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-neutral-400 text-sm">Mon-Sat: 8AM-6PM<br />Sun: 9AM-4PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2025 ShineX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
