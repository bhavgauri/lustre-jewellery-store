import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: ['New Arrivals', 'Best Sellers', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'],
  Collections: ['The Bridal Edit', 'Everyday Essentials', 'Statement Pieces', 'Gifts Under ₹50,000'],
  'Customer Care': ['Contact Us', 'Shipping & Returns', 'Size Guide', 'Care Guide', 'FAQs'],
  About: ['Our Story', 'Craftsmanship', 'Sustainability', 'Store Locator', 'Careers'],
};

const legalLinks = ['Privacy', 'Terms'];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16 lg:py-20">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-serif text-2xl tracking-[0.12em] font-medium mb-4">
              Lustre <span className="font-light italic">&</span> Co.
            </h3>
            <p className="text-sm text-background/60 font-light leading-relaxed max-w-xs">
              Timeless fine jewellery, handcrafted with ethically sourced
              materials and made to be remembered.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-background/60 hover:text-accent transition-colors"
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-background/50 font-light mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/70 hover:text-accent transition-colors font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-wide text-background/40 font-light">
            © 2024 Lustre & Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] tracking-[0.1em] uppercase text-background/40 hover:text-accent transition-colors font-light"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
