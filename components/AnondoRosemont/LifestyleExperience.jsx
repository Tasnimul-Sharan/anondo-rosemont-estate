"use client";

import Image from "next/image";
import Link from "next/link";

const lifestyleHighlights = [
  "807 Bigha Master Planned Estate",
  "Duplex Villas on Every Plot",
  "Central Park",
  "Scenic Lake",
  "Grand Sports Complex",
  "Community Farming Zone",
  "Adjacent to Anondo Baari Wellness Center",
  "Community Gardening Space",
];

export default function LifestyleExperience() {
  return (
    <section className="relative overflow-hidden bg-[#f8f3ec] text-[#241818]">

      <div className="custom-container relative z-10 mx-auto py-16 md:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden border border-white/15 bg-[#5a0c0c] shadow-2xl shadow-black/25">
            <Image
              src="/other/lifestyle-experience.png"
              alt="Anondo Rosemont Estate lifestyle"
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.18)_0%,rgba(56,10,10,0.58)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.52)_0%,rgba(56,10,10,0.12)_100%)]" />

            <div className="absolute bottom-0 left-0 max-w-md border-t border-r border-white/20 bg-secondary/82 p-7 backdrop-blur-md md:p-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
                Lifestyle Experience
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
                A Life Beyond Your Imagination
              </h2>

              <p className="mt-5 leading-8 text-off_white/80">
                Anondo Rosemont Estate is not just about owning a duplex. It is
                about embracing a complete lifestyle shaped by nature, comfort,
                and community.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="mb-8 max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
                <span className="h-px w-10 bg-secondary" />
                Lifestyle Highlights
              </p>

              <h3 className="text-3xl font-semibold leading-tight text-secondary md:text-5xl">
                Wellness and Spaces Made for Generations
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6b5d55] md:text-lg">
                Designed to create balance between privacy and recreation,
                Rosemont offers open spaces, water views, and structured leisure
                zones for every generation.
              </p>
            </div>

            <div className="grid border border-secondary/16 bg-white/70 backdrop-blur-sm sm:grid-cols-2">
              {lifestyleHighlights.map((item, index) => (
                <div
                  key={item}
                  className="group relative min-h-[138px] border-b border-secondary/12 p-6 transition duration-300 hover:bg-secondary sm:border-r md:p-7"
                >
                  <div className="mb-6 flex items-center justify-between gap-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary/55 transition duration-300 group-hover:text-white/55">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-16 origin-left scale-x-[0.35] bg-secondary transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:bg-white" />
                  </div>

                  <p className="max-w-[17rem] text-lg font-semibold leading-snug text-[#241818] transition duration-300 group-hover:text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 border-l border-secondary/30 pl-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl leading-8 text-[#6b5d55]">
                At Rosemont, life flows beyond walls into landscapes,
                waterfronts, and shared spaces designed for wellness and
                connection.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-4 bg-secondary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-xl shadow-secondary/20 transition duration-300 hover:bg-primary hover:shadow-primary/30"
              >
                Get In Touch
                <span className="h-px w-12 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
