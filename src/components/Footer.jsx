import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-amber-900/30 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl text-amber-400 mb-4">Savory</h3>
            <p className="text-slate-400 text-sm">Where taste meets elegance</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Quick Links</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="hover:text-amber-400 cursor-pointer transition-colors">About Us</p>
              <p className="hover:text-amber-400 cursor-pointer transition-colors">Menu</p>
              <p className="hover:text-amber-400 cursor-pointer transition-colors">Reservations</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Contact</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-center gap-2"><Phone size={16} /> +1 234 567 890</p>
              <p className="flex items-center gap-2"><MapPin size={16} /> 123 Luxury Ave</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-amber-400">Hours</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Mon - Fri: 11am - 11pm</p>
              <p>Sat - Sun: 10am - 12am</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-amber-900/30">
          <p className="text-slate-500 text-sm">© 2025 Savory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
