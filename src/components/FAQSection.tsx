import { useState } from 'react';
import faqImg2 from '../assets/products/Home_furniture/hf-34.jpeg';
import faqImg1 from '../assets/products/Home_furniture/hf-03.jpeg';

const SERIF = "'Playfair Display', Georgia, serif";

const FAQS = [
  {
    q: 'Do you offer delivery services?',
    a: 'Yes, we offer reliable delivery services to ensure your products arrive safely and on time.',
  },
  {
    q: 'Are your products available in different styles and sizes?',
    a: 'Absolutely. Our catalogue spans a wide range of styles, finishes and sizes to suit any space and taste.',
  },
  {
    q: 'How can I view more details about a product?',
    a: 'You can send an enquiry through our contact form and our team will provide full product specifications and availability.',
  },
  {
    q: 'Do you offer premium-quality products?',
    a: 'Every item in our collection is hand-selected for quality, durability and design. We stand by every product we sell.',
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="py-12 md:py-24 px-5 sm:px-12 md:px-16 lg:px-20 xl:px-24"
      style={{ backgroundColor: '#0C0C14' }}
    >
      {/* Heading */}
      <h2
        className="text-white text-[26px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[0.95] tracking-[-0.01em] mb-10 md:mb-16"
        style={{ fontFamily: SERIF }}
      >
        Frequently Ask<br className="sm:hidden" /> Questions
      </h2>

      <div className="flex flex-col lg:flex-row lg:gap-20 items-start">

        {/* ── Left: overlapping image stack (desktop only) ──────── */}
        <div
          className="hidden lg:block relative shrink-0 lg:w-[47%]"
          style={{ height: '430px' }}
        >
          {/* Back image */}
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: '87%', height: '68%' }}
          >
            <img
              src={faqImg2}
              alt="Premium kitchen showcase"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Front image */}
          <div
            className="absolute bottom-0 right-0 overflow-hidden"
            style={{ width: '57%', height: '50%', zIndex: 1 }}
          >
            <img
              src={faqImg1}
              alt="Modern kitchen interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mobile: single image */}
        <div className="lg:hidden w-full overflow-hidden mb-7" style={{ height: '200px' }}>
          <img src={faqImg2} alt="Premium kitchen" className="w-full h-full object-cover" />
        </div>

        {/* ── Accordion ─────────────────────────────────────────── */}
        <div className="flex-1 w-full">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q}
              className="border-b"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-4 md:py-5 text-left group"
              >
                <span className="text-[15.5px] md:text-[16.5px] font-medium text-white/80 group-hover:text-white pr-6 md:pr-8 leading-snug transition-colors duration-150">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 text-white/50 text-[15px] md:text-[16px] leading-none transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                >
                  ⌄
                </span>
              </button>
              {open === i && (
                <p className="text-white/50 text-[14.5px] md:text-[15.5px] leading-[1.8] pb-4 md:pb-5">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
