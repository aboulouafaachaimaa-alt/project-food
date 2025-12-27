import React, { useState } from 'react';

const allImages = Array.from({length:20}).map((_,i)=>({
  id: i+1,
  cat: ['Interior','Dishes','Events','Kitchen'][i%4],
  src: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='100%25' height='100%25' fill='%231e293b'/%3E%3Ctext x='50%25' y='50%25' fill='%23f59e0b' font-size='36' text-anchor='middle' alignment-baseline='middle'%3EImage+${i+1}%3C/text%3E%3C/svg%3E`
}));

export default function Gallery(){
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState({open:false, idx:0});
  const images = filter === 'All' ? allImages : allImages.filter(i=>i.cat===filter);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-serif text-4xl text-amber-400 mb-6">Our Gallery</h1>

        <div className="mb-6 flex gap-3 flex-wrap">
          {['All','Interior','Dishes','Events','Kitchen'].map(f=> (
            <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-2 rounded-full ${filter===f ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' : 'bg-slate-800 text-slate-300'}`}>{f}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img,i)=> (
            <button key={img.id} onClick={()=>setLightbox({open:true, idx:i})} className="group overflow-hidden rounded-2xl border border-amber-900/20 bg-gradient-to-br from-slate-800 to-slate-900">
              <img src={img.src} alt={`g-${img.id}`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </button>
          ))}
        </div>

        {lightbox.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <button onClick={()=>setLightbox({open:false, idx:0})} className="absolute top-6 right-6 text-white text-2xl">✕</button>
            <div className="max-w-4xl mx-auto p-4">
              <img src={images[lightbox.idx].src} alt="lightbox" className="w-full h-auto rounded" />
              <div className="text-center text-slate-400 mt-2">{lightbox.idx+1}/{images.length}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
