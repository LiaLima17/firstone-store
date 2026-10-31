"use client";

import { ShoppingBag, Sparkles } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAI: () => void;
}

export default function Header({ cartCount, onOpenCart, onOpenAI }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-black tracking-widest text-white uppercase">
            FIRST<span className="text-orange-500">ONE</span>.
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenAI}
            className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold tracking-wider text-orange-400 hover:bg-orange-500/20 transition-all"
          >
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Assistente IA</span>
          </button>
          <button 
            onClick={onOpenCart}
            className="relative flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 p-3 text-zinc-300 hover:border-zinc-700 hover:text-white transition-all"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}