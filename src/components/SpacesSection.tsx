import bgPhoto  from '../assets/products/home-furniture/sofas/silver-neo-baroque-sofa-suite-1.jpeg';
import floatImg from '../assets/products/home-furniture/beds/velvet-arched-headboard-bed-1.jpeg';

const HEADING_FONT = "'Cormorant Garamond', Georgia, serif";

const SpacesSection = () => (
  <section className="relative overflow-hidden min-h-[420px] md:min-h-[600px] lg:min-h-0">

    {/* Background */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:    `url(${bgPhoto})`,
        backgroundSize:     'cover',
        backgroundPosition: 'center',
      }}
    />
    <div className="absolute inset-0 bg-black/20" />

    {/* Desktop (lg+): heading vertically centred on the left */}
    <div
      className="hidden lg:flex items-center relative z-10
                 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24"
      style={{ minHeight: '640px' }}
    >
      <h2
        className="text-white italic leading-[1.05] text-[58px]"
        style={{ fontFamily: HEADING_FONT, fontWeight: 300, maxWidth: '460px' }}
      >
        Spaces crafted with<br />intent
      </h2>
    </div>

    {/* Mobile + Tablet (below lg): stacked layout */}
    <div className="lg:hidden relative z-10 flex flex-col gap-5 md:gap-8 px-5 sm:px-12 md:px-16 py-10 md:py-16">
      <h2
        className="text-white italic leading-[1.05] text-[36px] sm:text-[44px] md:text-[52px]"
        style={{ fontFamily: HEADING_FONT, fontWeight: 300 }}
      >
        Spaces crafted with<br />intent
      </h2>
      <div
        className="overflow-hidden rounded-[16px] md:rounded-[20px]"
        style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}
      >
        <img
          src={floatImg}
          alt="Interior dining space"
          className="w-full object-cover h-[280px] md:h-[440px]"
        />
      </div>
    </div>
  </section>
);

export default SpacesSection;
