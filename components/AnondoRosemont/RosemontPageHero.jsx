import Image from "next/image";
import { estateImage } from "@/data/rosemontSite";

export default function RosemontPageHero({
  eyebrow,
  title,
  copy,
  image = estateImage,
}) {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden bg-[#4a0a0a] pt-36 text-white md:min-h-[600px]">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-right"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(62,6,7,0.84)_0%,rgba(74,10,10,0.58)_46%,rgba(74,10,10,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,24,24,0.08)_0%,rgba(62,6,7,0.84)_100%)]" />

      <div className="custom-container relative z-10 mx-auto pb-16 md:pb-20">
        <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/82">
          <span className="h-px w-10 bg-current" />
          {eyebrow}
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold leading-[0.98] md:text-6xl lg:text-7xl">
          {title}
        </h1>

        {copy && (
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/76 md:text-lg">
            {copy}
          </p>
        )}
      </div>
    </section>
  );
}
