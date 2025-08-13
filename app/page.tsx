'use client';
import { useMemo, useState } from 'react';
import { PRODUCTS, type Product } from '@/lib/products';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';
import { motion } from 'framer-motion';

export default function Page() {
  const [items, setItems] = useState<{id: string, qty: number}[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [q, setQ] = useState('');

  const add = (id: string) => setItems(prev => {
    const i = prev.find(p => p.id === id);
    if (i) return prev.map(p => p.id === id ? {...p, qty: p.qty + 1} : p);
    return [...prev, { id, qty: 1 }];
  });
  const dec = (id: string) => setItems(prev => prev.map(p => p.id === id ? {...p, qty: Math.max(0, p.qty - 1)} : p).filter(p => p.qty > 0));
  const remove = (id: string) => setItems(prev => prev.filter(p => p.id !== id));

  const enriched = useMemo(() => items.map(({id, qty}) => ({...PRODUCTS.find(p => p.id === id)! as Product, qty })), [items]);

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return PRODUCTS.filter(p => p.name.toLowerCase().includes(t) || p.category.toLowerCase().includes(t));
  }, [q]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header cartCount={items.reduce((a,b)=>a+b.qty,0)} onOpenCart={()=>setShowCart(true)} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black" />
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.2}} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              <span className="text-neutral-200">Perfumes Importados</span>
              <span className="block text-yellow-400">Lattafa na Atualíssima</span>
            </h1>
            <p className="mt-4 text-neutral-300 max-w-xl">Luxo árabe com entrega no Brasil. Escolha seu favorito.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#produtos" className="rounded-xl bg-yellow-400 px-5 py-2.5 text-black hover:bg-yellow-300">Ver ofertas</a>
              <a href="#sobre" className="rounded-xl border border-neutral-800 px-5 py-2.5 hover:bg-neutral-900">Sobre a marca</a>
            </div>
          </div>
          <motion.div initial={{ x: '-100%', opacity: 0 }} animate={{ x: '150%', opacity: 0.25 }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} className="pointer-events-none absolute -top-10 left-0 h-[200%] w-1/3 rotate-12 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"/>
        </motion.div>
      </section>

      <main id="produtos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <input
            className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Buscar por nome ou categoria (ex.: Oud, Doce, Oriental)"
            value={q}
            onChange={(e)=>setQ(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p as Product} onAdd={add} />
          ))}
        </div>
      </main>

      <footer id="sobre" className="border-t border-neutral-800 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-neutral-300 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <h3 className="mb-2 font-semibold text-neutral-100">Atualíssima</h3>
            <p className="text-sm">Perfumes importados Lattafa selecionados. Envio para todo o Brasil.</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-neutral-100">Atendimento</h3>
            <p className="text-sm">Seg–Sex, 09h–18h (BRT)</p>
            <p className="text-sm">WhatsApp: (00) 00000-0000</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-neutral-100">Pagamentos</h3>
            <p className="text-sm">Pix, Cartão, Boleto (integração posterior)</p>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Atualíssima. Todos os direitos reservados.</div>
      </footer>

      {showCart && (
        <CartDrawer
          items={enriched}
          onAdd={add}
          onDec={dec}
          onRemove={remove}
          onClose={()=>setShowCart(false)}
        />
      )}
    </div>
  );
}
