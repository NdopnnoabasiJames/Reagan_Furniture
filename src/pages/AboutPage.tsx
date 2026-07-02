import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SERIF = "'Playfair Display', Georgia, serif";

const CORE_VALUES = [
  {
    title: "Premium Quality",
    desc: "Every product is hand-selected for durability, design, and lasting value.",
  },
  {
    title: "Customer First",
    desc: "Customer satisfaction sits at the heart of everything we do.",
  },
  {
    title: "Affordable Elegance",
    desc: "Every product is hand-selected for durability, design, and lasting value.",
  },
  {
    title: "Complete Spaces",
    desc: "From homes to hotels we furnish every environment beautifully.",
  },
];

const Hr = () => <div className="border-t border-gray-200 my-10 md:my-12" />;

const AboutPage = () => (
  <>
    <Navbar />

    <main style={{ backgroundColor: "#F5F4F1" }}>
      {/* ── "Where it all began" hero heading ─────────────────────── */}
      <div className="text-center pt-14 pb-12 px-6">
        <h1
          className="text-[26px] sm:text-[30px] md:text-[34px] text-gray-900 mb-5 font-bold"
          style={{ fontFamily: SERIF }}
        >
          Where it all began
        </h1>

        {/* Decorative divider: ── × ── */}
        <div className="flex items-center justify-center gap-3">
          <div className="border-t border-gray-300" style={{ width: "72px" }} />
          <span className="text-gray-400 text-[16px] leading-none select-none">
            ×
          </span>
          <div className="border-t border-gray-300" style={{ width: "72px" }} />
        </div>
      </div>

      {/* ── Content body ───────────────────────────────────────────── */}
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 pb-16 md:pb-24">
        {/* ── Built on a bold vision ─────────────────────────────── */}
        <section>
          <h2 className="text-[20px] md:text-[19px] font-bold text-gray-900 mb-4">
            ABOUT US
          </h2>

          <p className="text-[20px] text-gray-600 leading-[1.85] mb-4">
            Founded in{" "}
            <strong className="text-gray-900 font-semibold">2019</strong> by{" "}
            <strong className="text-gray-900 font-semibold">Akan Umanah</strong>,
            Reagan stores is a proudly Nigerian retail and wholesale brand
            located at{" "}
            <strong className="text-gray-900 font-semibold">
              62 Aka road Uyo, Akwaibom
            </strong>{" "}
            state and we are committed to making quality products accessible,
            affordable and convenient. What began as a Mega mart business has
            grown into a trusted one-stop destination where customers can shop
            for everything from{" "}
            <strong className="text-gray-900 font-semibold">furniture, kitchenware, bedding, appliances,
            wines and lifestyle </strong> essentials to construction materials, mobility
            solutions and so much more.
          </p>

          <p className="text-[20px] text-gray-600 leading-[1.85]">
            At our core, we believe shopping should be simple. That's why we're
            constantly expanding our product range to ensure our customers can
            find what they need in one place, backed by our <strong className="text-gray-900 font-semibold">exceptional service,
            trusted quality,</strong> and a <strong className="text-gray-900 font-semibold">genuine commitment</strong> to helping every home,
            business and project succeed.
          </p>
        </section>

        <Hr />

        {/* ── What drives us ─────────────────────────────────────── */}
        <section>
          <h2 className="text-[20px] md:text-[19px] font-bold text-gray-900 mb-4">
            MISSION & VISION
          </h2>

          <p className="text-[20px] text-gray-600 leading-[1.85]">
            Our mission is to become the first place people think of whenever
            they need quality products for their home, business, or everyday
            life across the 36 states in Nigeria. We are committed to offering
            an ever-growing selection of trusted products, exceptional customer
            service and a shopping experience built on <strong className="text-gray-900 font-semibold">convenience, value, and
            integrity.</strong> As we continue to grow, our vision is to expand across
            Nigeria, bringing the same commitment to <strong className="text-gray-900 font-semibold">quality, reliability,</strong> and 
             <strong className="text-gray-900 font-semibold"> customer satisfaction</strong> to communities everywhere we serve.
          </p>
        </section>

        <Hr />

        {/* ── Our core values ────────────────────────────────────── */}
        <section>
          <h2 className="text-[20px] md:text-[20px] font-bold text-gray-900 mb-6">
            Our core values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_VALUES.map((v) => (
              <div
                key={v.title}
                className="p-4 border-l-[3px]"
                style={{
                  backgroundColor: "#EEEDF5",
                  borderLeftColor: "#5B50D6",
                }}
              >
                <h3 className="text-[19px] font-bold text-gray-900 mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-[16px] text-gray-500 leading-[1.75]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Hr />

        {/* ── Come see us in person ──────────────────────────────── */}
        <section>
          <h2 className="text-[20px] md:text-[19px] font-bold text-gray-900 mb-3">
            Come see us in person
          </h2>

          <p className="text-[18px] text-gray-600 leading-[1.85] mb-7">
            We'd love to have you walk through our showroom and experience the
            quality firsthand. Our team is always on hand to help you find
            exactly what your space needs.
          </p>

          {/* Address card */}
          <div
            className="flex items-start gap-5 p-6 sm:p-7"
            style={{ backgroundColor: "#EAEAE8" }}
          >
            {/* Pin icon in dark square */}
            <div
              className="shrink-0 w-9 h-9 flex items-center justify-center rounded"
              style={{ backgroundColor: "#1C1C1C" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <div>
              <p className="text-[13px] text-gray-400 uppercase tracking-[0.13em] mb-1.5">
                Showroom Address
              </p>
              <p className="text-[16px] font-bold text-gray-900 leading-[1.65]">
                #62 Aka Road, Uyo
              </p>
              <p className="text-[16px] font-bold text-gray-900">
                Akwa Ibom State, Nigeria
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </>
);

export default AboutPage;
