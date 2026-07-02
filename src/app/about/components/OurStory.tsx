'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function OurStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.15 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-background"
      aria-labelledby="story-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-[380px] sm:h-[480px] group">
              <div className="absolute inset-0 mask-arch overflow-hidden shadow-2xl bg-border">
                <AppImage
                  src="/assets/images/story.jpg"
                  alt="Supporting image beside Our Story text — community and field context showing farmers engaged in agroecological activities"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
              </div>
              {/* Founded badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-card border border-border rounded-2xl shadow-xl p-4 z-10">
                <div className="text-center">
                  <div className="font-display font-bold text-2xl text-primary">2018</div>
                  <div className="text-muted-foreground text-xs">Founded in Kenya</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="section-label text-accent mb-4 block">Our Story</span>
            <h2
              id="story-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              
              Rooted in Communities.{' '}
              <span className="italic text-primary">Driven by Justice.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                African Roots Transformation (ART) was established in Kenya in response to the growing challenges facing farming communities across Africa; including climate change, soil degradation, shrinking land access, rising agricultural costs, and increasing food insecurity.
              </p>
              <p>
                Through grassroots engagement and lived experience, we witnessed how smallholder farmers, especially women and young people, continue to carry the burden of food production while remaining excluded from resources, decision-making, and long-term opportunities.
              </p>
              <p>
                We also saw indigenous knowledge and local food systems steadily disappearing despite their importance in building resilience and sustainability.
              </p>
              <p>
                ART was created to support community-led solutions rooted in agroecology, food sovereignty, social justice, and practical local action. Today, we work alongside communities to strengthen resilience, restore ecosystems, promote equity, and help create sustainable futures grounded in dignity and local ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}