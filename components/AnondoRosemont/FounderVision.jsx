import Image from "next/image";
import { storySections } from "@/data/rosemontSite";

export default function FounderVision() {
  const founder = storySections.find(
    (section) => section.title === "Founder's Vision",
  );

  if (!founder) return null;

  const [origin, context, response, setting, estateCulture] =
    founder.paragraphs;

  return (
    <section
      id="founder-vision"
      aria-labelledby="founder-vision-title"
      className="relative bg-[#f8f3ec] py-16 md:py-24 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-secondary/15" />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
          <header className="self-start lg:sticky lg:top-28">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-secondary/65">
              <span className="h-px w-10 bg-secondary" />
              {founder.eyebrow || founder.title}
            </p>

            <h2
              id="founder-vision-title"
              className="max-w-xl text-3xl font-semibold leading-tight text-secondary md:text-5xl"
            >
              {founder.heading}
            </h2>

            <p className="mt-7 max-w-lg border-l-2 border-secondary pl-5 text-xl font-medium leading-8 text-secondary md:text-2xl md:leading-9">
              {founder.lead}
            </p>

            <div className="relative mt-9 aspect-[4/3] overflow-hidden bg-secondary">
              <Image
                src="/slider/slider1.jpg"
                alt="Anondo Rosemont Estate duplex villa surrounded by landscaped greenery"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(56,10,10,0.72)_100%)]" />
              <p className="absolute bottom-0 left-0 right-0 p-5 text-xs font-semibold uppercase tracking-[0.2em] text-white md:p-7">
                Elegantia in Aeternum
              </p>
            </div>
          </header>

          <div className="border-t border-secondary/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16">
            <div className="border-b border-secondary/20 pb-10">
              <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.22em] text-secondary/55">
                The belief
              </p>
              <div className="divide-y divide-secondary/15 border-y border-secondary/15">
                {founder.beliefs.map((belief, index) => (
                  <div
                    key={belief}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 md:grid-cols-[3rem_1fr] md:py-5"
                  >
                    <span className="pt-1 text-xs font-bold text-secondary/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-8 text-[#554b46]">{belief}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 py-10 text-[1.05rem] leading-8 text-[#625752] md:text-lg md:leading-9">
              <p>{origin}</p>
              <p>{context}</p>
            </div>

            <div className="border-y border-secondary/20 py-8 md:py-10">
              <p className="text-3xl font-semibold leading-tight text-secondary md:text-4xl">
                {response}
              </p>
              <p className="mt-6 text-[1.05rem] leading-8 text-[#625752] md:text-lg md:leading-9">
                {setting}
              </p>
              <p className="mt-6 text-xl font-medium leading-8 text-secondary md:text-2xl md:leading-9">
                {estateCulture}
              </p>
            </div>

            <div className="bg-secondary px-6 py-8 text-white sm:px-8 md:px-10 md:py-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/55">
                A culture where
              </p>
              <div className="mt-6 divide-y divide-white/15 border-y border-white/15">
                {founder.culture.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 md:grid-cols-[3rem_1fr]"
                  >
                    <span className="pt-1 text-xs font-bold text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg leading-8 text-white/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 py-10 text-[1.05rem] leading-8 text-[#625752] md:text-lg md:leading-9">
              {founder.closingParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="border-t border-secondary/20 pt-9">
              <p className="text-2xl font-semibold leading-9 text-secondary md:text-3xl md:leading-10">
                {founder.promises[0]}
                <br />
                {founder.promises[1]}
              </p>

              <div className="mt-7 space-y-3 border-l-2 border-secondary/30 pl-5">
                {founder.promises.slice(2).map((promise) => (
                  <p
                    key={promise}
                    className="text-lg font-medium leading-8 text-[#554b46]"
                  >
                    {promise}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
