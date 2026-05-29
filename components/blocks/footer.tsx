import Link from 'next/link';
import { WuslahLogo } from '@/components/brand/wuslah-logo';
import { cn } from '@/lib/utils';
import {
  RiTwitterXLine,
  RiGithubLine,
  RiLinkedinLine,
} from '@remixicon/react';

const navLinks = [
  {
    heading: 'Product',
    items: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: RiTwitterXLine, label: 'X / Twitter', href: '#' },
  { icon: RiGithubLine, label: 'GitHub', href: '#' },
  { icon: RiLinkedinLine, label: 'LinkedIn', href: '#' },
];

export function Footer() {
  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="home" className="inline-block">
              <WuslahLogo />
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              A link, a tie, a continuance. Remember the small things that matter.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-150"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navLinks.map(({ heading, items }) => (
            <div key={heading}>
              <h3 className="text-foreground mb-4 text-sm font-semibold">{heading}</h3>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={cn(
                        'text-muted-foreground hover:text-foreground text-sm transition-colors duration-150',
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm sm:flex-row">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Wuslah. All rights reserved.
          </p>
          <p className="text-muted-foreground">
            Built with ♥ for networkers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

