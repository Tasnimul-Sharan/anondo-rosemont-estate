"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaGlobeAsia,
  FaShieldAlt,
  FaFileSignature,
} from "react-icons/fa";

const trustedCountries = [
  "Saudi Arabia",
  "UAE",
  "Qatar",
  "Kuwait",
  "Oman",
  "UK",
  "USA",
  "Malaysia",
  "South Africa",
  "Japan",
  "South Korea",
];

const trustPoints = [
  {
    icon: <FaShieldAlt />,
    title: "Secure Investment",
    desc: "Structured guidance for overseas buyers.",
  },
  {
    icon: <FaFileSignature />,
    title: "Documentation Support",
    desc: "Assistance for booking and legal process.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Remote Coordination",
    desc: "Consultation from anywhere in the world.",
  },
];

export default function NRBHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-off_white text-soft_black">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(62,6,7,0.98)_0%,rgba(74,10,10,0.94)_46%,rgba(248,243,236,0.96)_46%,rgba(248,243,236,1)_100%)]" />

      {/* Premium Glow */}
      <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-rose_deep/35 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="custom-container relative z-10 mx-auto py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl text-off_white">
            <p className="mb-5 inline-flex items-center gap-3 border border-off_white/20 bg-off_white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-off_white/75 backdrop-blur-md">
              <span className="h-px w-8 bg-off_white/60" />
              NRB Investment Opportunity
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-off_white md:text-6xl lg:text-7xl">
              Own Your Legacy
              <span className="block text-off_white/82">
                at Anondo Rosemont Estate
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-off_white/72 md:text-lg">
              A premium villa estate near Purbachal designed for global
              Bangladeshis who want a secure address, long-term investment, and
              a meaningful connection to home.
            </p>

            <div className="relative z-20 mt-8 grid gap-4 sm:grid-cols-3">
              {trustPoints.map((item) => (
                <div
                  key={item.title}
                  className="relative z-20 border border-off_white/20 p-5 backdrop-blur-md transition duration-500 bg-primary"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center border border-off_white/20 bg-off_white/10 text-lg text-off_white">
                    {item.icon}
                  </div>

                  <h3 className="text-sm font-semibold text-off_white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-off_white/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/anondo-rosemont-estate/contact"
                className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-off_white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary shadow-rosemont transition duration-500 hover:text-off_white"
              >
                <span className="absolute inset-0 bg-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10">Book Site Visit</span>
                <span className="relative z-10 h-px w-10 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>

              <Link
                href="https://wa.me/8801331115500"
                target="_blank"
                className="group inline-flex items-center justify-center gap-3 border border-off_white/30 bg-off_white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-off_white backdrop-blur-md transition duration-500 hover:border-off_white hover:bg-off_white hover:text-primary"
              >
                <FaWhatsapp />
                WhatsApp Now
                <span className="h-px w-10 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            </div>

            <p className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-off_white/50">
              Legal Support • Documentation Guidance • Remote Purchase
              Assistance
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="relative overflow-hidden border border-primary/12 bg-white p-7 shadow-rosemont md:p-10">
              <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-primary/20" />
              <div className="absolute bottom-0 left-0 h-28 w-28 border-r border-t border-primary/10" />

              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                <span className="h-px w-8 bg-primary" />
                Trusted by NRB Buyers From
              </p>

              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-primary md:text-4xl">
                A Dedicated Investment Path for Global Bangladeshis
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-soft_black/65">
                Rosemont Estate supports overseas buyers from consultation to
                documentation coordination, giving NRB families a smoother way
                to plan property ownership in Bangladesh.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {trustedCountries.map((country, index) => (
                  <div
                    key={country}
                    className="group border border-primary/10 bg-off_white px-4 py-4 transition duration-500 hover:bg-primary"
                  >
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-primary/35 transition group-hover:text-off_white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm font-semibold text-primary transition group-hover:text-off_white">
                      {country}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-l border-primary/25 pl-5">
                <p className="text-sm leading-7 text-soft_black/65">
                  Whether you live in the Middle East, Europe, America, Africa,
                  or East Asia, our team can guide you through consultation,
                  document preparation, and family coordination in Bangladesh.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 bg-primary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
