'use client';

import React, { useRef, useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    question: 'Is ART a registered organization?',
    answer: 'Yes. African Roots Transformation (ART) is registered in Kenya and operates as a nonprofit organization supporting community-led initiatives and development programs. Registration number: NGO/CERT/2018/0042.',
  },
  {
    question: 'How are donations used?',
    answer: 'Contributions directly support community programs (55%), farmer training and learning activities (20%), community outreach and advocacy (10%), monitoring and administration (10%), and communications and documentation (5%).',
  },
  {
    question: 'Can I support a specific project?',
    answer: 'Yes. Donors may indicate preferred program areas or community initiatives — such as ART Resilience Centers, My Food My Power, Her Land Her Power, ART4Equity, or Voices from the Roots — where applicable. Please note your preference in the donation form or contact our team.',
  },
  {
    question: 'Are donations secure?',
    answer: 'Yes. ART uses secure payment systems and trusted payment providers including Stripe for card payments, PayPal, and M-Pesa for mobile money. All transactions are encrypted and processed securely.',
  },
  {
    question: 'Can organizations partner with ART?',
    answer: 'Yes. We welcome collaboration with donors, NGOs, researchers, academic institutions, and community organizations aligned with our mission in agroecology, food sovereignty, climate resilience, and social justice.',
  },
];

export default function DonateFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-10 sm:py-16 lg:py-20 bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs sm:text-sm section-label text-accent mb-2 sm:mb-3 block">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div
          className={`space-y-2.5 sm:space-y-3 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          role="list"
        >
          {faqs?.map((faq, i) => (
            <div
              key={i}
              className={`bg-card border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/30 shadow-md' : 'border-border hover:border-primary/20 hover:shadow-sm'}`}
              role="listitem"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 py-4 sm:px-6 sm:py-5 text-left focus-ring"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="font-semibold text-foreground text-xs sm:text-sm lg:text-base">
                  {faq?.question}
                </span>
                <Icon
                  name="ChevronDownIcon"
                  size={16}
                  className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 sm:hidden ${openIndex === i ? 'rotate-180 text-primary' : ''}`}
                />
                <Icon
                  name="ChevronDownIcon"
                  size={18}
                  className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 hidden sm:block ${openIndex === i ? 'rotate-180 text-primary' : ''}`}
                />
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-64' : 'max-h-0'}`}
              >
                <div className="px-4 pb-4 pt-0 sm:px-6 sm:pb-5 border-t border-dashed border-border">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed pt-3 sm:pt-4">
                    {faq?.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}