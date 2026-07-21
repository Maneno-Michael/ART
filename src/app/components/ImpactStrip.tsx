'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  isText?: boolean;
  textValue?: string;
}

const stats: Stat[] = [
  { value: 1000, suffix: '+', label: 'Farmers Engaged', icon: 'UserGroupIcon' },
  { value: 10, suffix: '+', label: 'Grassroots Groups', icon: 'BuildingLibraryIcon' },
  { value: 6, suffix: '+', label: 'Counties Reached', icon: 'MapPinIcon' },
  { value: 5, suffix: '', label: 'Community Programs', icon: 'RectangleGroupIcon' },
  { value: 0, suffix: '', label: 'Monthly Webinars', icon: 'VideoCameraIcon', isText: true, textValue: 'Monthly' },
  { value: 0, suffix: '', label: 'SDG-Aligned Impact', icon: 'GlobeAltIcon', isText: true, textValue: 'SDG' },
];

function CounterItem({ stat, triggered }: { stat: Stat; triggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered || stat.isText) return;
    let start = 0;
    const end = stat.value;
    const duration = 1800;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [triggered, stat.value, stat.isText]);

  return (
    <div className="flex flex-col items-center text-center px-2 py-5 sm:px-4 sm:py-6 group">
      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-primary/20 transition-colors">
        <Icon name={stat.icon as 'UserGroupIcon'} size={16} className="text-primary sm:hidden" />
        <Icon name={stat.icon as 'UserGroupIcon'} size={22} className="text-primary hidden sm:block" />
      </div>
      <div className="font-display font-bold text-xl sm:text-3xl md:text-4xl text-primary mb-1 leading-tight" aria-live="polite">
        {stat.isText ? stat.textValue : `${count}${stat.suffix}`}
      </div>
      <div className="text-muted-foreground text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wide leading-snug">
        {stat.label}
      </div>
    </div>
  );
}

export default function ImpactStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section
      ref={ref}
      className="relative bg-background py-8 sm:py-12 border-y border-border"
      aria-label="Impact statistics"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
            divide-y divide-border
            sm:[&>*:nth-child(3n+2)]:border-x sm:[&>*:nth-child(3n+2)]:border-border sm:lg:[&>*:nth-child(3n+2)]:border-x-0
            lg:divide-y-0 lg:divide-x
          "
        >
          {stats.map((stat) => (
            <CounterItem key={stat.label} stat={stat} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}