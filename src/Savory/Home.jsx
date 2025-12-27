import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Star, ChefHat, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function SavoryHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { addToCart } = useCart();

  const premiumDishes = [
    {
      name: 'Pan Seared Salmon',
      desc: 'Fresh Atlantic salmon with herb butter, perfectly seared to golden perfection',
      price: '$32',
      rating: 5,
      image: './Images/Pan-Seared Salmon With Skin.jpg'
    },
    {
      name: 'Beef Wellington',
      desc: 'Premium beef tenderloin wrapped in mushroom duxelles and golden puff pastry',
      price: '$45',
      rating: 5,
      image: './Images/Beef Wellington Recipe PDF _ Gourmet Dinner _ Holiday Main Course _ Step-by-Step Digital Cooking.jpg'
    },
    {
      name: 'Mediterranean Prawns',
      desc: 'Succulent prawns with aromatic herbs, served on a bed of saffron rice',
      price: '$38',
      rating: 5,
      image: './Images/prawns.jpg'
    }
  ];

  const features = [
    { icon: ChefHat, title: 'Expert Chefs', desc: 'Michelin-trained culinary masters' },
    { icon: Star, title: 'Premium Quality', desc: 'Only the finest ingredients' },
    { icon: Clock, title: 'Fast Service', desc: 'Elegant dining, efficient service' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar removed — using shared Navbar */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/20 to-orange-900/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCA2NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12' }`}>
            <div className="inline-block mb-6 px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm tracking-wider">★ LUXURY DINING EXPERIENCE ★</span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent animate-pulse">
                Where Taste
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                Meets Elegance
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience culinary artistry with our carefully crafted dishes, 
              made from the finest ingredients by award-winning chefs
            </p>
            
            <button onClick={() => navigate('/menu')} className="group bg-gradient-to-r from-amber-600 to-orange-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-amber-900/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
              EXPLORE OUR MENU
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 tracking-widest text-sm">WHY CHOOSE US</span>
            <h2 className="font-serif text-5xl mt-4 mb-4">Our Commitment</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${idx * 0.2}s`
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-amber-900/50">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-serif mb-3 text-amber-400">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Dishes Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-400 tracking-widest text-sm">SIGNATURE COLLECTION</span>
            <h2 className="font-serif text-5xl mt-4 mb-4">Premium Dishes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {premiumDishes.map((dish, idx) => (
              <div
                key={dish.name}
                className={`group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${idx * 0.2}s`
                }}
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden group-hover:shadow-inner transition-all duration-500">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-serif text-amber-400">{dish.name}</h3>
                    <div className="flex gap-1">
                      {[...Array(dish.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{dish.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-400">{dish.price}</span>
                    <button onClick={() => addToCart({ id: dish.name, name: dish.name, price: dish.price, description: dish.desc, image: dish.image })} className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-2 rounded-full text-sm hover:shadow-lg hover:shadow-amber-900/50 transition-all duration-300 hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-amber-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCA2NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-5xl mb-6">Reserve Your Table</h2>
          <p className="text-xl text-slate-300 mb-10">
            Experience an unforgettable evening with us. Book your table today.
          </p>
          <button onClick={() => navigate('/reservations')} className="bg-gradient-to-r from-amber-600 to-orange-600 px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-amber-900/50 hover:scale-105 transition-all duration-300">
            MAKE A RESERVATION
          </button>
        </div>
      </section>

      {/* Footer removed — using shared Footer */}
    </div>
  );
}