import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="reveal text-[11px] tracking-[0.3em] uppercase text-accent font-light mb-5">
          Stay Connected
        </p>
        <h2 className="reveal reveal-delay-1 font-serif text-3xl lg:text-4xl text-foreground font-normal text-balance mb-4">
          Join the Lustre & Co. Circle
        </h2>
        <p className="reveal reveal-delay-2 text-sm text-muted-foreground font-light max-w-md mx-auto mb-8">
          Be the first to discover new collections, private events, and
          exclusive offers crafted for our most cherished clients.
        </p>

        {submitted ? (
          <p className="reveal reveal-delay-3 font-serif text-lg text-foreground italic">
            Thank you for joining us. Welcome to the circle.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full flex-1 border-b border-foreground/30 bg-transparent py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 whitespace-nowrap bg-foreground text-background px-6 py-3 text-[12px] tracking-[0.15em] uppercase font-light hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Subscribe
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.2}
              />
            </button>
          </form>
        )}

        <p className="reveal reveal-delay-4 mt-6 text-[11px] text-muted-foreground/70 font-light">
          By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
