import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout(){
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name:'', email:'', phone:'', address1:'', city:'', postal:'', method:'card', cardNumber:'', expiry:'', cvv:'', cardName:'' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name='Required';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email='Invalid email';
    if (!form.phone) e.phone='Required';
    if (!form.address1) e.address1='Required';
    if (form.method === 'card'){
      if (!form.cardNumber.match(/^[0-9 ]{12,19}$/)) e.cardNumber='Invalid';
      if (!form.expiry) e.expiry='Required';
      if (!form.cvv.match(/^[0-9]{3,4}$/)) e.cvv='Invalid';
    }
    return e;
  };

  const handlePlace = async (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length) return;
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      const orderId = 'SAV' + Date.now();
      clearCart();
      navigate(`/order-tracking/${orderId}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-amber-900/20">
          <h2 className="font-serif text-2xl text-amber-400 mb-4">Delivery Information</h2>
          <form onSubmit={handlePlace} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
              <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
              <input placeholder="Address line 1" value={form.address1} onChange={e=>setForm({...form,address1:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="City" value={form.city} onChange={e=>setForm({...form,city:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
              <input placeholder="Postal code" value={form.postal} onChange={e=>setForm({...form,postal:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
            </div>

            <h3 className="font-serif text-xl text-amber-400 mt-6">Payment Method</h3>
            <div className="space-y-2">
              <label className="inline-flex items-center gap-3"><input type="radio" name="method" checked={form.method==='card'} onChange={()=>setForm({...form,method:'card'})} /> Credit / Debit Card</label>
              <label className="inline-flex items-center gap-3"><input type="radio" name="method" checked={form.method==='cash'} onChange={()=>setForm({...form,method:'cash'})} /> Cash on Delivery</label>
            </div>

            {form.method === 'card' && (
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Card number" value={form.cardNumber} onChange={e=>setForm({...form,cardNumber:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
                <input placeholder="Expiry (MM/YY)" value={form.expiry} onChange={e=>setForm({...form,expiry:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
                <input placeholder="CVV" value={form.cvv} onChange={e=>setForm({...form,cvv:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
                <input placeholder="Cardholder name" value={form.cardName} onChange={e=>setForm({...form,cardName:e.target.value})} className="px-4 py-3 rounded bg-black/20 border border-amber-900/20" />
              </div>
            )}

            <div className="pt-4">
              <button type="submit" disabled={loading} className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 rounded-full text-white font-semibold">{loading ? 'Placing order...' : 'Place Order'}</button>
            </div>
          </form>
        </section>

        <aside className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-amber-900/20">
          <h3 className="font-serif text-2xl text-amber-400 mb-4">Order Summary</h3>
          <div className="space-y-3 mb-4">
            {cartItems.map(i => (
              <div key={i.id} className="flex items-center justify-between text-sm text-slate-300">
                <div className="flex items-center gap-3"><img src={i.image||i.img} alt={i.name} className="w-10 h-8 object-cover rounded"/> <span>{i.name} x{i.quantity}</span></div>
                <div className="text-amber-400">${((parseFloat(String(i.price).replace(/[^0-9.-]+/g, ''))||0)*i.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="text-sm text-slate-400">
            <div className="flex justify-between"><span>Subtotal</span><span className="text-amber-400">${(cartTotal||0).toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Tax (10%)</span><span className="text-amber-400">${((cartTotal||0)*0.1).toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span className="text-amber-400">$5.00</span></div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-slate-300">Total</div>
            <div className="text-2xl font-bold text-amber-400">${((cartTotal||0)+ (cartTotal||0)*0.1 + 5).toFixed(2)}</div>
          </div>
        </aside>
      </main>
    </div>
  );
}
