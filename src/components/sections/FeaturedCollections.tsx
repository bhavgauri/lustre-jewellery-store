import { ArrowRight } from 'lucide-react';
import { collections } from '@/data/mock-data';

export function FeaturedCollections() {
  return (
    <section id="collections" className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="reveal text-[11px] tracking-[0.3em] uppercase text-accent font-light mb-4">
            Curated Selection
          </p>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl text-foreground font-normal text-balance">
            Featured Collections
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-sm text-muted-foreground font-light max-w-md mx-auto">
            Four categories, each crafted to celebrate life's most precious moments
          </p>
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {collections.map((collection, i) => (
            <a
              key={collection.id}
              href="#new-arrivals"
              className={`reveal reveal-delay-${i + 1} group relative block overflow-hidden bg-secondary`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-white">
                <h3 className="font-serif text-xl lg:text-2xl font-normal tracking-wide">
                  {collection.name}
                </h3>
                <p className="mt-1 text-[11px] lg:text-xs text-white/70 font-light tracking-wide hidden sm:block">
                  {collection.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] tracking-[0.12em] uppercase font-light opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>Shop Now</span>
                  <ArrowRight className="h-3 w-3" strokeWidth={1.2} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
