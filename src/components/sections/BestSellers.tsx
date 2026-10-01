import { bestSellers } from '@/data/mock-data';
import { ProductCard } from '@/components/product/ProductCard';

export function BestSellers() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="reveal text-[11px] tracking-[0.3em] uppercase text-accent font-light mb-4">
            Most Loved
          </p>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl text-background font-normal text-balance">
            Best Sellers
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-sm text-background/60 font-light max-w-md mx-auto">
            The pieces our customers return to, again and again
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bestSellers.map((product, i) => (
            <div key={product.id} className={`reveal reveal-delay-${i + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
