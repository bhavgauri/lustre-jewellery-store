import { useState } from 'react';
import { Heart, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type Product, formatPrice } from '@/data/mock-data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        {/* Base image */}
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out',
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          )}
        />
        {/* Hover image */}
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate view`}
          className={cn(
            'absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out',
            hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          )}
        />

        {/* New badge */}
        {product.isNew && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase font-light bg-background/90 text-foreground px-3 py-1.5">
            New
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={() => setWished((w) => !w)}
          aria-label="Add to wishlist"
          className={cn(
            'absolute top-4 right-4 p-2 transition-all duration-300',
            hovered || wished ? 'opacity-100' : 'opacity-0 translate-y-1'
          )}
        >
          <Heart
            className={cn(
              'h-[18px] w-[18px] transition-all',
              wished
                ? 'fill-accent text-accent animate-heart-pop'
                : 'text-white drop-shadow-md hover:fill-white/20'
            )}
            strokeWidth={1.2}
          />
        </button>

        {/* Quick add button */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out',
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          )}
        >
          <button className="w-full bg-background/95 backdrop-blur-sm text-foreground py-4 text-[12px] tracking-[0.15em] uppercase font-light hover:bg-accent hover:text-accent-foreground transition-colors duration-300 flex items-center justify-center gap-2">
            <Plus className="h-3.5 w-3.5" strokeWidth={1.2} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-4 text-center">
        <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-light mb-1.5">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-foreground font-normal tracking-wide">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-foreground/80 font-light tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </div>
  );
}
