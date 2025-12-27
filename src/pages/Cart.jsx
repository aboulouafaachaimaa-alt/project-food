import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

export default function CartPage(){
  const { cartItems } = useCart();
  const navigate = useNavigate();

  function handlePlace(){
    navigate('/checkout');
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-serif text-4xl text-amber-400 mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-amber-900/20 text-center">
            <p className="text-slate-300 mb-4">Your cart is empty.</p>
            <button onClick={() => navigate('/menu')} className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 rounded-full">Browse Menu</button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(i=> <CartItem key={i.id} item={i} />)}
            </div>
            <div>
              <OrderSummary onPlace={handlePlace} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
