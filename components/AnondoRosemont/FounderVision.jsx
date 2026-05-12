import { storySections } from "@/data/rosemontSite";

export default function FounderVision() {
  const founder = storySections.find(
    (section) => section.title === "Founder's Vision",
  );

  if (!founder) return null;

  return (
    <div className="bg-[#4a0a0a] py-16 text-white md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/65">
              <span className="h-px w-10 bg-current" />
              Founder&apos;s Vision
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
  );
}
