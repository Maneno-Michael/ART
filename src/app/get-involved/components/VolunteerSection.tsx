'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const volunteerAreas = [
  'Agroecology & Farmer Training',
  'Communications & Storytelling',
  'Research & Documentation',
  'Legal & Advocacy Support',
  'Monitoring & Evaluation',
  'Graphic Design & Digital Media',
  'Youth Engagement',
  'Community Facilitation',
];

export default function VolunteerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    area: '',
    skills: '',
    availability: '',
    message: '',
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.reveal-hidden');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="volunteer-form" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div className="reveal reveal-hidden">
            <span className="section-label">Volunteer With ART</span>
            <h2 className="text-section-title font-extrabold text-foreground mt-3 mb-5">
              Contribute Your Skills and Experience
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              ART welcomes volunteers passionate about community development, agroecology, communications, research, advocacy, digital skills, legal literacy, monitoring and evaluation, storytelling, and grassroots learning.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Whether contributing remotely or in person, volunteers help strengthen community initiatives and organizational growth.
            </p>

            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">Volunteer Areas</p>
              <div className="flex flex-wrap gap-2">
                {volunteerAreas.map((area) => (
                  <span key={area} className="tag-pill bg-primary/10 text-primary border border-primary/20">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-5">
              <div className="flex items-start gap-3">
                <Icon name="LightBulbIcon" size={20} className="text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Remote & In-Person Options</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Volunteers can contribute remotely from anywhere in the world or join our team in Kenya for in-person community engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-hidden">
            {submitted ? (
              <div className="bg-card rounded-3xl border border-border p-10 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon name="CheckCircleIcon" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-3">Thank You for Your Interest!</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  We have received your volunteer application. Our team will review it and reach out within 5–7 business days.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border p-6 sm:p-8 shadow-sm space-y-5">
                <h3 className="text-lg font-extrabold text-foreground">Volunteer Interest Form</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Wanjiru Kamau"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Country / Location *</label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Nairobi, Kenya"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Area of Interest *</label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select an area...</option>
                    {volunteerAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Skills & Experience</label>
                  <textarea
                    name="skills"
                    value={form.skills}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your relevant skills and background..."
                    className="input-field resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Availability</label>
                  <select
                    name="availability"
                    value={form.availability}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select availability...</option>
                    <option value="part-time-remote">Part-time (Remote)</option>
                    <option value="full-time-remote">Full-time (Remote)</option>
                    <option value="in-person-kenya">In-person (Kenya)</option>
                    <option value="flexible">Flexible / Project-based</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Additional Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Anything else you'd like us to know..."
                    className="input-field resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Submit Volunteer Interest →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}