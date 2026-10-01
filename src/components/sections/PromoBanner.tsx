import { ArrowRight } from 'lucide-react';
import { promoBannerImage } from '@/data/mock-data';

export function PromoBanner() {
  return (
    <section className="relative h-[60vh] min-h-[480px] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={promoBannerImage}
          alt="Diamond ring in a luxury jewellery box"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 promo-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="reveal text-[11px] tracking-[0.3em] uppercase text-white/60 font-light mb-6">
          The Fine Jewellery Edit
        </p>
        <h2
          className="reveal reveal-delay-1 font-serif text-white font-normal text-balance"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.12 }}
        >
          Crafted for Your Most
          <br />
          <span className="italic font-light">Meaningful Moments</span>
        </h2>
        <p className="reveal reveal-delay-2 mt-6 max-w-lg text-white/70 text-sm font-light leading-relaxed">
          From engagement to anniversary, celebrate every milestone with
          jewellery designed to last a lifetime.
        </p>
        <a
          href="#collections"
          className="reveal reveal-delay-3 group mt-8 inline-flex items-center gap-2 bg-white text-foreground px-8 py-3.5 text-[13px] tracking-[0.15em] uppercase font-light transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
        >
          Explore Fine Jewellery
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.2}
          />
        </a>
      </div>
    </section>
  );
}
