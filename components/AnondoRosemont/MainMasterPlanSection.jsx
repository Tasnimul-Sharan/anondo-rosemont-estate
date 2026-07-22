import Image from "next/image";
import { designFeatures, masterPlanMetrics } from "@/data/rosemontSite";

const plotCategories = [
  {
    title: "5 Katha Villa Residences",
    plots: "900 plots",
    size: "2,750 sft duplex",
    floors: "Ground 1,350 sft / First 1,400 sft",
    frontage: "Private driveway",
    image: "/5 katha villa/5-katha-1.jpg",
    note: "Efficient family villas with open lawn living, garage planning, and comfortable indoor-outdoor balance.",
  },
  {
    title: "10 Katha Villa Residences",
    plots: "450 plots",
    size: "5,000 sft duplex",
    floors: "Ground 2,000 sft / First 3,000 sft",
    frontage: "Private driveway",
    image: "/10 katha villa/10-katha-1.png",
    note: "Expanded estate living with larger gardens, executive facade presence, and optional private pool planning.",
  },
  {
    title: "20 Katha Signature Estates",
    plots: "90 estates",
    size: "7,200 sft villa",
    floors: "Ground 4,000 sft / First 3,200 sft",
    frontage: "Grand private driveway",
    image: "/20 katha villa/20-katha-1.jpg",
    note: "The most prestigious estate scale with duplex or triplex opportunity, private pool, and extended gardens.",
  },
];

const roadHighlights = [
  {
    value: "80 ft",
    title: "Grand Avenue",
    text: "The primary estate boulevard designed for arrival, movement, and a generous estate impression.",
  },
  {
    value: "60 ft",
    title: "Secondary Avenues",
    text: "Wide internal avenues connect residential zones, amenities, landscapes, and community facilities.",
  },
  {
    value: "25 ft",
    title: "Residential Roads",
    text: "Smaller plot access roads support calm neighborhood movement and daily residential convenience.",
  },
];

export function MainMasterPlanSection() {
  return (
    <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="mx-auto custom-container">
        <div className="grid gap-10 border-b border-secondary/15 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-secondary">
              <span className="h-px w-10 bg-current" />
              Master Plan Overview
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#3e0607] md:text-5xl">
              A complete estate layout shaped around villas, avenues, water, and
              community life.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            The master plan organizes Rosemont into residential villa zones,
            wide avenue networks, elevated plots, lake and park landscapes,
            community farming, infrastructure corridors, and a harmonized
            architectural environment.
          </p>
        </div>

        <div className="mt-12 overflow-hidden border border-secondary/15 bg-white p-3 shadow-2xl shadow-secondary/10 md:p-5">
          <div className="relative aspect-[16/9] overflow-hidden bg-[#f8f3ec]">
            <Image
              src="/lifestyle/rosemont-master-plan.jpg"
              alt="Anondo Rosemont Estate full master plan"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-contain object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0)_0%,rgba(74,10,10,0.32)_100%)]" />

            {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-9">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/65">
                Master Plan Overview
              </p>
              <h3 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                A complete estate layout shaped around villas, avenues, water,
                and community life.
              </h3>
            </div> */}
          </div>
        </div>

        <div className="mt-8 grid overflow-hidden border border-secondary/15 bg-white shadow-2xl shadow-secondary/10 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="relative overflow-hidden bg-secondary p-7 text-white md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,243,236,0.2),transparent_36%),linear-gradient(180deg,rgba(114,18,19,0.45)_0%,rgba(74,10,10,0)_58%)]" />
            <div className="relative z-10">
              <p className="inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/58">
                <span className="h-px w-9 bg-white/70" />
                Land Area and Project Scale
              </p>

              <div className="mt-8 flex items-end gap-4">
                <h3 className="text-6xl font-semibold leading-[0.82] md:text-7xl">
                  807
                </h3>
                <p className="mb-2 border border-white/18 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/68">
                  Bigha
                </p>
              </div>

              <p className="mt-5 text-2xl font-semibold leading-tight text-white">
                Estate Development
              </p>
              <p className="mt-6 max-w-md leading-8 text-white/72">
                A large-scale low-density estate integrating plots, villas,
                community amenities, green zones, and long-term infrastructure.
              </p>

              <div className="mt-10 grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3 lg:grid-cols-1">
                {masterPlanMetrics.slice(1).map((metric) => (
                  <div
                    key={metric.label}
                    className="group border border-white/15 bg-white/8 p-5 backdrop-blur-sm transition duration-500 hover:bg-white hover:text-secondary"
                  >
                    <div className="flex items-end justify-between gap-4">
                      <p className="text-3xl font-semibold leading-none">
                        {metric.value}
                      </p>
                      <span className="mb-2 h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
                    </div>
                    <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white/58 transition group-hover:text-secondary/58">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid bg-[#f8f3ec] lg:grid-rows-[1.06fr_auto]">
            <div className="relative min-h-[430px] overflow-hidden bg-secondary/95">
              <Image
                src="/lifestyle/rosemont-master-plan.jpg"
                alt="Anondo Rosemont Estate master plan overview"
                fill
                sizes="(max-width: 1024px) 100vw, 64vw"
                className="object-cover object-center transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.78)_0%,rgba(56,10,10,0.22)_48%,rgba(56,10,10,0.68)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10 lg:p-12">
                <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.22em] text-white/68">
                  <span className="h-px w-12 bg-white" />
                  Planned Estate Network
                </p>
                <h3 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                  Master planning that feels open, organized, and estate-like.
                </h3>
              </div>
            </div>

            <div className="grid gap-px border-t border-secondary/15 bg-secondary/15 md:grid-cols-3">
              {roadHighlights.map((road, index) => (
                <article
                  key={road.title}
                  className="group bg-white p-6 transition duration-500 hover:bg-[#f8f3ec] md:p-7"
                >
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-secondary/45 transition group-hover:text-secondary">
                      Avenue 0{index + 1}
                    </p>
                    <span className="flex h-10 w-10 items-center justify-center border border-secondary/15 text-xs font-extrabold text-secondary/50 transition group-hover:border-secondary group-hover:bg-secondary group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="mt-5 text-3xl font-semibold leading-none text-secondary">
                    {road.value}
                  </h4>
                  <p className="mt-4 leading-7 text-[#6b5d57]">
                    <span className="font-semibold text-secondary">
                      {road.title}
                    </span>{" "}
                    {road.text}
                  </p>
                  <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-secondary transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-secondary/55">
                Plot Distribution and Layout
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-secondary md:text-4xl">
                Three residential scales, one unified villa community.
              </h3>
            </div>
            <p className="max-w-xl leading-8 text-[#6b5d57]">
              Each plot category is planned with a dedicated villa format so the
              estate remains consistent, elegant, and easier to manage.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plotCategories.map((plot, index) => (
              <article
                key={plot.title}
                className="group overflow-hidden border border-secondary/15 bg-white shadow-xl shadow-secondary/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/18"
              >
                <div className="relative h-[310px] overflow-hidden bg-secondary">
                  <Image
                    src={plot.image}
                    alt={plot.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.78)_100%)]" />

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-extrabold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="mb-5 block h-px w-20 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/65">
                      {plot.plots}
                    </p>
                    <h4 className="text-2xl font-semibold leading-tight">
                      {plot.title}
                    </h4>
                  </div>
                </div>

                <div className="p-7">
                  <div className="grid gap-3 border-b border-secondary/15 pb-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#6b5d57]">
                        Villa Size
                      </span>
                      <span className="text-right font-extrabold text-secondary">
                        {plot.size}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#6b5d57]">
                        Floor Plan
                      </span>
                      <span className="max-w-[12rem] text-right text-sm font-semibold leading-6 text-secondary">
                        {plot.floors}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#6b5d57]">
                        Access
                      </span>
                      <span className="text-right text-sm font-semibold text-secondary">
                        {plot.frontage}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-[#6b5d57]">{plot.note}</p>

                  <div className="mt-7 flex items-center justify-between gap-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-secondary/55">
                      Villa Category
                    </p>
                    <span className="h-px w-16 origin-left scale-x-[0.35] bg-secondary transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden border border-secondary/15 bg-white shadow-2xl shadow-secondary/10 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="bg-[#5a0c0c] p-7 text-white md:p-10 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/60">
              Architectural Harmony Guidelines
            </p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              The details that keep Rosemont visually unified.
            </h3>
            <p className="mt-6 leading-8 text-white/70">
              The master plan protects the estate character through elevated
              plots, open lawns, disciplined boundaries, wide boulevards, and a
              consistent European-inspired villa language.
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            {designFeatures.map((feature, index) => (
              <article
                key={feature}
                className="group min-h-[210px] border-b border-secondary/15 p-7 transition duration-500 hover:bg-[#f8f3ec] sm:border-r sm:even:border-r-0 lg:p-9"
              >
                <div className="mb-8 flex items-center justify-between gap-5">
                  <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-secondary/45 transition duration-300 group-hover:text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-20 origin-left scale-x-[0.35] bg-secondary transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </div>

                <p className="text-xl font-semibold leading-snug text-secondary md:text-2xl">
                  {feature}
                </p>
              </article>
            ))}
          </div>
        </div>
        {/* Luxury Design Credit */}
        <div className="mt-16 flex justify-center">
          <div className="relative max-w-xl overflow-hidden border border-secondary/15 bg-white px-8 py-6 text-center shadow-xl shadow-secondary/10">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(74,10,10,0.06)_45%,transparent_100%)]" />

            <div className="relative flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-secondary/25" />
              <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-secondary/35">
                Designed by
              </p>
              <span className="h-px w-12 bg-secondary/25" />
            </div>

            <p className="relative mt-3 font-serif text-lg font-semibold italic tracking-wide text-secondary">
              REART DESIGN PTE LTD
            </p>

            <p className="relative mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-secondary/45">
              20 Kallang Avenue #03-12 Singapore 339411
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
