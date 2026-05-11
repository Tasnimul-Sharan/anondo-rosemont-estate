// "use client";

// import Image from "next/image";

// const estateHighlights = [
//   { value: "807", label: "Bigha Estate" },
//   { value: "60 ft", label: "Grand Avenue" },
//   { value: "Villa", label: "Only Township" },
// ];

// export default function HeroLuxury() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-secondary text-off_white">
//       <Image
//         src="/10 katha villa/MAHI Final.jpeg"
//         alt="Anondo Rosemont Estate luxury villa"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       {/* Brand Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(62,6,7,0.84)_0%,rgba(74,10,10,0.64)_38%,rgba(90,12,12,0.28)_70%,rgba(114,18,19,0.08)_100%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,24,24,0.12)_0%,rgba(36,24,24,0.03)_42%,rgba(62,6,7,0.84)_100%)]" />

//       <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
//         <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-end">
//           <div className="max-w-4xl">
//             <p className="mb-5 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-off_white/80 sm:text-sm">
//               <span className="h-px w-12 bg-off_white/70" />
//               Where Elegance Becomes Heritage
//             </p>

//             <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-off_white sm:text-5xl md:text-6xl lg:text-7xl">
//               Anondo
//               <span className="text-off_white/85"> Rosemont Estate</span>
//             </h1>

//             <h2 className="mt-7 max-w-3xl text-3xl font-light leading-[1.12] text-off_white/92 sm:text-4xl md:text-5xl lg:text-6xl">
//               Where the Hills Whisper and Roses Welcome You Home
//             </h2>

//             <div className="mt-8 max-w-2xl border-l border-off_white/35 pl-5">
//               <p className="text-base italic leading-relaxed text-off_white md:text-lg">
//                 Elegantia in Aeternum — Elegance Forever
//               </p>

//               <p className="mt-3 leading-relaxed text-off_white/72">
//                 A signature duplex township by Anondo Rosemont Estate under
//                 Anondo CityScappers Ltd.
//               </p>
//             </div>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-off_white/74 md:text-lg">
//               Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//               township redefining structured luxury living in Bangladesh. A
//               disciplined, architect-controlled community where villas meet
//               vision.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-off_white/82">
//               <span className="h-2 w-2 bg-off_white" />
//               <span>Ulukhola</span>
//               <span className="h-px w-7 bg-off_white/35" />
//               <span>South of Turag River</span>
//               <span className="h-px w-7 bg-off_white/35" />
//               <span>Near Purbachal New Town</span>
//             </div>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-off_white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-secondary shadow-rosemont transition duration-500 hover:text-off_white">
//                 <span className="absolute inset-0 bg-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                 <span className="absolute -left-16 top-0 h-full w-10 skew-x-[-18deg] bg-off_white/35 transition-all duration-700 ease-out group-hover:left-[120%]" />

//                 <span className="relative z-10">Explore Rosemont Estate</span>

//                 <span className="relative z-10 block h-px w-12 origin-left scale-x-50 bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//               </button>

//               <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden border border-off_white/35 bg-secondary/45 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-off_white backdrop-blur-md transition duration-500 hover:border-off_white/70">
//                 <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                 <span className="absolute -left-20 top-0 h-full w-14 skew-x-[-18deg] bg-off_white/10 transition-all duration-700 ease-out group-hover:left-[120%]" />

//                 <span className="relative z-10">Download Brochure</span>

//                 <span className="relative z-10 h-px w-6 origin-left scale-x-75 bg-current transition-transform duration-700 ease-out group-hover:scale-x-125" />
//               </button>
//             </div>
//           </div>

//           <div className="hidden border border-off_white/16 bg-secondary/55 p-5 shadow-rosemont backdrop-blur-xl lg:block">
//             <div className="border border-off_white/18 p-6">
//               <p className="text-xs font-semibold uppercase tracking-[0.28em] text-off_white/62">
//                 Estate Signature
//               </p>

//               <p className="mt-4 text-xl font-light leading-snug text-off_white/90">
//                 Architect-controlled villas, landscaped avenues, and a legacy
//                 community planned for generations.
//               </p>

//               <div className="mt-6 h-px w-16 bg-off_white/60" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-x-0 bottom-0 z-20">
//         <div className="custom-container mx-auto">
//           <div className="grid border border-off_white/14 bg-secondary/86 backdrop-blur-xl sm:grid-cols-3">
//             {estateHighlights.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex min-h-[100px] items-center justify-between gap-5 border-b border-off_white/12 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
//               >
//                 <div>
//                   <p className="text-3xl font-semibold text-off_white md:text-4xl">
//                     {item.value}
//                   </p>

//                   <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-off_white/70">
//                     {item.label}
//                   </p>
//                 </div>

//                 <span className="h-px w-10 bg-off_white/50" />
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

const estateHighlights = [
  { value: "807", label: "Bigha Estate" },
  { value: "60 ft", label: "Grand Avenue" },
  { value: "Villa", label: "Only Township" },
];

export default function HeroLuxury() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-secondary text-off_white">
      <Image
        src="/10 katha villa/MAHI Final.jpeg"
        alt="Anondo Rosemont Estate luxury villa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(62,6,7,0.84)_0%,rgba(74,10,10,0.64)_38%,rgba(90,12,12,0.28)_70%,rgba(114,18,19,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,24,24,0.12)_0%,rgba(36,24,24,0.03)_42%,rgba(62,6,7,0.84)_100%)]" />

      <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-48 pt-[190px] md:pb-48 lg:pt-[210px]">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-off_white/80 sm:text-sm">
              <span className="h-px w-12 bg-off_white/70" />
              Where Elegance Becomes Heritage
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-off_white sm:text-5xl md:text-6xl lg:text-7xl">
              Anondo
              <span className="text-off_white/85"> Rosemont Estate</span>
            </h1>

            {/* <h2 className="mt-7 max-w-3xl text-3xl font-medium leading-[1.12] text-off_white/92 sm:text-4xl md:text-5xl">
              Where the Hills Whisper and Roses Welcome You Home
            </h2> */}

            <h2 className="mt-7 max-w-3xl text-3xl font-normal leading-[1.12] text-off_white/90 sm:text-4xl md:text-5xl">
              Where the Hills Whisper and Roses Welcome You Home
            </h2>

            <div className="mt-8 max-w-2xl border-l border-off_white/35 pl-5">
              <p className="text-base italic leading-relaxed text-off_white md:text-lg">
                Elegantia in Aeternum — Elegance Forever
              </p>

              <p className="mt-3 leading-relaxed text-off_white/72">
                A signature duplex township by Anondo Rosemont Estate under
                Anondo CityScappers Ltd.
              </p>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-8 text-off_white/74 md:text-lg">
              Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
              township redefining structured luxury living in Bangladesh. A
              disciplined, architect-controlled community where villas meet
              vision.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-off_white/82">
              <span className="h-2 w-2 bg-off_white" />
              <span>Ulukhola</span>
              <span className="h-px w-7 bg-off_white/35" />
              <span>South of Turag River</span>
              <span className="h-px w-7 bg-off_white/35" />
              <span>Near Purbachal New Town</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-off_white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-secondary shadow-rosemont transition duration-500 hover:text-off_white">
                <span className="absolute inset-0 bg-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute -left-16 top-0 h-full w-10 skew-x-[-18deg] bg-off_white/35 transition-all duration-700 ease-out group-hover:left-[120%]" />
                <span className="relative z-10">Explore Rosemont Estate</span>
                <span className="relative z-10 block h-px w-12 origin-left scale-x-50 bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </button>

              <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden border border-off_white/35 bg-secondary/45 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-off_white backdrop-blur-md transition duration-500 hover:border-off_white/70">
                <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute -left-20 top-0 h-full w-14 skew-x-[-18deg] bg-off_white/10 transition-all duration-700 ease-out group-hover:left-[120%]" />
                <span className="relative z-10">Download Brochure</span>
                <span className="relative z-10 h-px w-6 origin-left scale-x-75 bg-current transition-transform duration-700 ease-out group-hover:scale-x-125" />
              </button>
            </div>
          </div>

          <div className="hidden border border-off_white/16 bg-secondary/55 p-5 shadow-rosemont backdrop-blur-xl lg:block">
            <div className="border border-off_white/18 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-off_white/62">
                Estate Signature
              </p>

              <p className="mt-4 text-xl font-light leading-snug text-off_white/90">
                Architect-controlled villas, landscaped avenues, and a legacy
                community planned for generations.
              </p>

              <div className="mt-6 h-px w-16 bg-off_white/60" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="custom-container mx-auto">
          <div className="grid border border-off_white/14 bg-secondary/86 backdrop-blur-xl sm:grid-cols-3">
            {estateHighlights.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[100px] items-center justify-between gap-5 border-b border-off_white/12 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
              >
                <div>
                  <p className="text-3xl font-semibold text-off_white md:text-4xl">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-off_white/70">
                    {item.label}
                  </p>
                </div>

                <span className="h-px w-10 bg-off_white/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
