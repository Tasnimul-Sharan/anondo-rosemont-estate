import Image from "next/image";
import { estateImage } from "@/data/site";

export function PageHero({ eyebrow, title, copy, image = estateImage }) {
  return (
    <section className="relative grid min-h-[430px] items-end overflow-hidden bg-[#4a0a0a] text-white">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.80)_0%,rgba(56,10,10,0.44)_48%,rgba(56,10,10,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.05)_0%,rgba(56,10,10,0.82)_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 py-20">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white">
          <span className="h-px w-10 bg-current" />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/76 md:text-lg">
          {copy}
        </p>
      </div>
    </section>
  );
}
