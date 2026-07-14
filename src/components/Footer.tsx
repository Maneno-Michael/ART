'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Donate', href: '/donate' },
];

const programLinks = [
  { label: 'ART Resilience Centers', href: '/programs/art-resilience-centers' },
  { label: 'My Food, My Power', href: '/programs/my-food-my-power' },
  { label: 'Her Land, Her Power', href: '/programs/her-land-her-power' },
  { label: 'ART Green Schools', href: '/programs/art-green-schools' },
  { label: 'Voices from the Roots', href: '/programs/voices-from-the-roots' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/african-roots-transformation/',
    path: 'M4.98 3.5C4.98 4.881 3.87 6 2.49 6S0 4.881 0 3.5 1.11 1 2.49 1s2.49 1.119 2.49 2.5zM.24 8.98h4.5V24h-4.5V8.98zM8.98 8.98h4.31v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24h-4.5V8.98z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100063940061429',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/africa_roots1',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/african_roots_transformation?igsh=bmFreWZ5OHpxNzVz',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@african_roots_transformation',
    path: 'M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.524a2.994 2.994 0 0 0-2.107 2.117A31.29 31.29 0 0 0 0 12a31.29 31.29 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.107 2.117c1.886.524 9.391.524 9.391.524s7.505 0 9.391-.524a2.994 2.994 0 0 0 2.107-2.117A31.29 31.29 0 0 0 24 12a31.29 31.29 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12l-6.068 3.568z',
  },
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
              {socialLinks.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 hover:border-accent/50 transition-colors focus-ring"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-primary-foreground/60"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
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