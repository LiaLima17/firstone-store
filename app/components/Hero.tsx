export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800/80 bg-zinc-950 py-24 lg:py-36">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=80"
          alt="Firstone Streetwear"
          className="h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <span className="mb-4 inline-block text-xs font-semibold tracking-[0.3em] text-orange-500 uppercase">
          Nova Coleção 2026 // Drop 01
        </span>
        <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          ESSÊNCIA PURA, <br />
          <span className="text-zinc-400">MINIMALISMO E ATITUDE.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
          Peças desenvolvidas com cortes precisos, tecidos premium heavyweight e acabamentos industriais para quem dita o próprio ritmo.
        </p>
      </div>
    </section>
  );
}