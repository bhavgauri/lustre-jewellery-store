import { Instagram } from 'lucide-react';
import { galleryImages } from '@/data/mock-data';

export function InstagramGallery() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="reveal text-[11px] tracking-[0.3em] uppercase text-accent font-light mb-4">
            Follow Us
          </p>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl text-foreground font-normal">
            @lustreandco
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-sm text-muted-foreground font-light">
            Tag us to be featured — we love seeing how you wear your pieces
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {galleryImages.map((item, i) => (
            <a
              key={item.id}
              href="#"
              className={`reveal reveal-delay-${(i % 3) + 1} group relative block overflow-hidden bg-secondary`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                <Instagram
                  className="h-7 w-7 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100"
                  strokeWidth={1}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
