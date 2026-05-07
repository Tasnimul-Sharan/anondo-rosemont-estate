import Image from "next/image";
import { storySections } from "@/data/rosemontSite";

const estatePrinciples = [
  {
    title: "European Inspired Living",
    text: "Classical estate character, architectural harmony, and landscaped surroundings shaped for Bangladesh.",
  },
  {
    title: "Low Density Community",
    text: "Controlled plot distribution, open spaces, privacy, and a peaceful residential environment for every family.",
  },
  {
    title: "Legacy Focused Development",
    text: "A long-term residential estate designed for homeowners, investors, NRBs, and future generations.",
  },
];

const philosophyItems = [
  {
    title: "Low Density Living",
    text: "Spacious plots designed to ensure privacy, comfort, and a balanced estate environment.",
  },
  {
    title: "Elevated Plot Design",
    text: "Homes are elevated 18-24 inches above road level for drainage, visibility, and durability.",
  },
  {
    title: "Open Front Concept",
    text: "Front lawns remain open with pillar-based demarcation, creating a continuous elegant streetscape.",
  },
];

function getSection(title) {
  return storySections.find((section) => section.title === title);
}

export function ContentSections({
  chairmanImage = "/10 katha villa/MAHI Final.jpeg",
}) {
  const intro = getSection("Introduction to Anondo Rosemont Estate");
  const identity = getSection("The Identity of Rosemont");
  const chairman = getSection("Chairman's Foreword");
  const founder = getSection("Founder's Vision");
  const philosophy = getSection("Estate Vision and Design Philosophy");

  const featuredTitles = [
    "Introduction to Anondo Rosemont Estate",
    "The Identity of Rosemont",
    "Chairman's Foreword",
    "Founder's Vision",
    "Estate Vision and Design Philosophy",
  ];

  const remainingSections = storySections.filter(
    (section) => !featuredTitles.includes(section.title),
  );

  return (
    <section className="overflow-hidden bg-[#f8f3ec] text-[#241818]">
      <div className="relative border-b border-[#4a0a0a]/15 py-16 md:py-24 lg:py-32">
        <div className="absolute right-0 top-0 hidden h-full w-[30%] bg-[#4a0a0a] lg:block" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.26em] text-[#4a0a0a]">
                <span className="h-px w-10 bg-current" />
                The Estate Story
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-[#4a0a0a] md:text-6xl lg:text-7xl">
                The Story of Anondo Rosemont Estate
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b5d57]">
                A vision of elegant estate living inspired by nature,
                architecture, and community heritage.
              </p>
            </div>

            <div className="border border-white/15 bg-[#4a0a0a] p-7 text-white shadow-2xl shadow-[#4a0a0a]/20 lg:backdrop-blur-md">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/60">
                Motto
              </p>
              <p className="mt-4 text-3xl font-semibold leading-tight">
                Elegantia in Aeternum
              </p>
              <p className="mt-3 leading-8 text-white/70">
                Elegance Forever, planned as a foundation for heritage,
                community, and long-term estate value.
              </p>
            </div>
          </div>

          <div className="mt-14 grid border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 md:grid-cols-3">
            {[
              ["807", "Bigha Estate"],
              ["60 ft", "Grand Avenue"],
              ["Villa", "Only Township"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-b border-[#4a0a0a]/15 p-7 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-4xl font-bold leading-none text-[#4a0a0a]">
                  {value}
                </p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6b5d57]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {intro && identity && (
        <div className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1400px] gap-7 px-5 lg:grid-cols-[1.05fr_0.95fr]">
            {[intro, identity].map((section, index) => (
              <article
                key={section.title}
                className={`group border p-7 shadow-2xl md:p-10 ${
                  index === 0
                    ? "border-[#4a0a0a]/15 bg-white text-[#241818] shadow-[#4a0a0a]/10"
                    : "border-white/15 bg-[#4a0a0a] text-white shadow-[#4a0a0a]/20"
                }`}
              >
                <span className="mb-8 block h-px w-24 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />

                <h2
                  className={`text-3xl font-semibold leading-tight md:text-5xl ${
                    index === 0 ? "text-[#4a0a0a]" : "text-white"
                  }`}
                >
                  {section.title}
                </h2>

                <div className="mt-7 grid gap-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={`leading-8 ${
                        index === 0 ? "text-[#6b5d57]" : "text-white/72"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex gap-3 leading-7 ${
                          index === 0 ? "text-[#6b5d57]" : "text-white/72"
                        }`}
                      >
                        <span
                          className={`mt-[10px] h-1.5 w-1.5 shrink-0 ${
                            index === 0 ? "bg-[#4a0a0a]" : "bg-white"
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      )}

      {chairman && (
        <div className="bg-white py-16 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-5 -top-5 hidden h-full w-full border border-[#4a0a0a]/15 lg:block" />
              <div className="relative min-h-[560px] overflow-hidden bg-[#4a0a0a] shadow-2xl shadow-[#4a0a0a]/20">
                <Image
                  src="/gazi-md-mozammel-haque.jpeg"
                  alt="Chairman of Anondo Rosemont Estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#4a0a0a]/88 p-7 text-white backdrop-blur-md">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                    Chairman
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    Gazi Md. Mozammel Hoque
                  </p>
                  <p className="mt-1 text-white/65">Anondo Rosemont Estate</p>
                </div>
              </div>
            </div>

            {/* <article>
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
                <span className="h-px w-10 bg-current" />
                Chairman
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
                Chairman's Foreword
              </h2>

              <div className="mt-8 grid gap-5 border-l border-[#4a0a0a]/25 pl-6">
                {chairman.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-[#6b5d57]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {chairman.signature && (
                <div className="mt-8 border-t border-[#4a0a0a]/15 pt-6">
                  <p className="font-extrabold text-[#4a0a0a]">
                    {chairman.signature}
                  </p>
                </div>
              )}
            </article> */}
            <article>
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
                <span className="h-px w-10 bg-current" />
                Chairman
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
                Chairman's Foreword
              </h2>

              <div className="mt-8 grid gap-5 border-l border-[#4a0a0a]/25 pl-6">
                {chairman.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-[#6b5d57]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* {chairman.signature && (
                <div className="mt-9 border-t border-[#4a0a0a]/15 pt-7">
                  <div className="relative overflow-hidden border-l-2 border-[#4a0a0a] bg-[#f8f3ec] px-6 py-5">
                    <p className="text-lg font-extrabold leading-tight text-[#4a0a0a]">
                      Gazi Md. Mozammel Hoque
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#6b5d57]">
                      <span className="font-semibold uppercase tracking-[0.18em]">
                        Chairman
                      </span>
                      <span className="h-px w-8 bg-[#4a0a0a]/35" />
                      <span>Anondo Rosemont Estate</span>
                    </div>

                    <div className="mt-4 flex items-start gap-3">
                      <span className="mt-1 text-3xl font-serif leading-none text-[#4a0a0a]/35">
                        “
                      </span>

                      <p className="max-w-md text-sm italic leading-7 text-[#6b5d57]">
                        Where elegance becomes heritage.
                      </p>
                    </div>
                  </div>
                </div>
              )} */}
              {chairman.signature && (
                <div className="mt-8 border-t border-[#4a0a0a]/15 pt-6">
                  <div className="border-l border-[#4a0a0a]/35 pl-4">
                    <p className="font-extrabold text-[#4a0a0a]">
                      Gazi Md. Mozammel Hoque
                    </p>
                    <p className="mt-1 text-sm text-[#6b5d57]">
                      Chairman, Anondo Rosemont Estate
                    </p>
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      )}

      {founder && (
        <div className="bg-[#4a0a0a] py-16 text-white md:py-24 lg:py-32">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/65">
                  <span className="h-px w-10 bg-current" />
                  Founder's Vision
                </p>
                <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                  Space for Life to Flourish
                </h2>
              </div>

              <div className="grid gap-7">
                {founder.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`leading-9 ${
                      index === 0
                        ? "text-2xl font-medium text-white"
                        : "text-white/72"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {philosophy && (
        <div className="bg-[#f8f3ec] py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
                <span className="h-px w-10 bg-current" />
                Design Philosophy
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
                Estate Vision & Design Philosophy
              </h2>
              <p className="mt-6 leading-8 text-[#6b5d57]">
                {philosophy.paragraphs.join(" ")}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {philosophyItems.map((item, index) => (
                <article
                  key={item.title}
                  className="group border border-[#4a0a0a]/15 bg-white p-7 shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:bg-[#4a0a0a] hover:text-white"
                >
                  <p className="mb-7 text-xs font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45 transition group-hover:text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span className="mb-7 block h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
                  <h3 className="text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#6b5d57] transition group-hover:text-white/72">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Estate Principles
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
              The Principles Behind Rosemont
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {estatePrinciples.map((item) => (
              <article
                key={item.title}
                className="group border border-[#4a0a0a]/15 bg-[#f8f3ec] p-8 shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:bg-[#4a0a0a] hover:text-white"
              >
                <span className="mb-8 block h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
                <h3 className="text-2xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-[#6b5d57] transition group-hover:text-white/72">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#f8f3ec] py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-l border-[#4a0a0a]/20 pl-7">
                <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#4a0a0a]/55">
                  Complete Narrative
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#4a0a0a]">
                  Every chapter of the Rosemont estate story.
                </h2>
              </div>
            </aside>

            <div className="grid gap-7">
              {remainingSections.map((section, index) => (
                <article
                  key={section.title}
                  className="group border border-[#4a0a0a]/15 bg-white p-7 shadow-xl shadow-[#4a0a0a]/10 md:p-10"
                >
                  <div className="mb-8 flex items-center justify-between gap-6">
                    <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <span className="h-px w-24 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 group-hover:scale-x-100" />
                  </div>

                  <h3 className="text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-4xl">
                    {section.title}
                  </h3>

                  <div className="mt-6 grid gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-8 text-[#6b5d57]">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-7 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 leading-7 text-[#6b5d57]"
                        >
                          <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#4a0a0a]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
