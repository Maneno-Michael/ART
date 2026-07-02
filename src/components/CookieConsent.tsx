'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('art-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('art-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('art-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[90] bg-card border border-border rounded-2xl shadow-2xl p-5"
    >
      <p className="text-sm text-foreground/80 leading-relaxed mb-4">
        We use cookies to improve your experience. By continuing, you agree to our{' '}
        <Link href="/cookies" className="text-primary underline hover:text-primary/80 focus-ring">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <button
          onClick={accept}
          className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors focus-ring"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="flex-1 border border-border text-foreground/70 py-2 rounded-lg text-sm hover:bg-border/30 transition-colors focus-ring"
        >
          Decline
        </button>
      </div>
    </div>
  );
}