const ITEMS = [
  'Kitchen Wares',
  'Electronics',
  'Wines',
  'Premium Quality',
  'Free Enquiry',
  'Fast Delivery',
  'Office Furniture',
  'Home Decor',
];

const Marquee = () => (
  <div
    className="overflow-hidden py-[13px] sm:py-[15px]"
    style={{ backgroundColor: '#ECEAF8' }}
    aria-hidden="true"
  >
    <div
      className="flex items-center"
      style={{
        width: 'max-content',
        animation: 'marquee-scroll 28s linear infinite',
        willChange: 'transform',
      }}
    >
      {/* Two identical copies — translateX(-50%) shifts exactly one copy width */}
      {[0, 1].map(copy => (
        <div key={copy} className="flex items-center shrink-0">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span
                className="text-[14px] sm:text-[15.5px] font-medium tracking-wide whitespace-nowrap"
                style={{ color: '#2D2870' }}
              >
                {item}
              </span>
              <span
                className="mx-[20px] sm:mx-[28px] text-[11px] sm:text-[13px] leading-none select-none"
                style={{ color: '#2D2870' }}
              >
                {i % 2 === 0 ? '✦' : '✧'}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
