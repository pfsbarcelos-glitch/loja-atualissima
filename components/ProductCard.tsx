'use client';
import { Product } from '@/lib/products';

export default function ProductCard({ p, onAdd }: { p: Product; onAdd: (id: string) => void }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <div className="relative">
        <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
        <div className="absolute left-3 top-3 flex gap-2">
          {p.tag && <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-medium text-black">{p.tag}</span>}
          {p.originalPrice && <span className="rounded-full border border-neutral-700 bg-neutral-900/70 px-3 py-1 text-sm">Oferta</span>}
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg font-semibold leading-snug">{p.name}</div>
        <div className="text-sm text-neutral-400">{p.brand} • {p.gender} • {p.category}</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-yellow-300">{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(p.price)}</span>
          {p.originalPrice && <span className="text-sm text-neutral-500 line-through">{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(p.originalPrice)}</span>}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm">⭐ {p.rating}</div>
          <button onClick={() => onAdd(p.id)} className="rounded-xl bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-300">Adicionar</button>
        </div>
      </div>
    </div>
  );
}
