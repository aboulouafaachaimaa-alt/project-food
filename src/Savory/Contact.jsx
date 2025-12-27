import React, { useEffect, useState } from 'react';
import { Mail, CheckCircle, ChevronDown, MapPin, Phone } from 'lucide-react';

export default function SavoryContact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const extraStyles = `
    @keyframes shake { 0%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}100%{transform:translateX(0)} }
    .shake { animation: shake 400ms ease-in-out; }
    @keyframes pop { 0%{opacity:0; transform:scale(.8)}60%{opacity:1; transform:scale(1.05)}100%{transform:scale(1)} }
    .pop { animation: pop 400ms ease both; }
  `;

  const faq = [
    { q: 'Do you accept reservations?', a: 'Yes — reservations are recommended for dinner service. Use our reservations page or call us.' },
    { q: 'Do you offer private events?', a: 'We offer private dining and events — contact our events team for details.' },
    { q: 'Is there parking available?', a: 'Valet and street parking available nearby; please check reservation notes for details.' },
    { q: 'Do you accommodate dietary restrictions?', a: 'We happily accommodate allergies and dietary requests when notified in advance.' },
    { q: 'What is the dress code?', a: 'Smart casual. We recommend elegant attire for evening service.' }
  ];

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.message.trim()) e.message = 'Message cannot be empty';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', subject: 'General', message: '' });
      setTimeout(() => setSuccess(false), 2500);
    }, 900);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <style>{extraStyles}</style>

      {/* Navbar removed — using shared Navbar */}

      {/* Hero */}
      <header className="relative min-h-[36vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/20 to-orange-900/30"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block mb-4 px-5 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full backdrop-blur-sm">
              <span className="text-amber-400 text-sm tracking-wider">★ CONTACT US ★</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl mb-4 leading-tight">Get In Touch</h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">We welcome inquiries, reservations and event requests — our team will respond promptly.</p>
          </div>
        </div>
      </header>

      {/* Contact Form + Cards */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <form onSubmit={handleSubmit} className={`${shake ? 'shake' : ''} bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-amber-900/20 shadow-lg`}> 
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-slate-300">Name</label>
                  <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={`w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border ${errors.name ? 'border-red-500' : 'border-amber-900/20'} text-white focus:outline-none`} />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={`w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border ${errors.email ? 'border-red-500' : 'border-amber-900/20'} text-white focus:outline-none`} />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-slate-300">Phone</label>
                  <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={`w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border ${errors.phone ? 'border-red-500' : 'border-amber-900/20'} text-white focus:outline-none`} />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-sm text-slate-300">Subject</label>
                  <select value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border border-amber-900/20 text-white">
                    <option>General</option>
                    <option>Reservations</option>
                    <option>Events</option>
                    <option>Feedback</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-slate-300">Message</label>
                <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={6} className={`w-full mt-2 px-4 py-3 rounded-lg bg-black/40 border ${errors.message ? 'border-red-500' : 'border-amber-900/20'} text-white focus:outline-none`} />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-center gap-4">
                <button type="submit" disabled={submitting} className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 rounded-full text-sm font-semibold hover:shadow-2xl hover:shadow-amber-900/50 transition-all duration-300">
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                {success && (
                  <div className="flex items-center gap-2 text-amber-400 pop">
                    <CheckCircle size={20} /> <span className="text-sm">Message sent</span>
                  </div>
                )}
              </div>
            </form>
          </section>

          {/* Contact Cards */}
          <aside className="space-y-4">
            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 flex items-start gap-4 transition-all duration-500 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`} style={{ transitionDelay: '0.05s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg text-white"><MapPin size={20} /></div>
              <div>
                <h4 className="font-semibold text-amber-400">Location</h4>
                <p className="text-slate-400 text-sm">123 Luxury Ave, City</p>
                <a href="#" className="inline-block mt-3 px-4 py-2 rounded-full bg-transparent border border-amber-900/20 text-amber-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white transition-all duration-300">Get Directions</a>
              </div>
            </div>

            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 flex items-start gap-4 transition-all duration-500 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`} style={{ transitionDelay: '0.12s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg text-white"><Phone size={20} /></div>
              <div>
                <h4 className="font-semibold text-amber-400">Phone</h4>
                <p className="text-slate-400 text-sm">+1 234 567 890</p>
                <a href="tel:+1234567890" className="inline-block mt-3 px-4 py-2 rounded-full bg-transparent border border-amber-900/20 text-amber-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white transition-all duration-300">Call Now</a>
              </div>
            </div>

            <div className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 flex items-start gap-4 transition-all duration-500 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`} style={{ transitionDelay: '0.18s' }}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg text-white"><Mail size={20} /></div>
              <div>
                <h4 className="font-semibold text-amber-400">Email</h4>
                <p className="text-slate-400 text-sm">hello@savory.example</p>
                <a href="mailto:hello@savory.example" className="inline-block mt-3 px-4 py-2 rounded-full bg-transparent border border-amber-900/20 text-amber-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white transition-all duration-300">Send Email</a>
              </div>
            </div>
          </aside>
        </div>

        {/* Map Placeholder */}
        <section className="mt-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 overflow-hidden relative h-64 md:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 opacity-60"></div>
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              <circle cx="200" cy="150" r="100" fill="none" stroke="rgba(251, 146, 60, 0.3)" strokeWidth="2"/>
              <circle cx="200" cy="150" r="60" fill="none" stroke="rgba(251, 146, 60, 0.4)" strokeWidth="1"/>
              <path d="M 200 150 L 220 120" stroke="rgba(251, 146, 60, 0.5)" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-900/50">
              <MapPin size={32} className="text-white" />
            </div>
            <div className="bg-black/80 px-6 py-3 rounded-lg border border-amber-900/30 backdrop-blur-sm">
              <div className="text-amber-400 font-semibold">123 Luxury Ave, City</div>
              <p className="text-slate-400 text-sm mt-1">Open Map Directions</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl text-amber-400">Frequently Asked</h3>
            <p className="text-slate-400">Answers to common questions about reservations, events and policies.</p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faq.map((f, i) => (
              <div key={i} className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 overflow-hidden transition-all duration-300 ${openFaq === i ? 'ring-2 ring-amber-500/30' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                  <div className="flex-1">
                    <div className="text-amber-400 font-semibold">{f.q}</div>
                  </div>
                  <ChevronDown className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 pb-4 text-slate-400 transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}> 
                  {openFaq === i && <p className="pt-2">{f.a}</p>}
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