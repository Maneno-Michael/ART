'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs-overview' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Donate', href: '/donate' },
];

const programLinks = [
  { label: 'ART Resilience Centers', href: '/programs-overview' },
  { label: 'My Food, My Power', href: '/programs-overview' },
  { label: 'Her Land, Her Power', href: '/programs-overview' },
  { label: 'ART4Equity', href: '/programs-overview' },
  { label: 'Voices from the Roots', href: '/programs-overview' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && firstName) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-footer-bg text-primary-foreground" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-primary-foreground/10">
          {/* Col 1 — About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={80} />
             <span className="font-serif text-md md:text-lg tracking-tight">
            <span className="text-accent">African</span>{' '}
            <span className="text-accent">Roots</span>{' '}
            <span className="text-primary-dark">Transformation</span>
          </span>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4 italic font-display">
              &ldquo;Nurturing Communities. Transforming Lives. Sustaining Futures.&rdquo;
            </p>
            <p className="text-primary-foreground/55 text-sm leading-relaxed mb-5">
              African Roots Transformation (ART) is a Kenya-based nonprofit advancing agroecology, community resilience, food sovereignty, and social justice through locally led solutions across Africa.
            </p>
            <p className="text-primary-foreground/40 text-xs font-mono">
            RE_No.: CLG-87TKRADA
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: 'GlobeAltIcon', label: 'Website' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors focus-ring"
                >
                  <Icon name={icon as 'GlobeAltIcon'} size={16} className="text-primary-foreground/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors focus-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Programs */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
              Programs
            </h3>
            <ul className="flex flex-col gap-3">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors focus-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
              Stay Connected
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">
              Receive updates, webinar invitations, grassroots stories, and learning resources from ART.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-accent text-sm font-medium">
                <Icon name="CheckCircleIcon" size={18} />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3" aria-label="Newsletter subscription">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  aria-label="First name"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent transition-colors"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="btn-shimmer w-full bg-accent text-accent-foreground py-2.5 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-all focus-ring"
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-primary-foreground/40">
          <p>© 2026 African Roots Transformation (ART). All Rights Reserved.</p>
          <div>
            <p> P. O box 72950-00200, Ojijo Road- Westpark Suits, Nairobi Kenya </p>
            <p>Email: info@africanrootstransformation.org</p>
            <p>Call Us: +254797463939 </p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-foreground/70 transition-colors focus-ring">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground/70 transition-colors focus-ring">
              Terms of Use
            </Link>
            <Link href="/cookies" className="hover:text-primary-foreground/70 transition-colors focus-ring">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}