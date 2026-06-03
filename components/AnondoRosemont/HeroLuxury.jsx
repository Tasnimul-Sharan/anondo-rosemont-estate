"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroLuxury() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-secondary text-off_white">
      {/* <Image
        src="/10 katha villa/MAHI Final.jpeg"
        alt="Anondo Rosemont Estate luxury villa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right md:object-center"
      /> */}

      <Image
        src="/rosemont-hero.png"
        alt="Anondo Rosemont Estate luxury villa"
        fill
        priority
        sizes="100vw"
        className="object-cover md:object-center w-full h-full"
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,6,6,0.72)_0%,rgba(38,6,6,0.38)_38%,rgba(38,6,6,0.08)_64%,transparent_100%)]" />
      {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(62,6,7,0.04)_0%,rgba(62,6,7,0.28)_100%)]" /> */}

      <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center justify-start pb-40 pt-[180px] text-left md:pb-44 lg:pt-[205px]">
        <div className="max-w-3xl lg:max-w-[750px]">
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-off_white sm:text-5xl md:text-6xl lg:text-[64px]">
            Anondo
            <span className="text-off_white/85"> Rosemont Estate</span>
          </h1>

          <h2 className="mt-6 max-w-3xl text-xl font-semibold tracking-wider text-off_white/88 sm:text-2xl md:text-2xl">
            Where Elegance Becomes Heritage
          </h2>

          <div className="mt-6 max-w-2xl border-off_white/28 py-5">
            <p className="max-w-xl leading-relaxed text-off_white/80">
              A signature duplex township by Anondo Rosemont Estate Limited.
            </p>
          </div>

          <div className="mt-16 flex flex-col justify-start gap-4 sm:flex-row md:mt-24 max-w-2xl">
            <Link
              href="/the-estate"
              className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-off_white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-secondary shadow-rosemont transition duration-500 hover:text-off_white"
            >
              <span className="absolute inset-0 bg-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute -left-16 top-0 h-full w-10 skew-x-[-18deg] bg-off_white/35 transition-all duration-700 ease-out group-hover:left-[120%]" />
              <span className="relative z-10">Explore</span>
              <span className="relative z-10 block h-px w-12 origin-left scale-x-50 bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
            </Link>

            <Link
              href="/ROSEMONT BROCHURE.pdf"
              className="group relative inline-flex items-center justify-center gap-4 overflow-hidden border border-off_white/45 bg-secondary/28 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-off_white backdrop-blur-sm transition duration-500 hover:border-off_white/30"
            >
              <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute -left-20 top-0 h-full w-14 skew-x-[-18deg] bg-off_white/10 transition-all duration-700 ease-out group-hover:left-[120%]" />
              <span className="relative z-10">Brochure</span>
              <span className="relative z-10 h-px w-6 origin-left scale-x-75 bg-current transition-transform duration-700 ease-out group-hover:scale-x-125" />
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-8 z-20 custom-container mx-auto md:bottom-10">
        <div className="flex flex-wrap items-center justify-center gap-3 text-center text-sm font-medium text-off_white/85">
          <span className="h-2 w-2 bg-off_white" />
          <span>Ulukhola</span>
          <span className="h-px w-7 bg-off_white/40" />
          <span>South of Turag River</span>
          <span className="h-px w-7 bg-off_white/40" />
          <span>Near Purbachal New Town</span>
        </div>
      </div> */}
    </section>
  );
}
