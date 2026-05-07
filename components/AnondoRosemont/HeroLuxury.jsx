// "use client";

// export default function HeroLuxury() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
//         alt="Luxury Villa"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Light Overlay (IMPORTANT: not dark) */}
//       <div className="absolute inset-0 bg-white/40 backdrop-brightness-90" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 h-full flex items-center">
//         <div className="max-w-2xl">
//           {/* Small Top Text */}
//           <p className="text-sm text-gray-700 mb-4">Anondo Rosemont Estate</p>

//           {/* Main Heading (blue stroke effect) */}
//           <h1 className="text-4xl md:text-6xl font-bold text-transparent stroke-text mb-4">
//             Where Elegance Becomes Heritage
//           </h1>

//           {/* Sub Heading */}
//           <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
//             Where the Hills Whisper and Roses Welcome You Home
//           </h2>

//           {/* Tagline */}
//           <p className="text-gray-700 mb-2 italic">
//             Elegantia in Aeternum — Elegance Forever
//           </p>

//           <p className="text-gray-700 mb-6">
//             A Signature Duplex Township by Anondo Rosemont Estate under Anondo
//             CityScappers Ltd.
//           </p>

//           {/* Description */}
//           <p className="text-gray-800 mb-6 leading-relaxed">
//             Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//             township redefining structured luxury living in Bangladesh. A
//             disciplined, architect-controlled community where villas meet
//             vision.
//           </p>

//           {/* Location */}
//           <p className="text-gray-700 mb-8 flex items-center gap-2">
//             <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
//             Ulukhola | South of Turag River | Near Purbachal New Town
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <button className="bg-[#1f4f78] text-white px-6 py-3 rounded-md font-medium">
//               Explore Rosemont Estate
//             </button>

//             <button className="border border-white text-white px-6 py-3 rounded-md backdrop-blur-sm bg-white/20">
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Custom CSS for stroke */}
//       <style jsx>{`
//         .stroke-text {
//           -webkit-text-stroke: 1px #1f4f78;
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// const estateHighlights = [
//   { value: "807", label: "Bigha Estate" },
//   { value: "60 ft", label: "Grand Avenue" },
//   { value: "Villa", label: "Only Township" },
// ];

// export default function HeroLuxury() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#4a0a0a] text-white">
//       <Image
//         src="/10 katha villa/MAHI Final.jpeg"
//         alt="Anondo Rosemont Estate luxury villa"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.76)_0%,rgba(56,10,10,0.50)_38%,rgba(56,10,10,0.18)_72%,rgba(56,10,10,0.06)_100%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.10)_0%,rgba(56,10,10,0.02)_42%,rgba(56,10,10,0.78)_100%)]" />

//       <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
//         <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.66fr] lg:items-end">
//           <div className="max-w-3xl">
//             <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d9bd87]">
//               <span className="h-px w-10 bg-[#d9bd87]" />
//               Anondo Rosemont Estate
//             </p>

//             <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Where Elegance Becomes Heritage
//             </h1>

//             <h2 className="mt-6 max-w-2xl text-xl font-medium leading-snug text-[#f5ead7] md:text-3xl">
//               Where the Hills Whisper and Roses Welcome You Home
//             </h2>

//             <div className="mt-7 max-w-2xl border-l border-[#d8b779]/70 pl-5">
//               <p className="text-base italic leading-relaxed text-[#ead2a8] md:text-lg">
//                 Elegantia in Aeternum - Elegance Forever
//               </p>
//               <p className="mt-3 leading-relaxed text-white/78">
//                 A signature duplex township by Anondo Rosemont Estate under
//                 Anondo CityScappers Ltd.
//               </p>
//             </div>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
//               Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//               township redefining structured luxury living in Bangladesh. A
//               disciplined, architect-controlled community where villas meet
//               vision.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/82">
//               <span className="h-2 w-2 bg-[#d9bd87]" />
//               <span>Ulukhola</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>South of Turag River</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>Near Purbachal New Town</span>
//             </div>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <button className="group inline-flex items-center justify-center gap-4 bg-[#d8b779] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a] shadow-2xl shadow-black/25 transition duration-300 hover:bg-white">
//                 Explore Rosemont Estate
//                 <span className="h-px w-9 bg-[#4a0a0a] transition duration-300 group-hover:w-12" />
//               </button>

//               <button className="inline-flex items-center justify-center border border-white/35 bg-[#4a0a0a]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-300 hover:border-[#d9bd87] hover:bg-[#d9bd87]/15">
//                 Download Brochure
//               </button>
//             </div>
//           </div>

//           <div className="hidden border border-white/16 bg-[#4a0a0a]/45 p-5 shadow-2xl shadow-black/25 backdrop-blur-md lg:block">
//             <div className="border border-[#d9bd87]/35 p-6">
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9bd87]">
//                 Estate Signature
//               </p>
//               <p className="mt-4 text-xl font-medium leading-snug text-white/92">
//                 Architect-controlled villas, landscaped avenues, and a legacy
//                 community planned for generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-x-0 bottom-0 z-20">
//         <div className="custom-container mx-auto">
//           <div className="grid border border-white/15 bg-[#4a0a0a]/76 backdrop-blur-md sm:grid-cols-3">
//             {estateHighlights.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex min-h-[96px] items-center justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
//               >
//                 <div>
//                   <p className="text-3xl font-semibold text-white md:text-4xl">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd87]">
//                     {item.label}
//                   </p>
//                 </div>
//                 <span className="h-px w-10 bg-[#d9bd87]/70" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// const estateHighlights = [
//   { value: "807", label: "Bigha Estate" },
//   { value: "60 ft", label: "Grand Avenue" },
//   { value: "Villa", label: "Only Township" },
// ];

// export default function HeroLuxury() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#4a0a0a] text-white">
//       <Image
//         src="/10 katha villa/MAHI Final.jpeg"
//         alt="Anondo Rosemont Estate luxury villa"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,10,10,0.58)_0%,rgba(56,10,10,0.36)_38%,rgba(56,10,10,0.14)_72%,rgba(56,10,10,0.04)_100%)]" />
//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.07)_0%,rgba(56,10,10,0.01)_42%,rgba(56,10,10,0.54)_100%)]" />

//       <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
//         <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.66fr] lg:items-end">
//           <div className="max-w-3xl">
//             <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/82">
//               <span className="h-px w-10 bg-off_white" />
//               Anondo Rosemont Estate
//             </p>

//             <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
//               Where Elegance Becomes Heritage
//             </h1>

//             <h2 className="mt-6 max-w-2xl text-xl font-medium leading-snug text-white md:text-3xl">
//               Where the Hills Whisper and Roses Welcome You Home
//             </h2>

//             <div className="mt-7 max-w-2xl border-l border-[#4a0a0a]/70 pl-5">
//               <p className="text-base italic leading-relaxed text-white md:text-lg">
//                 Elegantia in Aeternum - Elegance Forever
//               </p>
//               <p className="mt-3 leading-relaxed text-white/78">
//                 A signature duplex township by Anondo Rosemont Estate under
//                 Anondo CityScappers Ltd.
//               </p>
//             </div>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
//               Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//               township redefining structured luxury living in Bangladesh. A
//               disciplined, architect-controlled community where villas meet
//               vision.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/82">
//               <span className="h-2 w-2 bg-[#4a0a0a]" />
//               <span>Ulukhola</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>South of Turag River</span>
//               <span className="h-px w-7 bg-white/30" />
//               <span>Near Purbachal New Town</span>
//             </div>

//             <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//               <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-[#4a0a0a] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-2xl shadow-black/25 transition duration-300 hover:bg-white hover:text-[#4a0a0a]">
//                 <span className="relative z-10">Explore Rosemont Estate</span>

//                 <span className="relative z-10 block h-px w-12 origin-left scale-x-50 bg-white transition-[transform,background-color] delay-100 duration-700 ease-out group-hover:scale-x-100 group-hover:bg-[#4a0a0a]" />
//               </button>

//               <button className="inline-flex items-center justify-center border border-white/35 bg-[#4a0a0a]/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-300 hover:border-[#4a0a0a] hover:bg-[#4a0a0a]/55">
//                 Download Brochure
//               </button>
//             </div>
//           </div>

//           <div className="hidden border border-white/16 bg-[#4a0a0a]/45 p-5 shadow-2xl shadow-black/25 backdrop-blur-md lg:block">
//             <div className="border border-[#4a0a0a]/35 p-6">
//               <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
//                 Estate Signature
//               </p>
//               <p className="mt-4 text-xl font-medium leading-snug text-white/92">
//                 Architect-controlled villas, landscaped avenues, and a legacy
//                 community planned for generations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-x-0 bottom-0 z-20">
//         <div className="custom-container mx-auto">
//           <div className="grid border border-white/15 bg-[#4a0a0a]/76 backdrop-blur-md sm:grid-cols-3">
//             {estateHighlights.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex min-h-[96px] items-center justify-between gap-5 border-b border-white/15 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
//               >
//                 <div>
//                   <p className="text-3xl font-semibold text-white md:text-4xl">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/82">
//                     {item.label}
//                   </p>
//                 </div>
//                 <span className="h-px w-10 bg-white/50" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// const estateHighlights = [
//   { value: "807", label: "Bigha Estate" },
//   { value: "60 ft", label: "Grand Avenue" },
//   { value: "Villa", label: "Only Township" },
// ];

// export default function HeroLuxury() {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#3b0707] text-white">
//       <Image
//         src="/10 katha villa/MAHI Final.jpeg"
//         alt="Anondo Rosemont Estate luxury villa"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       {/* Premium Overlay */}
// <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,5,5,0.78)_0%,rgba(58,10,10,0.58)_38%,rgba(58,10,10,0.22)_70%,rgba(58,10,10,0.06)_100%)]" />
// <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,3,3,0.10)_0%,rgba(20,3,3,0.02)_42%,rgba(40,5,5,0.76)_100%)]" />

//       {/* Soft Luxury Glow */}
//       <div className="absolute left-[-120px] top-[18%] h-[360px] w-[360px] rounded-full bg-[#c9a45c]/20 blur-[120px]" />

//       <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
//         <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.62fr] lg:items-end">
//           <div className="max-w-4xl">
//             {/* Small Premium Eyebrow */}
//             <p className="mb-5 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.34em] text-[#e8c77b] sm:text-sm">
//               <span className="h-px w-12 bg-[#e8c77b]" />
//               Where Elegance Becomes Heritage
//             </p>

//             {/* Main Brand Title */}
//             <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-3xl md:text-5xl lg:text-6xl">
//               Anondo
//               <span className="text-[#4a0a0a]"> Rosemont Estate</span>
//             </h1>

//             {/* Big Emotional Tagline */}
//             <h2 className="mt-7 max-w-3xl text-3xl font-light leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
//               Where the Hills Whisper and Roses Welcome You Home
//             </h2>

//             <div className="mt-8 max-w-2xl border-l border-[#e8c77b]/55 pl-5">
//               <p className="text-base italic leading-relaxed text-[#f4dfaa] md:text-lg">
//                 Elegantia in Aeternum — Elegance Forever
//               </p>
//               <p className="mt-3 leading-relaxed text-white/78">
//                 A signature duplex township by Anondo Rosemont Estate under
//                 Anondo CityScappers Ltd.
//               </p>
//             </div>

//             <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
//               Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
//               township redefining structured luxury living in Bangladesh. A
//               disciplined, architect-controlled community where villas meet
//               vision.
//             </p>

//             <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/84">
//               <span className="h-2 w-2 rounded-full bg-[#e8c77b]" />
//               <span>Ulukhola</span>
//               <span className="h-px w-7 bg-[#e8c77b]/45" />
//               <span>South of Turag River</span>
//               <span className="h-px w-7 bg-[#e8c77b]/45" />
//               <span>Near Purbachal New Town</span>
//             </div>

// <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//   <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-[#e8c77b] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#3b0707] shadow-2xl shadow-black/30 transition duration-300 hover:bg-white">
//     <span className="relative z-10">Explore Rosemont Estate</span>
//     <span className="relative z-10 block h-px w-12 origin-left scale-x-50 bg-[#3b0707] transition-transform duration-700 ease-out group-hover:scale-x-100" />
//   </button>

//               <button className="inline-flex items-center justify-center border border-[#e8c77b]/45 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-300 hover:border-[#e8c77b] hover:bg-[#e8c77b]/15">
//                 Download Brochure
//               </button>
//             </div>
//           </div>

//           {/* Premium Signature Card */}
//           <div className="hidden border border-[#e8c77b]/22 bg-[#3b0707]/45 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block">
//             <div className="border border-[#e8c77b]/30 p-6">
//               <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e8c77b]">
//                 Estate Signature
//               </p>
//               <p className="mt-4 text-xl font-light leading-snug text-white/92">
//                 Architect-controlled villas, landscaped avenues, and a legacy
//                 community planned for generations.
//               </p>
//               <div className="mt-6 h-px w-16 bg-[#e8c77b]/70" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Highlights */}
//       <div className="absolute inset-x-0 bottom-0 z-20">
//         <div className="custom-container mx-auto">
//           <div className="grid border border-[#e8c77b]/20 bg-[#3b0707]/82 backdrop-blur-xl sm:grid-cols-3">
//             {estateHighlights.map((item) => (
//               <div
//                 key={item.label}
//                 className="flex min-h-[100px] items-center justify-between gap-5 border-b border-[#e8c77b]/18 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
//               >
//                 <div>
//                   <p className="text-3xl font-semibold text-[#f1d58e] md:text-4xl">
//                     {item.value}
//                   </p>
//                   <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/78">
//                     {item.label}
//                   </p>
//                 </div>
//                 <span className="h-px w-10 bg-[#e8c77b]/60" />
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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#4a0a0a] text-white">
      <Image
        src="/10 katha villa/MAHI Final.jpeg"
        alt="Anondo Rosemont Estate luxury villa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(38,5,5,0.78)_0%,rgba(58,10,10,0.58)_38%,rgba(58,10,10,0.22)_70%,rgba(58,10,10,0.06)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,3,3,0.10)_0%,rgba(20,3,3,0.02)_42%,rgba(40,5,5,0.76)_100%)]" />

      {/* <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,3,3,0.88)_0%,rgba(74,10,10,0.72)_40%,rgba(74,10,10,0.30)_72%,rgba(74,10,10,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,3,3,0.18)_0%,rgba(20,3,3,0.04)_45%,rgba(24,3,3,0.86)_100%)]" /> */}

      <div className="relative z-10 custom-container mx-auto flex min-h-screen items-center pb-40 pt-28 md:pb-44 md:pt-32">
        <div className="grid w-full gap-12 lg:grid-cols-[1fr_0.58fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/78 sm:text-sm">
              <span className="h-px w-12 bg-white/70" />
              Where Elegance Becomes Heritage
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Anondo
              <span className="text-white/82"> Rosemont Estate</span>
            </h1>

            <h2 className="mt-7 max-w-3xl text-3xl font-light leading-[1.12] text-white/92 sm:text-4xl md:text-5xl lg:text-6xl">
              Where the Hills Whisper and Roses Welcome You Home
            </h2>

            <div className="mt-8 max-w-2xl border-l border-white/35 pl-5">
              <p className="text-base italic leading-relaxed text-white md:text-lg">
                Elegantia in Aeternum — Elegance Forever
              </p>
              <p className="mt-3 leading-relaxed text-white/72">
                A signature duplex township by Anondo Rosemont Estate under
                Anondo CityScappers Ltd.
              </p>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
              Anondo Rosemont Estate is an 807-bigha master-planned duplex villa
              township redefining structured luxury living in Bangladesh. A
              disciplined, architect-controlled community where villas meet
              vision.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-medium text-white/82">
              <span className="h-2 w-2 bg-white" />
              <span>Ulukhola</span>
              <span className="h-px w-7 bg-white/35" />
              <span>South of Turag River</span>
              <span className="h-px w-7 bg-white/35" />
              <span>Near Purbachal New Town</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* <button className="group inline-flex items-center justify-center gap-4 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#4a0a0a] shadow-2xl shadow-black/30 transition duration-300 hover:bg-[#4a0a0a] hover:text-white">
                <span>Explore Rosemont Estate</span>
                <span className="block h-px w-12 origin-left scale-x-50 bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </button> */}

              <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#4a0a0a] shadow-2xl shadow-black/30 transition duration-500 hover:text-white">
                <span className="absolute inset-0 bg-[#4a0a0a] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute -left-16 top-0 h-full w-10 skew-x-[-18deg] bg-white/35 transition-all duration-700 ease-out group-hover:left-[120%]" />

                <span className="relative z-10">Explore Rosemont Estate</span>

                <span className="relative z-10 block h-px w-12 origin-left scale-x-50 bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </button>

              <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden border border-white/35 bg-[#4a0a0a]/45 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-500 hover:border-white/70">
                <span className="absolute inset-0 bg-[#4a0a0a] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute -left-20 top-0 h-full w-14 skew-x-[-18deg] bg-white/10 transition-all duration-700 ease-out group-hover:left-[120%]" />

                <span className="relative z-10">Download Brochure</span>

                <span className="relative z-10 h-px w-6 origin-left scale-x-75 bg-current transition-transform duration-700 ease-out group-hover:scale-x-125" />
              </button>
            </div>
          </div>

          <div className="hidden border border-white/16 bg-[#4a0a0a]/55 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block">
            <div className="border border-white/18 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/62">
                Estate Signature
              </p>
              <p className="mt-4 text-xl font-light leading-snug text-white/90">
                Architect-controlled villas, landscaped avenues, and a legacy
                community planned for generations.
              </p>
              <div className="mt-6 h-px w-16 bg-white/60" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="custom-container mx-auto">
          <div className="grid border border-white/14 bg-[#4a0a0a]/86 backdrop-blur-xl sm:grid-cols-3">
            {estateHighlights.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[100px] items-center justify-between gap-5 border-b border-white/12 px-6 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0 md:px-8"
              >
                <div>
                  <p className="text-3xl font-semibold text-white md:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    {item.label}
                  </p>
                </div>
                <span className="h-px w-10 bg-white/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
