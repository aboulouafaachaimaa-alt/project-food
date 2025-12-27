import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-amber-900/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/Images/logo.svg" alt="Savory" className="h-10 w-auto logo-float transition-transform duration-700 hover:scale-105" />
          <span className={`font-serif text-2xl hidden sm:inline bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent`}>Savory</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {['/', '/about', '/menu', '/reservations', '/contact'].map((p, idx) => (
            <NavLink
              key={p}
              to={p === '/' ? '/' : p}
              className={({isActive}) => `nav-underline relative text-sm tracking-wider ${isActive ? 'text-amber-400 active' : 'text-slate-300'} hover:text-amber-400 transition-colors duration-300`}
            >
              {p === '/' ? 'HOME' : p.replace('/','').toUpperCase()}
            </NavLink>
          ))}
          <Link to="/cart" className="relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2.5 rounded-full hover:shadow-lg hover:shadow-amber-900/50 hover:scale-105 transition-all duration-300">
            <ShoppingCart size={18} />
            <span>ORDER NOW</span>
            {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-amber-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold animate-pulse">{cartCount}</span>}
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-amber-400">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-md px-6 py-4 space-y-4">
          {['HOME','ABOUT','MENU','RESERVATIONS','CONTACT'].map(item => (
            <Link key={item} to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-sm tracking-wider text-slate-300 hover:text-amber-400 transition-colors duration-300">{item}</Link>
          ))}
          <Link to="/cart" onClick={() => setOpen(false)} className="block text-sm tracking-wider text-amber-300">Cart ({cartCount})</Link>
        </div>
      </div>
    </nav>
  );
}
