import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function OrderSummary({ onPlace }) {
  const { cartItems, cartTotal } = useCart();
  const [promo, setPromo] = useState('');

  const subtotal = cartTotal || 0;
  const tax = +(subtotal * 0.1).toFixed(2);
  const delivery = subtotal > 0 ? 5 : 0;
  const total = +(subtotal + tax + delivery).toFixed(2);

  return (
    <aside className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-amber-900/20">
      <h3 className="font-serif text-2xl text-amber-400 mb-4">Order Summary</h3>
      <div className="space-y-3 mb-4">
        {cartItems.map(i => (
          <div key={i.id} className="flex items-center justify-between text-sm text-slate-300">
            <div className="flex items-center gap-3"><img src={i.image || i.img} alt={i.name} className="w-10 h-8 object-cover rounded" /> <span>{i.name} x{i.quantity}</span></div>
            <div className="text-amber-400">${((parseFloat(String(i.price).replace(/[^0-9.-]+/g, ''))||0)*i.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="text-sm text-slate-400 mb-3">
        <div className="flex justify-between"><span>Subtotal</span><span className="text-amber-400">${subtotal.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Tax (10%)</span><span className="text-amber-400">${tax.toFixed(2)}</span></div>
        <div className="flex justify-between"><span>Delivery</span><span className="text-amber-400">${delivery.toFixed(2)}</span></div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-slate-300">Total</div>
        <div className="text-2xl font-bold text-amber-400">${total.toFixed(2)}</div>
      </div>

      <div className="mb-4">
        <input placeholder="Promo code" value={promo} onChange={e => setPromo(e.target.value)} className="w-full px-4 py-2 rounded bg-black/20 border border-amber-900/20 text-white" />
      </div>

      <div className="flex gap-3">
        <Link to="/menu" className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-full border border-amber-900/20 text-slate-300">Continue Shopping</Link>
        <button onClick={() => onPlace && onPlace()} className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 rounded-full text-white font-semibold">Proceed to Checkout</button>
      </div>
    </aside>
  );
}
