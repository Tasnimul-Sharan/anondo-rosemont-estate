import Link from "next/link";
import { storySections } from "@/data/rosemontSite";

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

export default function EstateRemainingSections() {
  return (
    <section className="overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.26em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Complete Estate Narrative
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-[#4a0a0a] md:text-6xl lg:text-7xl">
              Every Chapter of the Rosemont Estate Story
            </h1>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-[#6b5d57]">
            Explore the full planning, lifestyle, security, location,
            investment, NRB, developer, and generational legacy narrative behind
            Anondo Rosemont Estate.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.32fr_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-[#4a0a0a]/20 pl-7">
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#4a0a0a]/55">
                Rosemont Details
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#4a0a0a]">
                Master planning, lifestyle, investment, and legacy in detail.
              </h2>

              <Link
                href="/the-estate"
                className="group mt-8 inline-flex items-center gap-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#4a0a0a]"
              >
                Back to Estate Story
                <span className="h-px w-10 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            </div>
          </aside>

          <div className="grid gap-7">
            {remainingSections.map((section, index) => (
              <article
                key={section.title}
                className="group border border-[#4a0a0a]/15 bg-white p-7 shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-1 md:p-10"
              >
                <div className="mb-8 flex items-center justify-between gap-6">
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <span className="h-px w-24 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 group-hover:scale-x-100" />
                </div>

                <h2 className="text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-4xl">
                  {section.title}
                </h2>

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

                {section.signature && (
                  <div className="mt-8 border-t border-[#4a0a0a]/15 pt-6">
                    <p className="font-extrabold text-[#4a0a0a]">
                      {section.signature}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
