import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { lifestyleAmenities } from "@/data/lifestyleAmenities";

export function LifestyleAmenities() {
  return (
    <section className="bg-[#f8f3ec] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-secondary">
            <span className="h-px w-10 bg-secondary" />
            Lifestyle Amenities
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-secondary md:text-5xl">
            A Lifestyle Beyond Ordinary
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6b5d57] md:text-lg">
            Thoughtfully planned spaces for wellness, recreation, connection,
            and everyday estate living.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lifestyleAmenities.map((item, index) => (
            <Link
              key={item.slug}
              href={`/lifestyle-amenities/${item.slug}`}
              className="group block overflow-hidden border border-secondary/15 bg-white shadow-xl shadow-secondary/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/20"
              aria-label={`Explore ${item.title}`}
            >
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.78)_100%)]" />

                <div className="absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-bold text-white backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white">
                  <h3 className="text-2xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <p className="leading-8 text-[#6b5d57]">{item.text}</p>

                <span className="mt-7 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-secondary">
                  Explore Now
                  <span className="h-px w-10 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
