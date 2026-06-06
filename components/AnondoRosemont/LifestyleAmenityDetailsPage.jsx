import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

export default function LifestyleAmenityDetailsPage({
  amenity,
  otherAmenities,
}) {
  return (
    <>
      <section className="relative z-20 bg-[#f8f3ec] pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto -mt-12">
          <Link
            href="/lifestyle-amenities"
            className="mb-6 inline-flex items-center gap-3 bg-white px-5 py-3 text-xs font-extrabold uppercase tracking-[0.18em] text-secondary shadow-lg shadow-secondary/10 transition hover:bg-secondary hover:text-white"
          >
            <FiArrowLeft />
            Lifestyle Amenities
          </Link>

          <div className="mx-auto mb-10 max-w-7xl overflow-hidden border border-secondary/15 bg-white p-3 shadow-2xl shadow-secondary/12 md:p-5">
            <div className="relative aspect-[3/2] overflow-hidden bg-[#f8f3ec]">
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-contain object-center"
              />
              {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0)_0%,rgba(74,10,10,0.34)_100%)]" /> */}

              {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/60">
                  {amenity.eyebrow}
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                  {amenity.title}
                </h2>
              </div> */}
            </div>
          </div>

          <div className="grid overflow-hidden border border-secondary/15 bg-white shadow-2xl shadow-secondary/12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-secondary p-7 text-white md:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/58">
                Lifestyle Detail
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                {amenity.eyebrow}
              </h2>

              <p className="mt-6 leading-8 text-white/72">{amenity.detail}</p>

              <div className="mt-8 border-t border-white/15 pt-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                  Rosemont Estate Principle
                </p>
                <p className="mt-3 leading-8 text-white/76">
                  {amenity.principle}
                </p>
              </div>
            </div>

            <div className="p-7 md:p-10 lg:p-12">
              <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-secondary">
                <span className="h-px w-10 bg-current" />
                Key Highlights
              </p>

              <h3 className="max-w-2xl text-3xl font-semibold leading-tight text-secondary md:text-5xl">
                Planned for daily estate living.
              </h3>

              <ul className="mt-8 grid gap-4">
                {amenity.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 leading-7 text-[#6b5d57]"
                  >
                    <FiCheckCircle
                      className="mt-1 shrink-0 text-secondary"
                      size={19}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-4 bg-secondary px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#241818]"
              >
                Book Visit
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,24,24,0.12)_0%,rgba(36,24,24,0.72)_100%)]" />

        <div className="custom-container relative z-10 mx-auto">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                Explore More
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                More lifestyle spaces inside Rosemont.
              </h2>
            </div>

            <Link
              href="/lifestyle-amenities"
              className="group inline-flex w-fit items-center gap-4 bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-secondary transition duration-300 hover:bg-[#f8f3ec]"
            >
              All Amenities
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {otherAmenities.map((item) => (
              <Link
                key={item.slug}
                href={`/lifestyle-amenities/${item.slug}`}
                className="group flex flex-col overflow-hidden border border-white/15 bg-white/8 transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-secondary"
              >
                <div className="relative h-[210px] overflow-hidden bg-[#241818]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0.02)_0%,rgba(74,10,10,0.58)_100%)]" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/55 transition group-hover:text-secondary/55">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65 transition group-hover:text-[#6b5d57]">
                    {item.text}
                  </p>

                  <span className="mt-6 inline-flex w-fit items-center gap-3 border border-white/20 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition group-hover:border-secondary/20 group-hover:bg-secondary group-hover:text-white">
                    Explore Now
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
