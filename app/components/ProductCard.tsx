import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden border border-zinc-800/80 bg-zinc-900/30 transition-all hover:border-zinc-700">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="text-[10px] font-semibold tracking-widest text-orange-500 uppercase">
            {product.category}
          </span>
          <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
            {product.name}
          </h3>
          <p className="mt-2 text-xs text-zinc-400 line-clamp-2">
            {product.description}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
          <span className="text-lg font-bold text-white">
            R$ {product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold tracking-wider text-white hover:border-orange-500 hover:bg-orange-500 transition-all uppercase"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}