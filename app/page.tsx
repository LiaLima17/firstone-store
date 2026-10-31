'use client';

import { useState } from 'react';
import { ShoppingBag, User, X, ArrowRight, Sparkles } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Moletom Minimal Heavyweight',
    category: 'Roupas',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Anel Bold Signature Aço',
    category: 'Acessórios',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Colar Chain Minimal',
    category: 'Acessórios',
    price: 119.90,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Moletom Oversized Clean',
    category: 'Roupas',
    price: 229.90,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
  }
];

export default function StorePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [cart, setCart] = useState<any[]>([]);
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const addToCart = (product: any) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
    setCartOpen(true);
  };

  const removeFromCart = (cartId: number) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const calcularFrete = () => {
    if (cep.length >= 8) {
      setFrete(20.00);
    } else {
      alert('Digite um CEP válido com 8 dígitos.');
    }
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const freteFinal = subtotal >= 200 ? 0 : (frete || 0);
  const total = subtotal + freteFinal;

  const filteredProducts = selectedCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const finalizarPedidoWhatsApp = () => {
    if (cart.length === 0) return;
    let mensagem = `*Novo Pedido - Firstone*%0A%0A`;
    cart.forEach((item, index) => {
      mensagem += `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)}%0A`;
    });
    mensagem += `%0A*Subtotal:* R$ ${subtotal.toFixed(2)}`;
    mensagem += `%0A*Frete:* R$ ${freteFinal.toFixed(2)}`;
    mensagem += `%0A*Total:* R$ ${total.toFixed(2)}%0A%0A_Enviado pelo site oficial_`;

    window.open(`https://wa.me/5511999999999?text=${mensagem}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111]">
      
      <div className="bg-[#111111] text-white text-xs py-2 text-center tracking-widest uppercase font-medium">
        Frete Grátis para todo o Brasil em compras acima de R$ 200
      </div>

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-2xl font-black tracking-tighter text-[#111111] cursor-pointer">
              FIRST<span className="text-[#FF5500]">ONE</span>.
            </span>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
              <button onClick={() => setSelectedCategory('Todos')} className="hover:text-black transition">Início</button>
              <button onClick={() => setSelectedCategory('Roupas')} className="hover:text-black transition">Roupas</button>
              <button onClick={() => setSelectedCategory('Acessórios')} className="hover:text-black transition">Acessórios</button>
            </nav>
          </div>

          <div className="flex items-center gap-5">
            <button onClick={() => setAuthOpen(true)} className="p-2 hover:bg-gray-100 rounded-full transition text-gray-700">
              <User className="w-5 h-5" />
            </button>
            <button onClick={() => setCartOpen(true)} className="relative p-2 hover:bg-gray-100 rounded-full transition text-gray-700">
              <ShoppingBag className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute top-1 right-1 bg-[#FF5500] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <section className="bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#FF5500] font-bold">Nova Coleção Streetwear</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-3 mb-6 text-[#111111]">
              Essência pura, minimalismo e atitude.
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Peças desenvolvidas com cortes precisos, tecidos premium e acessórios marcantes para quem dita o próprio ritmo.
            </p>
            <button 
              onClick={() => document.getElementById('vitrine')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#111111] hover:bg-[#FF5500] text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-full transition duration-300 flex items-center gap-3 shadow-lg"
            >
              Explorar Catálogo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1000" 
              alt="Editorial Firstone" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <main id="vitrine" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Lançamentos em Destaque</h2>
            <p className="text-sm text-gray-500 mt-1">Moletons sem estampas e acessórios exclusivos.</p>
          </div>
          <div className="flex gap-2 bg-white p-1 rounded-full border border-gray-200">
            {['Todos', 'Roupas', 'Acessórios'].map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition ${selectedCategory === cat ? 'bg-[#111111] text-white' : 'text-gray-600 hover:text-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col">
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-black">
                  {product.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-semibold text-sm text-[#111111] mb-1">{product.name}</h3>
                  <p className="text-lg font-bold text-[#FF5500]">R$ {product.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-6 w-full bg-gray-100 hover:bg-[#FF5500] hover:text-white text-black font-semibold text-xs tracking-wider uppercase py-3 rounded-xl transition duration-300"
                >
                  Adicionar à Sacola
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6">
            <div className="flex justify-between items-center pb-6 border-b border-gray-100">
              <h3 className="font-bold text-lg">Sua Sacola ({cart.length})</h3>
              <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-400 text-sm py-20">Sua sacola está vazia.</p>
              ) : (
                cart.map(item => (
                  <div key={item.cartId} className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.cartId)} className="text-gray-400 hover:text-red-500 text-xs font-bold">
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="py-4 border-t border-gray-100 space-y-3">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Digite seu CEP" 
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    maxLength={8}
                    className="flex-1 px-4 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5500]"
                  />
                  <button onClick={calcularFrete} className="bg-gray-200 hover:bg-black hover:text-white text-xs font-bold px-4 py-2 rounded-xl transition">
                    Calcular
                  </button>
                </div>
                {freteFinal === 0 && subtotal >= 200 && (
                  <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Frete Grátis aplicado!
                  </p>
                )}
              </div>
            )}

            {cart.length > 0 && (
              <div className="pt-6 border-t border-gray-100 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-semibold">R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Frete</span>
                  <span className="font-semibold">{freteFinal === 0 ? 'Grátis' : `R$ ${freteFinal.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span className="text-[#FF5500]">R$ {total.toFixed(2)}</span>
                </div>

                <button 
                  onClick={finalizarPedidoWhatsApp}
                  className="w-full bg-[#FF5500] hover:bg-[#e04b00] text-white font-bold py-4 rounded-xl transition text-xs tracking-wider uppercase mt-4 shadow-lg"
                >
                  Finalizar Pedido via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {authOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative">
            <button onClick={() => setAuthOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold tracking-tight">FIRSTONE</h3>
              <p className="text-xs text-gray-500 mt-1">Acesse sua conta ou cadastre-se</p>
            </div>

            <div className="flex border-b border-gray-100 mb-6 pb-2">
              <button 
                onClick={() => setIsLoginTab(true)}
                className={`flex-1 pb-2 font-semibold text-xs tracking-wider uppercase transition ${isLoginTab ? 'text-[#FF5500] border-b-2 border-[#FF5500]' : 'text-gray-400'}`}
              >
                Entrar
              </button>
              <button 
                onClick={() => setIsLoginTab(false)}
                className={`flex-1 pb-2 font-semibold text-xs tracking-wider uppercase transition {!isLoginTab ? 'text-[#FF5500] border-b-2 border-[#FF5500]' : 'text-gray-400'}`}
              >
                Criar Conta
              </button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert('Autenticação simulada com sucesso!'); setAuthOpen(false); }} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">E-mail</label>
                <input type="email" required placeholder="seu@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5500] text-sm" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">Senha</label>
                <input type="password" required placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF5500] text-sm" />
              </div>
              <button type="submit" className="w-full bg-[#111111] hover:bg-[#FF5500] text-white font-bold py-4 rounded-xl transition text-xs tracking-wider uppercase mt-4">
                {isLoginTab ? 'Acessar Conta' : 'Cadastrar Gratuitamente'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}