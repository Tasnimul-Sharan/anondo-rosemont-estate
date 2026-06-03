import Image from "next/image";
import Link from "next/link";
import {
  FiActivity,
  FiArrowUpRight,
  FiCompass,
  FiDroplet,
  FiGrid,
  FiHome,
  FiMap,
  FiMapPin,
  FiSearch,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const gatewayCards = [
  {
    title: "Master Plan",
    label: "807 bigha estate",
    href: "/master-plan",
    icon: FiMap,
  },
  {
    title: "Villas",
    label: "5, 10 and 20 katha",
    href: "/villas-residences",
    icon: FiHome,
  },
  {
    title: "Lifestyle",
    label: "Park, lake and sports",
    href: "/lifestyle-amenities",
    icon: FiActivity,
  },
  {
    title: "Location",
    label: "Near Purbachal",
    href: "/location",
    icon: FiMapPin,
  },
  {
    title: "Gallery",
    label: "Estate visuals",
    href: "/gallery",
    icon: FiGrid,
  },
];

const estateMarkers = [
  { label: "Location", value: "Ulukhola, Purbachal Corridor" },
  { label: "Residence", value: "Developer-Built Duplex Villas" },
  { label: "Estate Scale", value: "807 Bigha Master Plan" },
];

const villaPortfolio = [
  {
    title: "The Classic",
    category: "5 Katha Duplex",
    image: "/5 katha villa/5-katha.jpg",
    href: "/villas-residences/the-classic",
  },
  {
    title: "The Premium",
    category: "10 Katha Duplex",
    image: "/10 katha villa/10-katha.jpg",
    href: "/villas-residences/the-premium",
  },
  {
    title: "The Estate",
    category: "20 Katha Signature Estate",
    image: "/20 katha villa/20-katha.jpg",
    href: "/villas-residences/the-estate",
  },
  {
    title: "Estate Landscape",
    category: "Lake, park and avenues",
    image: "/gallary/rosemont-plaza.jpg",
    href: "/gallery",
  },
];

const serviceItems = [
  {
    title: "Architectural Control",
    text: "A consistent villa language protects the street character and long-term value of the estate.",
    icon: FiCompass,
  },
  {
    title: "Secure Estate Living",
    text: "Gated planning, controlled access, lighting, and estate infrastructure support daily confidence.",
    icon: FiShield,
  },
  {
    title: "Lake and Landscape",
    text: "A calm estate environment shaped around water, gardens, open lawns, and shaded movement.",
    icon: FiDroplet,
  },
  {
    title: "Community Lifestyle",
    text: "Parks, sports, clubhouse, and family facilities create life beyond the private villa.",
    icon: FiUsers,
  },
  {
    title: "Growth Corridor",
    text: "Positioned near Purbachal New Town, Rosemont balances natural calm with future accessibility.",
    icon: FiTrendingUp,
  },
];

function EstateGateway() {
  return (
    <section className="relative bg-[#f8f3ec] pb-16 text-[#241818] md:pb-24">
      <div className="custom-container relative z-20 mx-auto -mt-20">
        <div className="border border-[#4a0a0a]/12 bg-white p-4 shadow-2xl shadow-[#4a0a0a]/12 md:p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid gap-3 md:grid-cols-3">
              {estateMarkers.map((item) => (
                <div
                  key={item.label}
                  className="border border-[#4a0a0a]/10 bg-[#f8f3ec] px-5 py-4"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4a0a0a]/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#4a0a0a]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-full min-h-[64px] items-center justify-center gap-4 bg-[#4a0a0a] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#241818]"
            >
              <FiSearch size={18} />
              Book Visit
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {gatewayCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group border border-[#4a0a0a]/12 bg-white p-5 shadow-lg shadow-[#4a0a0a]/7 transition duration-500 hover:-translate-y-1 hover:bg-[#4a0a0a] hover:text-white"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#4a0a0a]/15 bg-[#4a0a0a]/5 text-[#4a0a0a] transition duration-300 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-white">
                  <Icon size={21} />
                </div>
                <h3 className="text-lg font-semibold leading-tight text-[#4a0a0a] transition group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#6b5d57] transition group-hover:text-white/70">
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArchitecturalStatement() {
  return (
    <section className="overflow-hidden bg-[#ded8ce] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="custom-container mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden bg-[#4a0a0a] md:min-h-[560px]">
          <Image
            src="/gallary/rosemont-master-plan.jpg"
            alt="Anondo Rosemont Estate master planned environment"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0.02)_0%,rgba(74,10,10,0.54)_100%)]" />

          <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#4a0a0a]/70 p-7 text-white backdrop-blur-sm md:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
              Estate Identity
            </p>
            <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
              A complete villa world, planned before every residence rises.
            </h3>
          </div>
        </div>

        <div className="max-w-2xl lg:pl-8">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
            <span className="h-px w-10 bg-current" />
            Welcome to Rosemont
          </p>

          <h2 className="text-4xl font-semibold leading-[1.04] text-[#4a0a0a] md:text-6xl">
            Estate living shaped by architecture, landscape, and permanence.
          </h2>

          <p className="mt-8 text-base leading-8 text-[#5f5650] md:text-lg">
            Inspired by disciplined architectural studios and modern estate
            portfolios, Rosemont keeps the focus on proportion, calm movement,
            open space, and a controlled villa streetscape.
          </p>

          <div className="mt-10 grid border border-[#4a0a0a]/15 bg-[#f8f3ec] sm:grid-cols-3">
            {[
              ["807", "Bigha"],
              ["60 ft", "Grand Avenue"],
              ["3", "Villa Types"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-b border-[#4a0a0a]/12 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="text-3xl font-semibold text-[#4a0a0a]">{value}</p>
                <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6b5d57]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/the-estate"
            className="group mt-9 inline-flex items-center gap-4 bg-[#4a0a0a] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#241818]"
          >
            Read Estate Story
            <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function VillaPortfolio() {
  return (
    <section className="overflow-hidden bg-[#fffaf5] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="custom-container mx-auto">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Villa Portfolio
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
              Featured residences in a refined estate collection.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            Like a curated architectural portfolio, Rosemont presents each villa
            type as part of one disciplined streetscape: private, green, and
            prepared for long-term family living.
          </p>
        </div>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4">
          {villaPortfolio.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group min-w-[280px] overflow-hidden border border-[#4a0a0a]/14 bg-white shadow-xl shadow-[#4a0a0a]/8 transition duration-500 hover:-translate-y-1 md:min-w-[420px]"
            >
              <div className="relative h-[360px] overflow-hidden bg-[#4a0a0a]">
                <Image
                  src={item.image}
                  alt={`${item.title} ${item.category}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0.02)_0%,rgba(74,10,10,0.7)_100%)]" />

                <div className="absolute left-6 top-6 border border-white/25 bg-white/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/60">
                    {item.category}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RosemontServices() {
  return (
    <section className="overflow-hidden bg-tertiary/95 py-16 text-white md:py-24 lg:py-32">
      <div className="custom-container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#f8f3ec]/70">
            Estate Quality
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Integrated estate planning for luxury villa living.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {serviceItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group border border-[#f8f3ec]/12 bg-[#f8f3ec]/6 p-6 transition duration-500 hover:-translate-y-1 hover:border-[#f8f3ec]/45 hover:bg-[#f8f3ec]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#f8f3ec]/20 bg-[#f8f3ec] text-2xl text-[#4a0a0a] transition duration-300 group-hover:scale-105 group-hover:border-[#4a0a0a]/15 group-hover:bg-[#4a0a0a] group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-lg font-semibold leading-tight text-white transition duration-300 group-hover:text-[#4a0a0a]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62 transition duration-300 group-hover:text-[#6b5d57]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid overflow-hidden border border-white/10 lg:grid-cols-2">
          <div className="relative min-h-[360px] bg-[#241818] p-8 md:p-10">
            <Image
              src="/other/lifestyle-experience.png"
              alt="Rosemont lifestyle and landscape"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-35"
            />
            <div className="relative z-10 max-w-xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#f8f3ec]/72">
                Premium Quality
              </p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                Privacy, greenery, and community designed together.
              </h3>
              <p className="mt-6 leading-8 text-white/68">
                Rosemont brings the calm of a landscaped estate into a
                structured residential plan, so daily life feels quieter, safer,
                and more complete.
              </p>
            </div>
          </div>

          <div className="bg-[#f8f3ec] p-8 text-[#241818] md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/70">
              Sustainable Estate Future
            </p>
            <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-tight md:text-5xl">
              Built for a calmer, greener community rhythm.
            </h3>

            <ul className="mt-8 grid gap-4">
              {[
                "Wide avenues and organized movement",
                "Central park, lake, and open leisure zones",
                "Community farming and family wellness spaces",
                "Estate infrastructure planned for long-term living",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#4a0a0a]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeRosemontShowcase() {
  return (
    <>
      <EstateGateway />
      {/* <ArchitecturalStatement />
      <VillaPortfolio />
      <RosemontServices /> */}
    </>
  );
}
