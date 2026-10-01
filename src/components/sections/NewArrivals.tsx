import { newArrivals } from '@/data/mock-data';
import { ProductCard } from '@/components/product/ProductCard';

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-20 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <p className="reveal text-[11px] tracking-[0.3em] uppercase text-accent font-light mb-4">
              Just Arrived
            </p>
            <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl text-foreground font-normal">
              New Arrivals
            </h2>
          </div>
          <a
            href="#"
            className="reveal reveal-delay-2 luxury-link text-[13px] tracking-[0.12em] uppercase font-light text-foreground/70 hover:text-foreground transition-colors self-start sm:self-end pb-1"
          >
            View All
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {newArrivals.map((product, i) => (
            <div key={product.id} className={`reveal reveal-delay-${i + 1}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
