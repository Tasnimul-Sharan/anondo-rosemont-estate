import { estateImage, heroStats } from "@/data/rosemontSite";
import Image from "next/image";
import Link from "next/link";
// import { estateImage, heroStats } from "@/data/site";

export function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-[#4a0a0a] text-white">
      <Image
        src={estateImage}
        alt="Anondo Rosemont Estate luxury villa"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.64)_0%,rgba(56,10,10,0.42)_38%,rgba(56,10,10,0.16)_72%,rgba(56,10,10,0.06)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.08)_0%,rgba(56,10,10,0.01)_42%,rgba(56,10,10,0.58)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-[1180px] items-center px-5 pb-44 pt-24">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em]">
            <span className="h-px w-10 bg-current" />
            Anondo Rosemont Estate
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] md:text-7xl lg:text-8xl">
            Where Elegance Becomes Heritage
          </h1>

          <p className="mt-6 max-w-3xl text-xl font-medium leading-snug text-white/90 md:text-3xl">
            A European-inspired duplex villa estate in Ulukhola near Purbachal
            New Town.
          </p>

          <div className="mt-7 max-w-2xl border-l border-white/45 pl-5 leading-8 text-white/78">
            <strong>Elegantia in Aeternum</strong>
            <br />
            Elegance Forever, planned for generations.
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {[
              { label: "Explore The Estate", href: "/the-estate", light: true },
              { label: "View Master Plan", href: "/master-plan" },
              { label: "Book Appointment", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group inline-flex items-center justify-center gap-4 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] shadow-2xl shadow-black/25 transition ${
                  item.light
                    ? "bg-white text-[#4a0a0a] hover:bg-[#4a0a0a] hover:text-white"
                    : "bg-[#4a0a0a] text-white hover:bg-white hover:text-[#4a0a0a]"
                }`}
              >
                {item.label}
                <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="grid border border-white/15 bg-[#4a0a0a]/82 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="min-h-[105px] border-b border-white/15 p-5 sm:border-r lg:border-b-0"
              >
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
