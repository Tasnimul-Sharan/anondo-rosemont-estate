// "use client";

// import Image from "next/image";

// const stats = [
//   {
//     value: "807",
//     unit: "Bigha",
//     label: "A fully structured duplex township",
//   },
//   {
//     value: "90",
//     unit: "Estate Plots",
//     label: "Limited 20 katha legacy villas",
//   },
//   {
//     value: "2035",
//     unit: "Vision",
//     label: "Phased development completion",
//   },
//   {
//     value: "100%",
//     unit: "Controlled",
//     label: "Architect-led construction guidelines",
//   },
// ];

// export default function MasterplanHighlight() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#111816]">
//       <div className="absolute inset-0">
//         <Image
//           src="/10 katha villa/MAHI Final.jpeg"
//           alt="Anondo Rosemont villa estate"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-[#08110e]/65" />
//         <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,14,0.94)_0%,rgba(8,17,14,0.68)_42%,rgba(8,17,14,0.28)_100%)]" />
//         <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#111816] to-transparent" />
//       </div>

//       <div className="relative z-10 custom-container mx-auto py-16 md:py-24 lg:py-32">
//         <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
//           <div className="relative overflow-hidden border border-white/15 bg-[#f8f3ec]/95 p-7 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-10 md:p-14">
//             <div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-[#b99055]/30" />

//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#9a7138]">
//               <span className="h-px w-10 bg-[#b99055]" />
//               Build Your Dream
//             </p>

//             <h2 className="mb-6 max-w-xl text-3xl font-bold leading-tight text-[#151a18] md:text-5xl">
//               A Landmark Villa Township in the Making
//             </h2>

//             <p className="mb-5 max-w-2xl leading-relaxed text-[#5f625c]">
//               Anondo Rosemont Estate is more than a residential development - it
//               is a carefully structured vision of elevated living. Designed
//               exclusively for duplex villas, this master-planned township blends
//               architectural discipline with natural serenity.
//             </p>

//             <p className="mb-5 max-w-2xl leading-relaxed text-[#5f625c]">
//               Spanning 807 bigha, the estate integrates wide boulevards,
//               landscaped green zones, controlled construction guidelines, and a
//               signature lakefront - creating a refined community where design
//               meets dignity.
//             </p>

//             <p className="mb-8 max-w-2xl leading-relaxed text-[#5f625c]">
//               Every plot, every road, and every detail reflects long-term
//               planning and uncompromised standards.
//             </p>

//             <button className="group inline-flex items-center gap-3 bg-[#15221d] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#9a7138]">
//               Explore The Masterplan
//               <span className="h-px w-9 bg-white/80 transition group-hover:w-12" />
//             </button>
//           </div>

//           <div className="grid overflow-hidden border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-2">
//             {stats.map((item) => (
//               <div
//                 key={item.label}
//                 className="group relative min-h-[190px] border-b border-white/15 p-7 transition duration-300 hover:bg-white/10 sm:border-r md:p-10"
//               >
//                 <div className="mb-8 h-px w-12 bg-[#c8a46e] transition duration-300 group-hover:w-20" />
//                 <h3 className="mb-3 text-4xl font-bold tracking-normal text-white md:text-5xl">
//                   {item.value}
//                 </h3>
//                 <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d7b985]">
//                   {item.unit}
//                 </p>
//                 <p className="mt-4 max-w-[16rem] leading-relaxed text-white/75">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const stats = [
  {
    value: "807",
    unit: "Bigha",
    label: "A fully structured duplex township",
  },
  {
    value: "90",
    unit: "Estate Plots",
    label: "Limited 20 katha legacy villas",
  },
  {
    value: "2035",
    unit: "Vision",
    label: "Phased development completion",
  },
  {
    value: "100%",
    unit: "Controlled",
    label: "Architect-led construction guidelines",
  },
];

export default function MasterplanHighlight() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4a0a0a]">
      <div className="absolute inset-0">
        <Image
          src="/10 katha villa/MAHI Final.jpeg"
          alt="Anondo Rosemont villa estate"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#4a0a0a]/50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.78)_0%,rgba(56,10,10,0.52)_42%,rgba(56,10,10,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#4a0a0a] to-transparent" />
      </div>

      <div className="relative z-10 custom-container mx-auto py-16 md:py-24 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative overflow-hidden border border-white/15 bg-[#f8f3ec]/95 p-7 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-10 md:p-14">
            <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[#4a0a0a]/25" />

            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-[#4a0a0a]" />
              Build Your Dream
            </p>

            <h2 className="mb-6 max-w-xl text-3xl font-bold leading-tight text-[#4a0a0a] md:text-5xl">
              A Landmark Villa Township in the Making
            </h2>

            <p className="mb-5 max-w-2xl leading-relaxed text-[#5f625c]">
              Anondo Rosemont Estate is more than a residential development - it
              is a carefully structured vision of elevated living. Designed
              exclusively for duplex villas, this master-planned township blends
              architectural discipline with natural serenity.
            </p>

            <p className="mb-5 max-w-2xl leading-relaxed text-[#5f625c]">
              Spanning 807 bigha, the estate integrates wide boulevards,
              landscaped green zones, controlled construction guidelines, and a
              signature lakefront - creating a refined community where design
              meets dignity.
            </p>

            <p className="mb-8 max-w-2xl leading-relaxed text-[#5f625c]">
              Every plot, every road, and every detail reflects long-term
              planning and uncompromised standards.
            </p>

            <button className="group inline-flex items-center gap-3 bg-[#4a0a0a] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white hover:text-[#4a0a0a]">
              Explore The Masterplan
              <span className="h-px w-12 origin-left scale-x-[0.35] bg-white transition-[transform,background-color] duration-700 ease-out group-hover:scale-x-100 group-hover:bg-[#4a0a0a]" />
            </button>
          </div>

          <div className="grid overflow-hidden border border-white/15 bg-[#4a0a0a]/45 backdrop-blur-md sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group relative min-h-[190px] border-b border-white/15 p-7 transition duration-300 hover:bg-white/10 sm:border-r md:p-10"
              >
                <div className="mb-8 h-px w-20 origin-left scale-x-[0.35] bg-white/70 transition-transform duration-700 ease-out group-hover:scale-x-100" />

                <h3 className="mb-3 text-4xl font-bold tracking-normal text-white md:text-5xl">
                  {item.value}
                </h3>

                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
                  {item.unit}
                </p>

                <p className="mt-4 max-w-[16rem] leading-relaxed text-white/75">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
