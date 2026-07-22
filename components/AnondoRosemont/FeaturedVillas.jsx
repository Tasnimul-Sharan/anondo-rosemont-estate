"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const villas = [
  {
    slug: "the-classic",
    name: "The Classic",
    size: "5 Katha Duplex",
    image: "/5 katha villa/5-katha.jpg",
    specs: [
      "Total: 3,600 sft",
      "Ground: 1,350 sft",
      "First: 1,400 sft",
      // "25 ft road frontage",
      "Landscaped lawn",
      "Elegant family design",
    ],
  },
  {
    slug: "the-premium",
    name: "The Premium",
    size: "10 Katha Duplex",
    image: "/10 katha villa/10-katha.jpg",
    specs: [
      "Total: 5,000 sft",
      "40 ft avenue frontage",
      "Optional private swimming pool",
      "Expansive lawn & garden",
      "Executive facade",
    ],
  },
  {
    slug: "the-estate",
    name: "The Estate",
    size: "20 Katha Villa",
    image: "/20 katha villa/20-katha.jpg",
    specs: [
      "Total: 7,200 sft",
      "Triplex option available",
      "Grand driveway",
      "Private pool option",
      "Only 90 exclusive estate plots",
    ],
  },
];

export default function FeaturedVillas() {
  return (
    <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-secondary/20" />

      <div className="custom-container relative z-10 mx-auto">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              <span className="h-px w-10 bg-secondary" />
              Featured Villas
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-secondary md:text-5xl">
              Three Distinct Villa Experiences
            </h2>

            <p className="mt-5 max-w-xl text-base italic leading-7 text-[#6b5d57] md:text-lg">
              Elegantia in Aeternum – Elegance Forever
            </p>
          </div>

          {/* <Link
            href="/villas-residences"
            className="group inline-flex w-fit items-center gap-4 border border-secondary/20 bg-white/60 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-secondary shadow-sm transition duration-300 hover:bg-secondary hover:text-white"
          >
            View All
            <span className="h-px w-10 origin-left scale-x-[0.35] bg-secondary transition-[transform,background-color] duration-700 ease-out group-hover:scale-x-100 group-hover:bg-white" />
          </Link> */}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {villas.map((villa, index) => (
            <Link
              href={`/villas-residences/${villa.slug}`}
              id={`${villa.slug}-card`}
              key={villa.name}
              className="group block overflow-hidden border border-secondary/15 bg-white shadow-xl shadow-secondary/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/18"
              aria-label={`Explore ${villa.name} ${villa.size}`}
            >
              <div className="relative h-[310px] overflow-hidden bg-secondary">
                <Image
                  src={villa.image}
                  alt={`${villa.name} ${villa.size}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.02)_0%,rgba(56,10,10,0.76)_100%)]" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-semibold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    Villa Collection
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {villa.name}
                  </h3>

                  <p className="mt-1 text-lg font-medium text-white/70">
                    {villa.size}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="mb-6 h-px w-20 origin-left scale-x-[0.35] bg-secondary transition-transform duration-700 ease-out group-hover:scale-x-100" />

                <ul className="space-y-3">
                  {villa.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex gap-3 text-sm leading-6 text-[#5f4f4a] md:text-base"
                    >
                      <FiCheckCircle
                        className="mt-1 shrink-0 text-secondary"
                        size={18}
                      />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-8 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-secondary">
                  Explore Villa
                  <span className="h-px w-10 origin-left scale-x-[0.35] bg-secondary transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
