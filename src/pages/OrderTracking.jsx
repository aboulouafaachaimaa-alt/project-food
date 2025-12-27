import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const steps = [
  { key: 'confirmed', label: 'Order Confirmed' },
  { key: 'preparing', label: 'Preparing Your Order' },
  { key: 'out', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' }
];

export default function OrderTracking(){
  const { orderId } = useParams();
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15*60); // seconds

  useEffect(()=>{
    const prog = setInterval(()=>{
      setIndex(i => Math.min(i+1, steps.length-1));
    }, 30000); // advance every 30s (demo)
    return ()=>clearInterval(prog);
  },[]);

  useEffect(()=>{
    const t = setInterval(()=> setTimeLeft(s => Math.max(0,s-1)),1000);
    return ()=>clearInterval(t);
  },[]);

  function formatSeconds(s){
    const m = Math.floor(s/60); const sec = s%60; return `${m}:${sec.toString().padStart(2,'0')}`;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl text-amber-400 mb-2">Order {orderId}</h1>
        <p className="text-slate-400 mb-6">Placed just now • Estimated delivery in <strong>{formatSeconds(timeLeft)}</strong></p>

        <div className="space-y-4">
          {steps.map((s,i)=> (
            <div key={s.key} className={`p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-amber-900/20 flex items-center gap-4 ${i<=index ? 'ring-2 ring-amber-500/30' : ''}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${i<index ? 'bg-amber-400 text-black' : 'bg-black/20 text-amber-400'}`}>
                {i<index ? '✓' : i+1}
              </div>
              <div>
                <div className="text-amber-400 font-semibold">{s.label}</div>
                <div className="text-slate-400 text-sm">{i<=index ? 'Completed' : 'Pending'}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
