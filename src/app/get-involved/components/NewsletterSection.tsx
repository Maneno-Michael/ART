'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-primary/5 border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Icon name="EnvelopeIcon" size={24} className="text-primary" />
        </div>
        <span className="section-label">Stay Connected</span>
        <h2 className="text-section-title font-extrabold text-foreground mt-3 mb-4">
          Join the Learning Community
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Receive updates on community initiatives, webinar invitations, grassroots stories, learning opportunities, and insights on agroecology and sustainable development across Africa.
        </p>

        {submitted ? (
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <Icon name="CheckCircleIcon" size={32} className="text-primary mx-auto mb-3" />
            <p className="font-bold text-foreground mb-2">You are now subscribed!</p>
            <p className="text-sm text-muted-foreground">
              Welcome to the ART learning community, {firstName}. Watch your inbox for updates, webinars, and grassroots stories.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="input-field flex-1"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field flex-1"
            />
            <button type="submit" className="btn-primary shrink-0">
              Subscribe →
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}