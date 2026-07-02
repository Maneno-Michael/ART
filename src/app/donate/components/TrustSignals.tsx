'use client';

import React, { useRef, useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const signals = [
  {
    icon: 'ShieldCheckIcon',
    title: 'Registered Nonprofit',
    description: 'ART is officially registered in Kenya. Reg: NGO/CERT/2018/0042',
  },
  {
    icon: 'LockClosedIcon',
    title: 'Secure Payments',
    description: 'All transactions are processed through secure, trusted payment providers.',
  },
  {
    icon: 'DocumentCheckIcon',
    title: 'Transparent Reporting',
    description: 'We publish regular program updates and financial accountability reports.',
  },
  {
    icon: 'GlobeAltIcon',
    title: 'SDG-Aligned',
    description: 'Our programs align with UN Sustainable Development Goals 2, 5, 10, 13, 15, 16 & 17.',
  },
];

export default function TrustSignals() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-14 bg-primary/5 border-y border-border"
      aria-label="Trust and credibility signals"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, i) => (
            <div
              key={signal.title}
              className={`flex items-start gap-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name={signal.icon as 'ShieldCheckIcon'} size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{signal.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}