import { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Shop', href: '#new-arrivals' },
  { label: 'Collections', href: '#collections' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'About', href: '#brand-story' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500',
              scrolled ? 'h-16' : 'h-20 lg:h-24'
            )}
          >
            {/* Mobile menu button */}
            <button
              className={cn(
                'lg:hidden p-1 -ml-1 transition-colors',
                scrolled ? 'text-foreground' : 'text-white'
              )}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.2} />
            </button>

            {/* Desktop nav — left */}
            <nav className="hidden lg:flex items-center gap-8 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'luxury-link text-[13px] tracking-[0.12em] uppercase font-light transition-colors',
                    scrolled
                      ? 'text-foreground/80 hover:text-foreground'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Logo — center */}
            <a
              href="#"
              className={cn(
                'absolute left-1/2 -translate-x-1/2 font-serif tracking-[0.15em] transition-all duration-500',
                scrolled
                  ? 'text-foreground text-xl'
                  : 'text-white text-2xl lg:text-[1.75rem]'
              )}
              style={{ fontWeight: 500 }}
            >
              Lustre <span className="font-light italic">&</span> Co.
            </a>

            {/* Icons — right */}
            <div className="flex items-center gap-4 lg:gap-5 flex-1 justify-end">
              {[
                { Icon: Search, label: 'Search' },
                { Icon: Heart, label: 'Wishlist' },
                { Icon: ShoppingBag, label: 'Cart' },
                { Icon: User, label: 'Account' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={cn(
                    'hidden sm:block transition-colors hover:opacity-60',
                    scrolled ? 'text-foreground' : 'text-white'
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.2} />
                </button>
              ))}
              <button
                aria-label="Cart"
                className={cn(
                  'sm:hidden transition-colors',
                  scrolled ? 'text-foreground' : 'text-white'
                )}
              >
                <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden transition-opacity duration-300',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-[80%] max-w-sm bg-background shadow-2xl transition-transform duration-400 ease-out',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-border">
            <span className="font-serif text-xl tracking-[0.15em] font-medium">
              Lustre <span className="font-light italic">&</span> Co.
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-foreground hover:opacity-60 transition-opacity"
            >
              <X className="h-5 w-5" strokeWidth={1.2} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'text-lg font-serif tracking-wide text-foreground/90 hover:text-foreground transition-all',
                  mobileOpen
                    ? 'animate-fade-in-up opacity-0'
                    : 'opacity-0'
                )}
                style={{
                  animationDelay: `${i * 0.08 + 0.1}s`,
                  animationFillMode: 'forwards',
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border pt-6 mt-2 flex flex-col gap-5">
              {[
                { Icon: Search, label: 'Search' },
                { Icon: Heart, label: 'Wishlist' },
                { Icon: User, label: 'Account' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-sm tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.2} />
                  {label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
