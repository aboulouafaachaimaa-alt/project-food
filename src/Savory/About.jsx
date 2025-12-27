import React, { useEffect, useState } from 'react';
import { Star, ChefHat, Clock, Leaf, Trophy, Camera } from 'lucide-react';

export default function SavoryAbout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [lightbox, setLightbox] = useState({ open: false, src: '' });

  useEffect(() => {
    setAnimate(true);
  }, []);

  const chefs = [
    { id: 1, name: 'Marco Valenti', role: 'Executive Chef', bio: 'Michelin-trained maestro focused on Italian fusion and seasonal produce.', img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22300%22/%3E%3Ccircle cx=%22150%22 cy=%22100%22 r=%2230%22 fill=%22%23f59e0b%22 opacity=%220.4%22/%3E%3Crect x=%2260%22 y=%22150%22 width=%22180%22 height=%22100%22 fill=%22%23f59e0b%22 opacity=%220.2%22/%3E%3C/svg%3E' },
    { id: 2, name: 'Aisha Noor', role: 'Pastry Chef', bio: 'Crafts delicate desserts with precision and a modern touch.', img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22300%22/%3E%3Ccircle cx=%22150%22 cy=%22100%22 r=%2230%22 fill=%22%23ea580c%22 opacity=%220.4%22/%3E%3Crect x=%2260%22 y=%22150%22 width=%22180%22 height=%22100%22 fill=%22%23ea580c%22 opacity=%220.2%22/%3E%3C/svg%3E' },
    { id: 3, name: 'Ravi Patel', role: 'Seafood Specialist', bio: 'Expert in sustainable seafood and bold coastal flavors.', img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22300%22/%3E%3Ccircle cx=%22150%22 cy=%22100%22 r=%2230%22 fill=%22%236366f1%22 opacity=%220.4%22/%3E%3Crect x=%2260%22 y=%22150%22 width=%22180%22 height=%22100%22 fill=%22%236366f1%22 opacity=%220.2%22/%3E%3C/svg%3E' },
    { id: 4, name: 'Emilia Rossi', role: 'Sous Chef', bio: 'Leader in kitchen operations and creative tasting menus.', img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22300%22/%3E%3Ccircle cx=%22150%22 cy=%22100%22 r=%2230%22 fill=%22%23ec4899%22 opacity=%220.4%22/%3E%3Crect x=%2260%22 y=%22150%22 width=%22180%22 height=%22100%22 fill=%22%23ec4899%22 opacity=%220.2%22/%3E%3C/svg%3E' }
  ];

  const gallery = [
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%22%23f59e0b%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%22%23ea580c%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%22%236366f1%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%22%23ec4899%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%22%2310b981%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%220ea5e9%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%22%23f59e0b%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%221e293b%22 width=%22300%22 height=%22200%22/%3E%3Crect fill=%22%23ea580c%22 opacity=%220.15%22 width=%22300%22 height=%22200%22/%3E%3C/svg%3E'
  ];

  // counters
  const statsTarget = { years: 12, dishes: 45213, awards: 18 };
  const [stats, setStats] = useState({ years: 0, dishes: 0, awards: 0 });

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1200;
    const animateCounts = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setStats({
        years: Math.floor(t * statsTarget.years),
        dishes: Math.floor(t * statsTarget.dishes),
        awards: Math.floor(t * statsTarget.awards)
      });
      if (t < 1) raf = requestAnimationFrame(animateCounts);
    };
    raf = requestAnimationFrame(animateCounts);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar removed — using shared Navbar */}

      {/* Hero */}
      <header className="relative min-h-[48vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/20 to-orange-900/30"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block mb-4 px-5 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm tracking-wider">★ OUR HERITAGE ★</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Our Story</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">Founded on the pursuit of perfection, Savory blends classic technique and modern imagination to create unforgettable dining.</p>
          </div>
        </div>
      </header>

      {/* History / Timeline */}
      <section className="py-16 bg-black border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 tracking-widest text-sm">HISTORY</span>
            <h2 className="font-serif text-4xl mt-4 mb-4">The Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.1s' }}>
              <h3 className="text-2xl font-serif text-amber-400 mb-2">Founded 2013</h3>
              <p className="text-slate-400">Our doors opened with a small team and a big ambition: to reimagine fine dining for modern palates.</p>
            </div>
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-2xl font-serif text-amber-400 mb-2">Culinary Growth</h3>
              <p className="text-slate-400">Evolving our menus, expanding our team, and embracing seasonal, sustainable sourcing.</p>
            </div>
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.5s' }}>
              <h3 className="text-2xl font-serif text-amber-400 mb-2">Recognized</h3>
              <p className="text-slate-400">Accolades and reviews followed as our signature dining experiences took shape.</p>
            </div>
          </div>

          <div className="mt-10 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20">
            <h4 className="font-serif text-2xl text-amber-400 mb-3">Mission & Vision</h4>
            <p className="text-slate-400">To craft memorable experiences grounded in culinary excellence, sustainability, and heartfelt hospitality.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Chefs */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 tracking-widest text-sm">OUR TEAM</span>
            <h2 className="font-serif text-4xl mt-4 mb-4">Meet Our Chefs</h2>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chefs.map((c, i) => (
              <div key={c.id} className={`group p-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="relative h-56 overflow-hidden rounded-xl mb-4">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-xl text-amber-400">{c.name}</h3>
                <p className="text-sm text-slate-300 italic mb-2">{c.role}</p>
                <p className="text-slate-400 text-sm">{c.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-black border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 tracking-widest text-sm">VALUES</span>
            <h2 className="font-serif text-4xl mt-4 mb-4">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-900/50"><Leaf size={20} className="text-white" /></div>
              <h4 className="font-semibold text-amber-400 mb-2">Quality Ingredients</h4>
              <p className="text-slate-400 text-sm">Sourcing the finest seasonal produce and sustainable proteins.</p>
            </div>
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.06s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-900/50"><ChefHat size={20} className="text-white" /></div>
              <h4 className="font-semibold text-amber-400 mb-2">Culinary Excellence</h4>
              <p className="text-slate-400 text-sm">Technique, creativity and consistent execution at every service.</p>
            </div>
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.12s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-900/50"><Star size={20} className="text-white" /></div>
              <h4 className="font-semibold text-amber-400 mb-2">Customer Experience</h4>
              <p className="text-slate-400 text-sm">Warm, thoughtful service and memorable hospitality.</p>
            </div>
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.18s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-amber-900/50"><Clock size={20} className="text-white" /></div>
              <h4 className="font-semibold text-amber-400 mb-2">Sustainability</h4>
              <p className="text-slate-400 text-sm">Responsible sourcing and reduced waste initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Counters */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 tracking-widest text-sm">AWARDS</span>
            <h2 className="font-serif text-4xl mt-4 mb-4">Recognition</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/50"><Trophy size={24} className="text-white" /></div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.awards}+</div>
                <div className="text-slate-400 text-sm">Awards & Recognitions</div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/50"><Star size={24} className="text-white" /></div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.years}</div>
                <div className="text-slate-400 text-sm">Years of Experience</div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/50"><Camera size={24} className="text-white" /></div>
              <div>
                <div className="text-3xl font-bold text-amber-400">{stats.dishes.toLocaleString()}</div>
                <div className="text-slate-400 text-sm">Dishes Served</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20">Michelin Guide Mention</div>
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20">Top Restaurant Awards</div>
            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20">Outstanding Reviews</div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-black border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-400 tracking-widest text-sm">GALLERY</span>
            <h2 className="font-serif text-4xl mt-4 mb-4">A Glimpse Inside</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <button key={i} onClick={() => setLightbox({ open: true, src: g })} className={`group overflow-hidden rounded-xl transition-all duration-500 border border-amber-900/20 bg-gradient-to-br from-slate-800 to-slate-900 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30`}>
                <img src={g} alt={`gallery-${i}`} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightbox({ open: false, src: '' })}>
          <div className="max-w-4xl mx-auto p-4">
            <img src={lightbox.src} alt="lightbox" className="w-full h-auto rounded-xl shadow-2xl" />
          </div>
        </div>
      )}

      {/* Footer removed — using shared Footer */}
    </div>
  );
}
