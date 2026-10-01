import { ArrowRight } from 'lucide-react';
import { brandStoryImage } from '@/data/mock-data';

export function BrandStory() {
  return (
    <section id="brand-story" className="py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal relative overflow-hidden">
            <div className="aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
              <img
                src={brandStoryImage}
                alt="Jeweller crafting a piece by hand"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1 lg:pl-8">
            <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-light mb-6">
              The Lustre & Co. Story
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground font-normal leading-tight text-balance mb-6">
              A Legacy of Craft, Worn for a Lifetime
            </h2>
            <div className="space-y-5 text-[15px] text-muted-foreground font-light leading-relaxed max-w-lg">
              <p>
                Founded on the belief that jewellery should be as enduring as
                the moments it marks, Lustre & Co. brings together master
                artisans and ethically sourced materials to create pieces of
                quiet brilliance.
              </p>
              <p>
                Every ring, necklace, and bracelet is hand-finished in our
                atelier — a slow, deliberate process that honours both the
                craft and the person who will wear it. No shortcuts. No
 compromises. Only jewellery made to be lived in and loved for
                generations.
              </p>
            </div>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[13px] tracking-[0.12em] uppercase font-light text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Our Story
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.2}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
