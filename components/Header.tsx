'use client';
import { useState } from 'react';

export default function Header({ cartCount, onOpenCart }: { cartCount: number; onOpenCart: () => void }) {
  const [q, setQ] = useState('');
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-800 backdrop-blur bg-neutral-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-wide">
          <span className="text-yellow-400">Atualíssima</span> • Lattafa
        </div>
        <div className="hidden md:block w-[40ch]">
          <div className="relative">
            <input
              className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-9 py-2 outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Buscar perfumes, notas, coleções"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">🔎</span>
          </div>
        </div>
        <button
          onClick={onOpenCart}
          className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-yellow-300 hover:bg-yellow-400/20"
        >
          🛍️ Carrinho ({cartCount})
        </button>
      </div>
    </header>
  );
}
