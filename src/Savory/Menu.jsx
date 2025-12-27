import React, { useEffect, useState } from 'react';
import { Star, ChefHat, Flame, Leaf, Fish } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function SavoryMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [active, setActive] = useState('All');

  useEffect(() => {
    setAnimate(true);
  }, []);

  const { addToCart } = useCart();

  const categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('/menuDishes.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setMenuItems(data))
      .catch((err) => console.error('Failed to load menu JSON', err));
  }, []);

  const filtered = active === 'All' ? menuItems : menuItems.filter(m => m.cat === active);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar removed — using shared Navbar */}

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/20 to-orange-900/30"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block mb-4 px-5 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm tracking-wider">★ LUXURY MENU COLLECTION ★</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Our Menu</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">Explore our curated selection of appetizers, mains, desserts and beverages crafted to delight.</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-black border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-4 md:gap-6 items-center">
              {categories.map((c, idx) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === c ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-2xl shadow-amber-900/30 scale-105' : 'bg-slate-800 text-slate-300 hover:text-amber-400 border border-amber-900/20'}`}
                  style={{ transitionDelay: `${idx * 0.03}s` }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, idx) => (
              <article
                key={item.id}
                className={`group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-serif text-amber-400 mb-1">{item.name}</h3>
                      <p className="text-slate-400 text-sm mb-3 leading-relaxed">{item.desc}</p>
                      <div className="flex items-center gap-2 text-xs">
                        {item.tags.includes('vegetarian') && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-900/20 text-amber-300"><Leaf size={12} /> Vegetarian</span>
                        )}
                        {item.tags.includes('spicy') && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-900/20 text-amber-300"><Flame size={12} /> Spicy</span>
                        )}
                        {item.tags.includes('chef') && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-900/20 text-amber-300"><ChefHat size={12} /> Chef's</span>
                        )}
                        {item.tags.includes('fish') && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-900/20 text-amber-300"><Fish size={12} /> Fish</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="flex items-center justify-end gap-2 mb-3">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="text-2xl font-bold text-amber-400 mb-3">{item.price}</div>
                      <button onClick={() => addToCart({ id: item.id, name: item.name, price: item.price.replace('$',''), description: item.desc, image: item.img })} className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 rounded-full text-sm hover:shadow-lg hover:shadow-amber-900/50 transition-all duration-300">Order Now</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer removed — using shared Footer */}
    </div>
  );
}
