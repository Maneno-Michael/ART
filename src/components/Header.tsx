'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'ART Resilience Centers', href: '/programs-overview' },
      { label: 'My Food, My Power', href: '/programs-overview' },
      { label: 'Her Land, Her Power', href: '/programs-overview' },
      { label: 'ART Green Schools', href: '/programs-overview' },
      { label: 'Voices from the Roots', href: '/programs-overview' },
    ],
  },
  { label: 'Get Involved', href: '/get-involved' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust scroll lock: pins the body in place at its current scroll
  // position instead of just toggling overflow. This also guarantees the
  // menu opens showing the same viewport the user was already looking at,
  // regardless of how far down the page they'd scrolled.
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-background/75'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 focus-ring shrink-0 min-w-0"
            aria-label="African Roots Transformation — Home"
          >
            {/* Logo mark scales down on small screens instead of AppLogo's fixed size prop */}
            <span className="shrink-0 scale-[0.55] sm:scale-100 origin-left -mr-3 sm:mr-0">
              <AppLogo size={80} />
            </span>

            <span className="flex flex-col justify-center leading-tight min-w-0">
              <span className="font-serif text-sm sm:text-xl md:text-2xl tracking-tight leading-tight">
                <span className="text-primary">African</span>{' '}
                <span className="text-accent">Roots</span>{' '}
                <span className="text-primary-dark">Transformation</span>
              </span>

              {/* Tagline: visible on all screens, sized down on mobile */}
              <span className="block text-black text-[10px] sm:text-xs md:text-sm leading-snug italic font-display truncate max-w-[140px] sm:max-w-none">
                &ldquo;Nurturing Communities. Transforming Lives.&rdquo;
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks?.map((link) =>
              link?.children ? (
                <div key={link?.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus-ring py-1"
                    aria-haspopup="true"
                    aria-expanded={programsOpen}
                  >
                    {link?.label}
                    <Icon name="ChevronDownIcon" size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {link?.children?.map((child) => (
                      <Link
                        key={child?.href}
                        href={child?.href}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors focus-ring"
                      >
                        {child?.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus-ring py-1"
                >
                  {link?.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/donate"
              className="btn-shimmer inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all shadow-md focus-ring"
            >
              Donate
            </Link>
            <Link
              href="/get-involved"
              className="btn-shimmer inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-md focus-ring"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors focus-ring rounded-lg shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <Icon name="XMarkIcon" size={24} />
            ) : (
              <Icon name="Bars3Icon" size={24} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu — rendered via portal directly on document.body so it
          is never trapped inside a transformed/animated ancestor elsewhere
          in the page, which is what breaks `position: fixed` once you've
          scrolled down. */}
      {mounted && menuOpen && createPortal(
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-16 sm:top-20 h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] bg-background/98 backdrop-blur-lg z-[100] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {navLinks?.map((link) =>
              link?.children ? (
                <div key={link?.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground border-b border-border focus-ring"
                    onClick={() => setProgramsOpen(!programsOpen)}
                    aria-expanded={programsOpen}
                  >
                    {link?.label}
                    <Icon name="ChevronDownIcon" size={16} className={`transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {programsOpen && (
                    <div className="pl-4 py-2 flex flex-col gap-1">
                      {link?.children?.map((child) => (
                        <Link
                          key={child?.href}
                          href={child?.href}
                          className="py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors focus-ring"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child?.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="py-3 text-sm font-medium text-foreground border-b border-border hover:text-primary transition-colors focus-ring"
                  onClick={() => setMenuOpen(false)}
                >
                  {link?.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-3 pt-6">
              <Link
                href="/donate"
                className="w-full text-center bg-accent text-accent-foreground py-4 rounded-full font-semibold text-sm focus-ring"
                onClick={() => setMenuOpen(false)}
              >
                Donate
              </Link>
              <Link
                href="/get-involved"
                className="w-full text-center bg-primary text-primary-foreground py-4 rounded-full font-semibold text-sm focus-ring"
                onClick={() => setMenuOpen(false)}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}