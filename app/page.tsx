"use client";

import { useState } from "react";
import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import ProductCard from "@/app/components/productCard";
import AIAssistantModal from "@/app/components/AiAssistantModal";
import { PRODUCTS, Product } from "@/app/data/products";

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)} 
        onOpenAI={() => setIsAIModalOpen(true)} 
      />

      <Hero />

      <main id="catalog" className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">Seleção Exclusiva</span>
          <h2 className="text-3xl font-black tracking-tight text-white mt-2">LANÇAMENTOS EM DESTAQUE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950 py-12 text-center text-xs text-zinc-500">
        <p>© 2026 FIRSTONE. Todos os direitos reservados.</p>
      </footer>

      <AIAssistantModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md border-l border-zinc-800 bg-[#121214] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="text-sm font-bold tracking-widest uppercase text-white">O teu Carrinho ({cart.length})</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-zinc-400 hover:text-white">✕</button>
              </div>
              <div className="mt-6 space-y-4 max-h-96 overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-xs text-zinc-500 text-center py-12">O teu carrinho está vazio.</p>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-zinc-900 pb-4">
                      <div>
                        <h4 className="text-xs font-semibold text-white">{item.name}</h4>
                        <span className="text-xs text-zinc-400">R$ {item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="border-t border-zinc-800 pt-4">
              <button 
                onClick={() => alert("Redirecionando para o WhatsApp da Firstone!")}
                className="w-full bg-orange-500 py-4 text-xs font-bold tracking-widest text-white uppercase hover:bg-orange-600 transition-all"
              >
                Finalizar via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}