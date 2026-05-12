import { storySections } from "@/data/rosemontSite";

function getSection(title) {
  return storySections.find((section) => section.title === title);
}

export default function EstateIntroIdentity() {
  const intro = getSection("Introduction to Anondo Rosemont Estate");
  const identity = getSection("The Identity of Rosemont");

  if (!intro || !identity) return null;

  return (
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
  );
}
