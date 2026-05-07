"use client";

import Image from "next/image";

const villas = [
  {
    name: "The Classic",
    size: "5 Katha Duplex",
    image: "/5 katha villa/5-katha.jpg",
    specs: [
      "Total: 2,750 sft",
      "Ground: 1,350 sft",
      "First: 1,400 sft",
      "25 ft road frontage",
      "Landscaped lawn",
      "Elegant family design",
    ],
  },
  {
    name: "The Premium",
    size: "10 Katha Duplex",
    image: "/10 katha villa/10-katha.jpg",
    specs: [
      "Total: 4,500 sft",
      "40 ft avenue frontage",
      "Optional private swimming pool",
      "Expansive lawn & garden",
      "Executive facade",
    ],
  },
  {
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
      <div className="absolute inset-x-0 top-0 h-px bg-[#4a0a0a]/20" />
      <div className="absolute right-0 top-0 hidden h-full w-[28%] bg-[#4a0a0a] lg:block" />

      <div className="custom-container relative z-10 mx-auto">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-[#4a0a0a]" />
              Featured Villas
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
              Three Distinct Villa Experiences
            </h2>
          </div>

          <button className="group inline-flex w-fit items-center gap-4 border border-[#4a0a0a]/20 bg-white/60 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a] shadow-sm transition duration-300 hover:bg-[#4a0a0a] hover:text-white">
            View All
            <span className="h-px w-10 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-[transform,background-color] duration-700 ease-out group-hover:scale-x-100 group-hover:bg-white" />
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {villas.map((villa, index) => (
            <article
              key={villa.name}
              className="group overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/18"
            >
              <div className="relative h-[310px] overflow-hidden bg-[#4a0a0a]">
                <Image
                  src={villa.image}
                  alt={`${villa.name} ${villa.size}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.02)_0%,rgba(56,10,10,0.76)_100%)]" />

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
                <div className="mb-6 h-px w-20 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />

                <ul className="space-y-3">
                  {villa.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex gap-3 text-sm leading-6 text-[#5f4f4a] md:text-base"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-[#4a0a0a]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a]">
                  Explore Villa
                  <span className="h-px w-10 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// // import { villas } from "@/data/site";
// import { SectionIntro } from "./SectionIntro";
// import { villas } from "@/data/rosemontSite";

// export function FeaturedVillas() {
//   return (
//     <section className="bg-[#e9eee9] py-16 md:py-24 lg:py-32">
//       <div className="mx-auto max-w-[1180px] px-5">
//         <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
//           <SectionIntro
//             eyebrow="Featured Villas"
//             title="Three Distinct Villa Experiences"
//             copy="Each villa category is planned with land ownership, developer-built construction, landscaped outdoor space, and a refined estate character."
//           />

//           <Link
//             href="/villas-residences"
//             className="group inline-flex w-fit items-center gap-4 border border-[#4a0a0a]/20 bg-white/70 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#4a0a0a] hover:bg-[#4a0a0a] hover:text-white"
//           >
//             View All
//             <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
//           </Link>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-3">
//           {villas.map((villa, index) => (
//             <article
//               key={villa.name}
//               className="group overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="relative h-[310px] overflow-hidden bg-[#4a0a0a]">
//                 <Image
//                   src={villa.image}
//                   alt={`${villa.name} ${villa.category}`}
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 33vw"
//                   className="object-cover transition duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.02)_0%,rgba(56,10,10,0.78)_100%)]" />

//                 <p className="absolute left-6 top-6 z-10 text-xs font-extrabold uppercase tracking-[0.22em] text-white">
//                   {String(index + 1).padStart(2, "0")}
//                 </p>

//                 <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white">
//                   <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
//                     Villa Collection
//                   </p>
//                   <h3 className="text-3xl font-semibold leading-tight">
//                     {villa.name}
//                   </h3>
//                   <p className="mt-1 text-lg text-white/85">{villa.category}</p>
//                 </div>
//               </div>

//               <div className="p-7">
//                 <span className="mb-7 block h-px w-20 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 group-hover:scale-x-100" />
//                 <p className="leading-8 text-[#6b5d57]">{villa.intro}</p>

//                 <ul className="mt-6 grid gap-3">
//                   {villa.specs.map((spec) => (
//                     <li
//                       key={spec}
//                       className="flex gap-3 leading-7 text-[#6b5d57]"
//                     >
//                       <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#4a0a0a]" />
//                       <span>{spec}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Link
//                   href="/villas-residences"
//                   className="group/link mt-8 inline-flex items-center gap-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#4a0a0a]"
//                 >
//                   Explore Villa
//                   <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover/link:scale-x-100" />
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
