import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export default function SavoryReservations() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', time: '19:00', guests: '2', requests: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const hours = [
    { day: 'Monday - Friday', time: '11:00 AM - 11:00 PM', icon: Clock },
    { day: 'Saturday', time: '10:00 AM - 12:00 AM', icon: Clock },
    { day: 'Sunday', time: '10:00 AM - 11:00 PM', icon: Clock }
  ];

  const gallery = [
    '/Images/Dining%20Experience1.jpg',
    '/Images/Dining%20Experience2.jpg',
    '/Images/Dining%20Experience3.jpg',
    '/Images/Dining%20Experience4.jpg',
    '/Images/Dining%20Experience5.jpg',
    '/Images/Dining%20Experience6.jpg'
  ];

  const extraStyles = `
    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .slide-left { animation: slideInLeft 0.6s ease forwards; }
    .slide-right { animation: slideInRight 0.6s ease forwards; }
    .fade-up { animation: fadeInUp 0.6s ease forwards; }
    input:focus, textarea:focus, select:focus { border-color: rgb(217, 119, 6) !important; box-shadow: 0 0 12px rgba(217, 119, 6, 0.3); }
    @keyframes pop { 0%{opacity:0; transform:scale(.8)}60%{opacity:1; transform:scale(1.05)}100%{transform:scale(1)} }
    .pop { animation: pop 400ms ease both; }
  `;

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.date) e.date = 'Date is required';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) {
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', date: '', time: '19:00', guests: '2', requests: '' });
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  }

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{extraStyles}</style>
      {/* Navbar removed — using shared Navbar */}

      {/* Hero */}
      <header className="relative min-h-[40vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/20 to-orange-900/30"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block mb-4 px-5 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm tracking-wider">★ BOOK YOUR TABLE ★</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Reserve Your Table</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">Secure your seat for an unforgettable evening of culinary excellence and refined hospitality.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Reservation Form */}
          <section className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-amber-900/20 shadow-lg">
              <h2 className="font-serif text-3xl text-amber-400 mb-6">Your Reservation</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="slide-left" style={{ animationDelay: '0.1s' }}>
                    <label className="text-sm text-amber-400 font-medium">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className={`w-full mt-2 px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.name ? 'border-red-500' : 'border-amber-900/30'} text-white placeholder-slate-500 focus:outline-none transition-all duration-300`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div className="slide-right" style={{ animationDelay: '0.15s' }}>
                    <label className="text-sm text-amber-400 font-medium">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className={`w-full mt-2 px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-amber-900/30'} text-white placeholder-slate-500 focus:outline-none transition-all duration-300`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="slide-left" style={{ animationDelay: '0.2s' }}>
                    <label className="text-sm text-amber-400 font-medium">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      className={`w-full mt-2 px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.phone ? 'border-red-500' : 'border-amber-900/30'} text-white placeholder-slate-500 focus:outline-none transition-all duration-300`}
                      placeholder="+1 234 567 8900"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                  <div className="slide-right" style={{ animationDelay: '0.25s' }}>
                    <label className="text-sm text-amber-400 font-medium">Number of Guests</label>
                    <select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})} className="w-full mt-2 px-4 py-3 rounded-lg bg-slate-800/50 border border-amber-900/30 text-white focus:outline-none transition-all duration-300">
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="slide-left" style={{ animationDelay: '0.3s' }}>
                    <label className="text-sm text-amber-400 font-medium">Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={e => setForm({...form, date: e.target.value})}
                      min={getTodayDate()}
                      className={`w-full mt-2 px-4 py-3 rounded-lg bg-slate-800/50 border ${errors.date ? 'border-red-500' : 'border-amber-900/30'} text-white focus:outline-none transition-all duration-300`}
                    />
                    {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
                  </div>
                  <div className="slide-right" style={{ animationDelay: '0.35s' }}>
                    <label className="text-sm text-amber-400 font-medium">Time</label>
                    <select value={form.time} onChange={e => setForm({...form, time: e.target.value})} className="w-full mt-2 px-4 py-3 rounded-lg bg-slate-800/50 border border-amber-900/30 text-white focus:outline-none transition-all duration-300">
                      {['11:00', '11:30', '12:00', '12:30', '13:00', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="slide-left" style={{ animationDelay: '0.4s' }}>
                  <label className="text-sm text-amber-400 font-medium">Special Requests</label>
                  <textarea
                    value={form.requests}
                    onChange={e => setForm({...form, requests: e.target.value})}
                    rows={4}
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-slate-800/50 border border-amber-900/30 text-white placeholder-slate-500 focus:outline-none transition-all duration-300"
                    placeholder="Dietary restrictions, special occasions, seating preferences..."
                  />
                </div>

                {/* Submit & Success */}
                <div className="flex items-center gap-4 pt-4 slide-right" style={{ animationDelay: '0.45s' }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-amber-900/50 hover:scale-105 transition-all duration-300 disabled:opacity-70"
                  >
                    {submitting ? 'Confirming...' : 'Confirm Reservation'}
                  </button>
                  {success && (
                    <div className="flex items-center gap-2 text-amber-400 pop">
                      <CheckCircle size={20} /> <span className="text-sm font-medium">Reservation confirmed!</span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </section>

          {/* Sidebar: Hours & Contact */}
          <aside className="space-y-6">
            {/* Opening Hours */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-amber-900/20">
              <h3 className="font-serif text-2xl text-amber-400 mb-4">Opening Hours</h3>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="fade-up" style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
                    <p className="text-sm font-semibold text-amber-300">{h.day}</p>
                    <p className="text-slate-400 text-sm">{h.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-amber-900/20">
              <h3 className="font-serif text-2xl text-amber-400 mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-start gap-3 text-slate-400 hover:text-amber-400 transition-colors">
                  <Phone size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">+1 234 567 890</p>
                    <p className="text-xs">Call to reserve</p>
                  </div>
                </a>
                <a href="mailto:reservations@savory.example" className="flex items-start gap-3 text-slate-400 hover:text-amber-400 transition-colors">
                  <Mail size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">reservations@savory.example</p>
                    <p className="text-xs">Email us</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold">123 Luxury Ave</p>
                    <p className="text-xs">City, Country 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-amber-900/20">
              <h3 className="font-serif text-2xl text-amber-400 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white hover:scale-110 transition-transform"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white hover:scale-110 transition-transform"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white hover:scale-110 transition-transform"><Twitter size={18} /></a>
              </div>
            </div>
          </aside>
        </div>

        {/* Gallery */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <span className="text-amber-400 tracking-widest text-sm">AMBIANCE</span>
            <h2 className="font-serif text-4xl mt-4 mb-4">Dining Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((g, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl border border-amber-900/20 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900/30 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${1.4 + i * 0.08}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={g} alt={`Dining Experience ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute left-4 bottom-4 bg-black/40 px-3 py-1 rounded-full text-xs text-amber-200 backdrop-blur-sm opacity-90 transition-transform duration-300 transform-gpu group-hover:-translate-y-1">
                    Dining Experience {i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer removed — using shared Footer */}
    </div>
  );
}
