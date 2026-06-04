import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { residentialComponents } from "@/data/rosemontSite";
import { FiArrowLeft, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";

const villaPages = [
  {
    slug: "the-classic",
    name: "The Classic",
    size: "5 Katha Duplex",
    detailTitle: "5 Katha Villa Residences",
    image: "/5 katha villa/5-katha.jpg",
    intro:
      "An elegant duplex residence for families who want efficient land use, garden space, and a refined Rosemont address.",
  },
  {
    slug: "the-premium",
    name: "The Premium",
    size: "10 Katha Duplex",
    detailTitle: "10 Katha Villa Residences",
    image: "/10 katha villa/10-katha.jpg",
    detailImages: [
      "/10 katha villa/10-katha-detail-1.png",
      "/10 katha villa/10-katha-detail-2.png",
    ],
    intro:
      "A larger villa format with expanded landscape opportunity, avenue frontage, and optional private leisure planning.",
  },
  {
    slug: "the-estate",
    name: "The Estate",
    size: "20 Katha Villa",
    detailTitle: "20 Katha Signature Estates",
    image: "/20 katha villa/20-katha.jpg",
    intro:
      "Rosemont's most prestigious villa category, created for grand family living, gardens, driveway presence, and legacy value.",
  },
];

const getComponentByTitle = (title) =>
  residentialComponents.find((item) => item.title === title);

export async function getStaticPaths() {
  return {
    paths: villaPages.map((villa) => ({
      params: { slug: villa.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const villa = villaPages.find((item) => item.slug === params.slug);
  const details = getComponentByTitle(villa.detailTitle);
  const concept = getComponentByTitle("The Rosemont Villa Living Concept");
  const garage = getComponentByTitle("Garage and Private Driveway Facilities");
  const landscape = getComponentByTitle("Garden and Landscape Design");

  return {
    props: {
      villa,
      details,
      concept,
      garage,
      landscape,
      otherVillas: villaPages.filter((item) => item.slug !== villa.slug),
    },
  };
}

export default function VillaDetailsPage({
  villa,
  details,
  concept,
  garage,
  landscape,
  otherVillas,
}) {
  const metaTitle = `${villa.name} ${villa.size} | Anondo Rosemont Estate`;
  const metaDescription = `${villa.size} details at Anondo Rosemont Estate: ${details.text}`;
  const keyFacts = details.items.slice(0, 4);

  return (
    <main className="w-full overflow-hidden bg-[#f8f3ec] text-[#241818]">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <section className="relative min-h-[78vh] overflow-hidden bg-[#4a0a0a] text-white">
        <Image
          src={villa.image}
          alt={`${villa.name} ${villa.size}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,10,10,0.62)_0%,rgba(74,10,10,0.34)_44%,rgba(74,10,10,0.06)_100%)]" />

        <div className="custom-container relative z-10 mx-auto flex min-h-[78vh] items-end pb-16 pt-40 md:pb-20">
          <div className="max-w-4xl">
            <Link
              href="/villas-residences"
              className="mb-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              <FiArrowLeft />
              Villas & Residences
            </Link>

            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/72">
              <span className="h-px w-10 bg-current" />
              {villa.size}
            </p>

            <h1 className="text-4xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              {villa.name}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {villa.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-20 bg-[#f8f3ec] pb-16 md:pb-24">
        <div className="custom-container mx-auto -mt-12">
          <div className="grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/12 md:grid-cols-4">
            {keyFacts.map((fact) => {
              const [label, value] = fact.includes(":")
                ? fact.split(/:(.*)/).filter(Boolean)
                : [fact, ""];

              return (
                <div
                  key={fact}
                  className="border-b border-[#4a0a0a]/12 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4a0a0a]/45">
                    {label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#4a0a0a]">
                    {value || "Included"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f3ec] pb-16 md:pb-24 lg:pb-32">
        <div className="custom-container mx-auto grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-[#4a0a0a]/15 bg-white p-7 shadow-xl shadow-[#4a0a0a]/8 md:p-10">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Villa Details
            </p>

            <h2 className="text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
              {details.title}
            </h2>

            <p className="mt-6 leading-8 text-[#6b5d57]">{details.text}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {details.items.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#6b5d57]">
                  <FiCheckCircle
                    className="mt-1 shrink-0 text-[#4a0a0a]"
                    size={18}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6">
            {[concept, garage, landscape].map((item) => {
              const shouldShowItems =
                item.title === "Garage and Private Driveway Facilities" ||
                item.title === "Garden and Landscape Design";

              return (
                <article
                  key={item.title}
                  className="border border-[#4a0a0a]/15 bg-white/80 p-7 transition duration-500 hover:-translate-y-1 hover:bg-white md:p-8"
                >
                  <h3 className="text-2xl font-semibold leading-tight text-[#4a0a0a]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#6b5d57]">{item.text}</p>

                  {shouldShowItems && (
                    <ul className="mt-6 grid gap-3">
                      {item.items.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-7 text-[#6b5d57] md:text-base"
                        >
                          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a0a0a]/8 text-[#4a0a0a]">
                            <FiCheckCircle size={15} />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {villa.detailImages?.length > 0 && (
        <section className="bg-[#f8f3ec] pb-16 md:pb-24 lg:pb-32">
          <div className="custom-container mx-auto">
            <div className="mb-10 border-b border-[#4a0a0a]/15 pb-8">
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
                <span className="h-px w-10 bg-current" />
                Villa Plans
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
                10 Katha luxury villa layout and setback details.
              </h2>
            </div>

            <div className="grid gap-8">
              {villa.detailImages.map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden border border-[#4a0a0a]/15 bg-white p-3 shadow-2xl shadow-[#4a0a0a]/10 md:p-5"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-[#4a0a0a]/5">
                    <Image
                      src={image}
                      alt={`${villa.name} ${villa.size} plan detail ${
                        index + 1
                      }`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#4a0a0a] py-16 text-white md:py-24">
        <div className="custom-container mx-auto">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                Explore More
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
                Compare other Rosemont villa categories.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-4 bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#4a0a0a] transition duration-300 hover:bg-[#f8f3ec]"
            >
              Book Visit
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {otherVillas.map((item) => (
              <Link
                key={item.slug}
                href={`/villas-residences/${item.slug}`}
                className="group overflow-hidden border border-white/15 bg-white/8 transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-[#4a0a0a]"
              >
                <div className="relative h-[260px] overflow-hidden bg-[#241818]">
                  <Image
                    src={item.image}
                    alt={`${item.name} ${item.size}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,10,10,0.02)_0%,rgba(74,10,10,0.55)_100%)]" />
                </div>

                <div className="p-7">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/55 transition group-hover:text-[#4a0a0a]/55">
                    {item.size}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{item.name}</h3>
                  <p className="mt-4 leading-7 text-white/65 transition group-hover:text-[#6b5d57]">
                    {item.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
