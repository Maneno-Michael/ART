'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const galleryImages = [
{
  src: "/assets/images/gal.jpg",
  alt: 'Field gallery — Machakos community activities, farmers engaged in agroecological practices'
},
{
  src: "/assets/images/gal1.jpg",
  alt: 'Field gallery — Utawala farm activities, women-led urban farming in Nairobi'
},
{
  src: "/assets/images/gal2.jpg",
  alt: 'Field gallery — Embu community activities, farmer engagement and training'
},
{
  src: "/assets/images/gal4.jpg",
  alt: 'Field gallery — farmer engagement and training session, community learning activities'
},
{
  src: "/assets/images/gal1.jpg",
  alt: 'Field gallery — indigenous seed preservation and community food sovereignty activities'
},
{
  src: "/assets/images/gal5.jpg",
  alt: 'Field gallery — women and youth participation in agroecological farming activities'
}];


export default function FieldGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-card"
      aria-labelledby="gallery-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="section-label text-accent mb-3 block">In The Field</span>
          <h2
            id="gallery-heading"
            className="font-display text-3xl sm:text-4xl text-foreground">
            
            Grounded in Community Action
          </h2>
        </div>

        {/* Sticky 3-col gallery */}
        <div className={`grid grid-cols-12 gap-3 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left column — scrolls */}
          <div className="col-span-4 grid gap-3">
            {[galleryImages?.[0], galleryImages?.[1]]?.map((img, i) =>
            <div key={i} className="relative h-52 sm:h-64 rounded-2xl overflow-hidden group">
                <AppImage
                src={img?.src}
                alt={img?.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 33vw, 25vw" />
              
              </div>
            )}
          </div>

          {/* Middle column — sticky */}
          <div className="col-span-4 sticky top-24 h-fit grid gap-3">
            {[galleryImages?.[2], galleryImages?.[3]]?.map((img, i) =>
            <div key={i} className="relative h-52 sm:h-64 rounded-2xl overflow-hidden group">
                <AppImage
                src={img?.src}
                alt={img?.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 33vw, 25vw" />
              
              </div>
            )}
          </div>

          {/* Right column — scrolls */}
          <div className="col-span-4 grid gap-3">
            {[galleryImages?.[4], galleryImages?.[5]]?.map((img, i) =>
            <div key={i} className="relative h-52 sm:h-64 rounded-2xl overflow-hidden group">
                <AppImage
                src={img?.src}
                alt={img?.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 768px) 33vw, 25vw" />
              
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}