'use client';
import { Product } from '@/lib/products';

export default function CartDrawer({
  items,
  onAdd,
  onDec,
  onRemove,
  onClose,
}: {
  items: (Product & { qty: number })[];
  onAdd: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
  onClose: () => void;
}) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-neutral-950 border-l border-neutral-800 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Seu carrinho</h3>
          <button className="text-neutral-400" onClick={onClose}>✕</button>
        </div>
        <div className="mt-4 space-y-4 max-h-[70vh] overflow-auto pr-2">
          {items.length === 0 && <p className="text-neutral-400">Seu carrinho está vazio.</p>}
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-4">
              <img src={it.image} alt={it.name} className="h-16 w-16 rounded-xl object-cover border border-neutral-800" />
              <div className="flex-1">
                <div className="font-medium leading-tight">{it.name}</div>
                <div className="text-sm text-neutral-400">{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(it.price)}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button className="rounded-md border border-neutral-700 px-2" onClick={() => onDec(it.id)}>-</button>
                  <span className="text-sm">{it.qty}</span>
                  <button className="rounded-md border border-neutral-700 px-2" onClick={() => onAdd(it.id)}>+</button>
                </div>
              </div>
              <button className="text-neutral-400" onClick={() => onRemove(it.id)}>🗑️</button>
            </div>
          ))}
        </div>
        <div className="mt-4 border-top border-neutral-800 pt-4">
          <div className="flex items-center justify-between">
            <span>Total</span>
            <span className="text-xl font-semibold">{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(total)}</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            <button className="rounded-xl border border-neutral-700 px-3 py-2 hover:bg-neutral-900">Pix</button>
            <button className="rounded-xl border border-neutral-700 px-3 py-2 hover:bg-neutral-900">Cartão</button>
            <button className="rounded-xl border border-neutral-700 px-3 py-2 hover:bg-neutral-900">Boleto</button>
          </div>
          <button className="mt-4 w-full rounded-xl bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-300">Finalizar compra</button>
          <p className="mt-2 text-xs text-neutral-500">Integrações reais (Pix/Stripe/Mercado Pago) podem ser conectadas depois.</p>
        </div>
      </div>
    </div>
  );
}
