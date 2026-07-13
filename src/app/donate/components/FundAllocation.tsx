'use client';

import React, { useRef, useEffect, useState } from 'react';

const allocations = [
  { label: 'Community Programs', percentage: 55, color: 'bg-primary', textColor: 'text-primary' },
  { label: 'Training & Learning', percentage: 20, color: 'bg-accent', textColor: 'text-accent' },
  { label: 'Outreach & Advocacy', percentage: 10, color: 'bg-secondary', textColor: 'text-secondary' },
  { label: 'Monitoring & Admin', percentage: 10, color: 'bg-muted', textColor: 'text-muted-foreground' },
  { label: 'Communications', percentage: 5, color: 'bg-border', textColor: 'text-foreground/60' },
];

export default function FundAllocation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimated(true), 200);
        }
      },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-card"
      aria-labelledby="fund-allocation-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">Transparency & Accountability</span>
          <h2
            id="fund-allocation-heading"
            className="font-display text-3xl sm:text-4xl text-foreground mb-4"
          >
            How Contributions Are Used
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            ART is committed to transparency. Here is how every donation is allocated across our programs and operations.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Visual bar chart */}
          <div className="space-y-4" role="list" aria-label="Fund allocation breakdown">
            {allocations?.map((item, i) => (
              <div key={item?.label} role="listitem">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-semibold text-foreground">{item?.label}</span>
                  <span className={`font-display font-bold text-lg ${item?.textColor}`}>{item?.percentage}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-3 overflow-hidden" role="progressbar" aria-valuenow={item?.percentage} aria-valuemin={0} aria-valuemax={100} aria-label={`${item?.label}: ${item?.percentage}%`}>
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${item?.color}`}
                    style={{
                      width: animated ? `${item?.percentage}%` : '0%',
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Donut chart visual — CSS only */}
          <div className="flex items-center justify-center">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64" aria-hidden="true">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {(() => {
                  let cumulative = 0;
                  const colors = ['#2D5016', '#D47C0F', '#C4622D', '#8A7D6B', '#D6C7B5'];
                  return allocations?.map((item, i) => {
                    const circumference = 2 * Math.PI * 35;
                    const strokeDasharray = `${(item?.percentage / 100) * circumference} ${circumference}`;
                    const strokeDashoffset = -((cumulative / 100) * circumference);
                    cumulative += item?.percentage;
                    return (
                      <circle
                        key={item?.label}
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        stroke={colors?.[i]}
                        strokeWidth="18"
                        strokeDasharray={animated ? strokeDasharray : '0 999'}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: `stroke-dasharray 1s ease ${i * 150}ms` }}
                      />
                    );
                  });
                })()}
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display font-bold text-2xl text-primary">100%</span>
                <span className="text-xs text-muted-foreground text-center leading-tight">Community<br />Focused</span>
              </div>
            </div>
          </div>
        </div>

        {/* Registration note */}
        <div className={`mt-10 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground text-sm">
            African Roots Transformation (ART) is a registered nonprofit in Kenya.{' '}
            <span className="font-mono text-xs bg-border/50 px-2 py-0.5 rounded">CLG-87TKRADA</span>
          </p>
        </div>
      </div>
    </section>
  );
}