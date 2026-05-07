// const sustainableItems = [
//   {
//     title: "Green Living Environment",
//     text: "Landscaped parks, tree-lined walkways, open lawns, and quiet green pockets create a healthier estate atmosphere for everyday living.",
//   },
//   {
//     title: "Modern Residential Planning",
//     text: "Well-planned residential plots, wide estate roads, elevated land design, and organized infrastructure ensure comfort, safety, and long-term value.",
//   },
//   {
//     title: "Prime Connectivity",
//     text: "A strategic location near Purbachal New Town connects residents to major roads, essential services, and future urban growth corridors.",
//   },
//   {
//     title: "Community Lifestyle",
//     text: "Shared recreational areas, walking paths, family-friendly facilities, and open community spaces bring neighbors and generations together.",
//   },
// ];

// export default function SustainableLiving() {
//   return (
//     <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
//       <div className="absolute left-0 top-0 hidden h-full w-[30%] bg-[#4a0a0a] lg:block" />

//       <div className="relative z-10 mx-auto max-w-[1180px] px-5">
//         <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a] lg:text-white">
//               <span className="h-px w-10 bg-current" />
//               Sustainable Living at Rosemont
//             </p>

//             <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl lg:text-white">
//               A Community Designed for Modern Living
//             </h2>
//           </div>

//           <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
//             Rosemont Estate is thoughtfully planned to create a balanced
//             lifestyle where nature, comfort, and community come together. With
//             green landscapes, open spaces, and carefully organized
//             infrastructure, Rosemont supports sustainable living while ensuring
//             convenience for families and future generations.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {sustainableItems.map((item, index) => (
//             <article
//               key={item.title}
//               className="group relative min-h-[370px] overflow-hidden border border-[#4a0a0a]/15 bg-white p-7 shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:bg-[#4a0a0a] hover:shadow-2xl hover:shadow-[#4a0a0a]/20"
//             >
//               <div className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />

//               <div className="relative z-10 flex h-full flex-col">
//                 <div className="mb-10 flex items-center justify-between">
//                   <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-white/45">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>

//                   <span className="h-px w-14 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover:bg-white" />
//                 </div>

//                 <h3 className="max-w-[14rem] text-2xl font-semibold leading-tight text-[#241818] transition duration-300 group-hover:text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-5 leading-8 text-[#6b5d57] transition duration-300 group-hover:text-white/72">
//                   {item.text}
//                 </p>

//                 <button className="mt-auto inline-flex items-center gap-4 pt-10 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a] transition duration-300 group-hover:text-white">
//                   Direction
//                   <span className="h-px w-10 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

const sustainableItems = [
  {
    title: "Green Living Environment",
    text: "Landscaped parks, tree-lined walkways, open lawns, and quiet green pockets create a healthier estate atmosphere for everyday living.",
  },
  {
    title: "Modern Residential Planning",
    text: "Wide estate roads, elevated land design, planned plots, and organized infrastructure ensure comfort, safety, and long-term value.",
  },
  {
    title: "Prime Connectivity",
    text: "A strategic location near Purbachal New Town connects residents to major roads, essential services, and future urban growth corridors.",
  },
  {
    title: "Community Lifestyle",
    text: "Shared recreational areas, walking paths, family-friendly facilities, and open community spaces bring neighbors and generations together.",
  },
];

export default function SustainableLiving() {
  return (
    <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Sustainable Living at Rosemont
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
              A Community Designed for Modern Living
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            Rosemont Estate is thoughtfully planned to create a balanced
            lifestyle where nature, comfort, and community come together. Green
            landscapes, open spaces, and carefully organized infrastructure make
            everyday living calm, convenient, and future-ready.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
          <div className="hidden border-r border-[#4a0a0a]/15 pt-14 lg:block">
            <div className="sticky top-28 pr-10">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#4a0a0a]/55">
                Rosemont Living Principles
              </p>
              <p className="mt-5 text-2xl font-semibold leading-snug text-[#4a0a0a]">
                Nature, planning, connection, and community in one estate
                rhythm.
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#4a0a0a]/15 lg:pl-10">
            {sustainableItems.map((item, index) => (
              <article
                key={item.title}
                className="group grid gap-8 py-10 transition duration-500 md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <div className="flex items-center gap-5">
                  <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-[#4a0a0a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-14 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100 md:hidden" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-[#241818] transition duration-300 group-hover:text-[#4a0a0a] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-8 text-[#6b5d57]">
                    {item.text}
                  </p>
                </div>

                <button className="group/btn inline-flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a]">
                  Direction
                  <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover/btn:scale-x-100" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// const sustainableItems = [
//   {
//     title: "Green Living Environment",
//     text: "Landscaped parks, tree-lined walkways, open lawns, and quiet green pockets create a healthier estate atmosphere for everyday living.",
//   },
//   {
//     title: "Modern Residential Planning",
//     text: "Wide estate roads, elevated land design, planned plots, and organized infrastructure ensure comfort, safety, and long-term value.",
//   },
//   {
//     title: "Prime Connectivity",
//     text: "A strategic location near Purbachal New Town connects residents to major roads, essential services, and future urban growth corridors.",
//   },
//   {
//     title: "Community Lifestyle",
//     text: "Shared recreational areas, walking paths, family-friendly facilities, and open community spaces bring neighbors and generations together.",
//   },
// ];

// export default function SustainableLiving() {
//   return (
//     <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
//       <div className="absolute right-0 top-0 hidden h-full w-[31%] bg-[#4a0a0a] lg:block" />

//       <div className="relative z-10 mx-auto max-w-[1180px] px-5">
//         <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
//               <span className="h-px w-10 bg-current" />
//               Sustainable Living at Rosemont
//             </p>

//             <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
//               A Community Designed for Modern Living
//             </h2>
//           </div>

//           <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg lg:text-white/76">
//             Rosemont Estate is thoughtfully planned to create a balanced
//             lifestyle where nature, comfort, and community come together. Green
//             landscapes, open spaces, and carefully organized infrastructure make
//             everyday living calm, convenient, and future-ready.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
//           <div className="hidden border-r border-[#4a0a0a]/15 pt-14 lg:block">
//             <div className="sticky top-28 pr-10">
//               <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#4a0a0a]/55">
//                 Rosemont Living Principles
//               </p>
//               <p className="mt-5 text-2xl font-semibold leading-snug text-[#4a0a0a]">
//                 Nature, planning, connection, and community in one estate
//                 rhythm.
//               </p>
//             </div>
//           </div>

//           <div className="divide-y divide-[#4a0a0a]/15 lg:pl-10">
//             {sustainableItems.map((item, index) => (
//               <article
//                 key={item.title}
//                 className="group grid gap-8 py-10 transition duration-500 md:grid-cols-[120px_1fr_auto] md:items-center"
//               >
//                 <div className="flex items-center gap-5">
//                   <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-[#4a0a0a] lg:group-hover:text-white">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                   <span className="h-px w-14 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100 md:hidden" />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold leading-tight text-[#241818] transition duration-300 group-hover:text-[#4a0a0a] md:text-3xl lg:group-hover:text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-4 max-w-2xl leading-8 text-[#6b5d57]">
//                     {item.text}
//                   </p>
//                 </div>

//                 <button className="group/btn inline-flex w-fit items-center gap-4 text-sm font-bold uppercase tracking-[0.14em] text-[#4a0a0a] lg:text-white">
//                   Direction
//                   <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100 group-hover/btn:scale-x-100" />
//                 </button>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
