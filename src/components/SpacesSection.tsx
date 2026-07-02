import bgPhoto  from '../assets/products/Home_furniture/hf-50.jpeg';
import floatImg from '../assets/products/Home_furniture/hf-16.jpeg';

const HEADING_FONT = "'Cormorant Garamond', Georgia, serif";

const SpacesSection = () => (
  <section className="relative overflow-hidden min-h-[380px] md:min-h-[480px]">

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

    {/* Desktop: heading bottom-left */}
    <div
      className="hidden md:flex items-end relative z-10
                 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 pb-16 md:pb-20"
      style={{ minHeight: '480px' }}
    >
      <h2
        className="text-white italic leading-[1.05]
                   text-[44px] md:text-[52px] lg:text-[58px]"
        style={{ fontFamily: HEADING_FONT, fontWeight: 300, maxWidth: '460px' }}
      >
        Spaces crafted with<br />intent
      </h2>
    </div>

    {/* Floating card — right-center (desktop) */}
    <div
      className="hidden md:block absolute rounded-[20px] overflow-hidden"
      style={{
        top:       '50%',
        transform: 'translateY(-50%)',
        right:     'clamp(40px, 25vw, 320px)',
        width:     'clamp(260px, 36vw, 460px)',
        height:    'clamp(240px, 37vw, 430px)',
        zIndex:    10,
        boxShadow: '0 20px 56px rgba(0,0,0,0.28)',
      }}
    >
      <img
        src={floatImg}
        alt="Interior dining space"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Mobile: stacked */}
    <div className="md:hidden relative z-10 flex flex-col gap-5 px-5 sm:px-12 py-10">
      <h2
        className="text-white italic leading-[1.05] text-[36px] sm:text-[44px]"
        style={{ fontFamily: HEADING_FONT, fontWeight: 300 }}
      >
        Spaces crafted with<br />intent
      </h2>
      <div
        className="rounded-[16px] overflow-hidden"
        style={{ height: '210px', boxShadow: '0 16px 40px rgba(0,0,0,0.25)' }}
      >
        <img
          src={floatImg}
          alt="Interior dining space"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default SpacesSection;
