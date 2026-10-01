import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/mock-data';

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="reveal text-[11px] tracking-[0.3em] uppercase text-accent font-light mb-4">
            Kind Words
          </p>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl lg:text-5xl text-foreground font-normal">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`reveal reveal-delay-${i + 1} relative bg-background p-8 lg:p-10 border border-border`}
            >
              <Quote
                className="absolute top-6 right-6 h-8 w-8 text-accent/20"
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-accent text-accent"
                    strokeWidth={0.5}
                  />
                ))}
              </div>

              <p className="font-serif text-lg text-foreground/90 leading-relaxed italic mb-8">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-5">
                <p className="font-serif text-base text-foreground tracking-wide">
                  {testimonial.name}
                </p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground font-light mt-1">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
