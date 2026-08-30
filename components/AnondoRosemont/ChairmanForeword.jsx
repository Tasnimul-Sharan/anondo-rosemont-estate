import Image from "next/image";
import { storySections } from "@/data/rosemontSite";

export default function ChairmanForeword() {
  const chairman = storySections.find(
    (section) => section.title === "Chairman's Foreword",
  );

  if (!chairman) return null;

  const renderWithEmphasis = (text) =>
    text
      .split(/(Anondo Rosemont Estate|“Elegantia in Aeternum” — Elegance Forever)/g)
      .map((part) =>
        part === "Anondo Rosemont Estate" ||
        part === "“Elegantia in Aeternum” — Elegance Forever" ? (
          <strong key={part} className="font-semibold text-secondary">
            {part}
          </strong>
        ) : (
          part
        ),
      );

  return (
    <section
      id="chairmans-foreword"
      aria-labelledby="chairmans-foreword-title"
      className="bg-white py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative lg:sticky lg:top-28">
          <div className="absolute -left-5 -top-5 hidden h-full w-full border border-secondary/15 lg:block" />

          <div className="relative min-h-[560px] overflow-hidden bg-secondary shadow-2xl shadow-secondary/20">
            <Image
              src="/gazi-md-mozammel-haque-1.jpeg"
              alt="Chairman of Anondo Rosemont Estate"
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 -bottom-3 bg-secondary/82 px-6 pb-4 pt-2 text-white backdrop-blur-md">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                Chairman
              </p>
              <p className="mt-2 text-2xl font-semibold">
                Gazi Md. Mozammel Hoque
              </p>
              <p className="mt-1 text-white/65">Anondo Rosemont Estate</p>
            </div>
          </div>
        </div>

        <article>
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-secondary">
            <span className="h-px w-10 bg-current" />
            Chairman
          </p>

          <h2
            id="chairmans-foreword-title"
            className="text-4xl font-semibold leading-tight text-secondary md:text-6xl"
          >
            Chairman&apos;s Foreword
          </h2>

          <div className="mt-8 grid gap-6 border-l border-secondary/25 pl-6">
            {chairman.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`leading-8 ${
                  index === 0
                    ? "text-xl font-medium text-secondary"
                    : "text-[#6b5d57]"
                }`}
              >
                {renderWithEmphasis(paragraph)}
              </p>
            ))}

            {chairman.closingLines && (
              <p className="pt-2 text-lg font-medium leading-8 text-secondary">
                {chairman.closingLines.map((line) => (
                  <span key={line} className="block">
                    {renderWithEmphasis(line)}
                  </span>
                ))}
              </p>
            )}
          </div>

          <div className="mt-8 border-t border-secondary/15 pt-6">
            <div className="border-l border-secondary/35 pl-4">
              <p className="font-extrabold text-secondary">
                Gazi Md. Mozammel Hoque
              </p>
              <p className="mt-1 text-sm text-[#6b5d57]">
                Chairman, Anondo Rosemont Estate
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
