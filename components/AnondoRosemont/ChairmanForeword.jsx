import Image from "next/image";
import { storySections } from "@/data/rosemontSite";

export default function ChairmanForeword() {
  const chairman = storySections.find(
    (section) => section.title === "Chairman's Foreword",
  );

  if (!chairman) return null;

  return (
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

        <article>
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
            <span className="h-px w-10 bg-current" />
            Chairman
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
            Chairman&apos;s Foreword
          </h2>

          <div className="mt-8 grid gap-5 border-l border-[#4a0a0a]/25 pl-6">
            {chairman.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-[#6b5d57]">
                {paragraph}
              </p>
            ))}
          </div>

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
        </article>
      </div>
    </div>
  );
}
