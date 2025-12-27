import React from 'react';
import { Plus, Minus, Trash } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-2xl border border-amber-900/20 flex gap-4 items-center">
      <img src={item.image || item.img || ''} alt={item.name} className="w-24 h-20 object-cover rounded-lg" />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-serif text-amber-400">{item.name}</h4>
            <p className="text-slate-400 text-sm">{item.desc || item.description}</p>
          </div>
          <div className="text-amber-400 font-bold">{item.price}</div>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 rounded-full bg-black/30"><Minus size={14}/></button>
          <div className="px-3 py-1 bg-black/20 rounded">{item.quantity}</div>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 rounded-full bg-black/30"><Plus size={14}/></button>
          <button onClick={() => removeFromCart(item.id)} className="ml-4 p-2 rounded-full bg-red-700/20 text-red-400"><Trash size={14}/></button>
        </div>
      </div>
    </div>
  );
}
