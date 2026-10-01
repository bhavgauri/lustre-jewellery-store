import { ArrowRight } from 'lucide-react';
import { heroImage } from '@/data/mock-data';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Model wearing luxury gold jewellery"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div
          className="animate-fade-in-down opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-white/70 font-light mb-6">
            Fine Jewellery — Est. 2024
          </p>
        </div>

        <h1
          className="animate-fade-in-up opacity-0 font-serif text-white text-balance"
          style={{
            animationDelay: '0.4s',
            animationFillMode: 'forwards',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.08,
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          Timeless Pieces,
          <br />
          <span className="italic font-light">Made to Be Remembered</span>
        </h1>

        <p
          className="animate-fade-in-up opacity-0 mt-8 max-w-xl text-white/80 text-sm sm:text-base font-light leading-relaxed"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Handcrafted with ethically sourced diamonds and 18k gold, each piece
          is designed to become part of your story — today, and for generations
          to come.
        </p>

        <div
          className="animate-fade-in-up opacity-0 mt-10 flex flex-col sm:flex-row items-center gap-4"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <a
            href="#new-arrivals"
            className="group inline-flex items-center gap-2 bg-white text-foreground px-8 py-3.5 text-[13px] tracking-[0.15em] uppercase font-light transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Explore Collection
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.2}
            />
          </a>
          <a
            href="#brand-story"
            className="luxury-link inline-flex items-center gap-2 text-white px-2 py-3.5 text-[13px] tracking-[0.15em] uppercase font-light border-b border-white/30 hover:border-white transition-all"
          >
            Discover Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-in opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-light">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
