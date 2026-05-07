// import Image from "next/image";
// import {
//   designFeatures,
//   estateImage,
//   masterPlanMetrics,
// } from "@/data/rosemontSite";

// const plotCategories = [
//   {
//     title: "5 Katha Villa Residences",
//     plots: "900 plots",
//     size: "2,750 sft duplex",
//     floors: "Ground 1,350 sft / First 1,400 sft",
//     note: "Efficient family villas with open lawn living and 25 ft residential road access.",
//   },
//   {
//     title: "10 Katha Villa Residences",
//     plots: "450 plots",
//     size: "4,500 sft duplex",
//     floors: "Ground 2,000 sft / First 2,500 sft",
//     note: "Expanded estate living with 40 ft avenue frontage and optional private pool planning.",
//   },
//   {
//     title: "20 Katha Signature Estates",
//     plots: "90 estates",
//     size: "7,200 sft villa",
//     floors: "Ground 4,000 sft / First 3,200 sft",
//     note: "Grand signature residences with duplex or triplex opportunity, driveway, pool, and gardens.",
//   },
// ];

// // const natureFeatures = [
// //   {
// //     title: "12 Bigha Estate Lake",
// //     text: "A scenic water body with walking paths, viewing moments, cooling microclimate, and lakefront leisure value.",
// //   },
// //   {
// //     title: "12 Bigha Central Park",
// //     text: "The green heart of Rosemont for family gatherings, outdoor activities, cultural events, and daily calm.",
// //   },
// //   {
// //     title: "Community Farming Zone",
// //     text: "A rare lifestyle feature where residents can grow vegetables, fruits, flowers, or herbs as a hobby.",
// //   },
// // ];

// const roadHighlights = [
//   {
//     value: "60 ft",
//     title: "Grand Avenue",
//     text: "The primary estate boulevard designed for arrival, movement, and a generous estate impression.",
//   },
//   {
//     value: "40 ft",
//     title: "Secondary Avenues",
//     text: "Wide internal avenues connect residential zones, amenities, landscapes, and community facilities.",
//   },
//   {
//     value: "25 ft",
//     title: "Residential Roads",
//     text: "Smaller plot access roads support calm neighborhood movement and daily residential convenience.",
//   },
// ];

// const planningPillars = [
//   {
//     title: "Elevated Plot Design",
//     text: "Residential plots and homes are planned 18 to 24 inches above road level for drainage, protection, and visual presence.",
//   },
//   {
//     title: "Open Front Landscape",
//     text: "Front lawns remain open without high boundary walls, creating a continuous and elegant estate streetscape.",
//   },
//   {
//     title: "Pillar Demarcation",
//     text: "Structural pillars mark plot boundaries clearly while keeping the neighborhood visually open and refined.",
//   },
//   {
//     title: "Architectural Harmony",
//     text: "Classical European-inspired facade proportions, balconies, large windows, and landscape integration keep the estate unified.",
//   },
// ];

// export function MainMasterPlanSection() {
//   return (
//     <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
//       <div className="mx-auto max-w-[1180px] px-5">
//         <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
//               <span className="h-px w-10 bg-current" />
//               Main Master Plan
//             </p>
//             <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
//               807 Bigha Planned Estate with Roads, Villas, Nature, and Community
//               Scale
//             </h2>
//           </div>

//           <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
//             The master plan organizes Rosemont into residential villa zones,
//             wide avenue networks, elevated plots, lake and park landscapes,
//             community farming, infrastructure corridors, and a harmonized
//             architectural environment.
//           </p>
//         </div>

//         <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.78fr_1.22fr]">
//           <div className="bg-[#4a0a0a] p-7 text-white md:p-10 lg:p-12">
//             <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
//               Land Area and Project Scale
//             </p>
//             <h3 className="mt-5 text-4xl font-semibold leading-none md:text-6xl">
//               807
//             </h3>
//             <p className="mt-3 text-xl font-semibold text-white">
//               Bigha Estate Development
//             </p>
//             <p className="mt-6 leading-8 text-white/70">
//               A large-scale low-density estate integrating plots, villas,
//               community amenities, green zones, and long-term infrastructure.
//             </p>

//             <div className="mt-10 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-1">
//               {masterPlanMetrics.slice(1).map((metric) => (
//                 <div
//                   key={metric.label}
//                   className="group flex items-end justify-between gap-5 border-b border-white/15 pb-5"
//                 >
//                   <div>
//                     <p className="text-3xl font-semibold leading-none">
//                       {metric.value}
//                     </p>
//                     <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/55">
//                       {metric.label}
//                     </p>
//                   </div>
//                   <span className="h-px w-14 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid lg:grid-rows-[1.05fr_auto]">
//             <div className="relative min-h-[390px] overflow-hidden bg-[#4a0a0a]">
//               <Image
//                 src={estateImage}
//                 alt="Anondo Rosemont Estate master plan villa environment"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 62vw"
//                 className="object-cover transition duration-700 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.02)_0%,rgba(56,10,10,0.68)_100%)]" />
//               <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
//                 <span className="mb-6 block h-px w-24 bg-white" />
//                 <h3 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
//                   Master planning that feels open, organized, and estate-like.
//                 </h3>
//               </div>
//             </div>

//             <div className="grid border-t border-[#4a0a0a]/15 md:grid-cols-3">
//               {roadHighlights.map((road, index) => (
//                 <article
//                   key={road.title}
//                   className="group border-b border-[#4a0a0a]/15 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
//                 >
//                   <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45">
//                     Road 0{index + 1}
//                   </p>
//                   <h4 className="mt-4 text-2xl font-semibold leading-tight text-[#4a0a0a]">
//                     {road.value}
//                   </h4>
//                   <p className="mt-3 leading-7 text-[#6b5d57]">
//                     <span className="font-semibold text-[#4a0a0a]">
//                       {road.title}
//                     </span>{" "}
//                     {road.text}
//                   </p>
//                   <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12">
//           <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
//                 Plot Distribution and Layout
//               </p>
//               <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-4xl">
//                 Three residential scales, one unified villa community.
//               </h3>
//             </div>
//             <p className="max-w-xl leading-8 text-[#6b5d57]">
//               Each plot category is planned with a dedicated villa format so the
//               estate remains consistent, elegant, and easier to manage.
//             </p>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-3">
//             {plotCategories.map((plot, index) => (
//               <article
//                 key={plot.title}
//                 className="group border border-[#4a0a0a]/15 bg-white p-7 transition duration-500 hover:-translate-y-2 hover:bg-[#4a0a0a] hover:text-white"
//               >
//                 <div className="flex items-center justify-between gap-5">
//                   <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-white/50">
//                     {String(index + 1).padStart(2, "0")}
//                   </p>
//                   <span className="h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </div>

//                 <h4 className="mt-8 text-2xl font-semibold leading-tight text-[#4a0a0a] transition duration-300 group-hover:text-white">
//                   {plot.title}
//                 </h4>
//                 <p className="mt-5 text-4xl font-semibold leading-none">
//                   {plot.plots}
//                 </p>
//                 <div className="mt-6 grid gap-3 border-t border-[#4a0a0a]/15 pt-6 text-[#6b5d57] transition duration-300 group-hover:border-white/15 group-hover:text-white/72">
//                   <p>{plot.size}</p>
//                   <p>{plot.floors}</p>
//                   <p className="leading-8">{plot.note}</p>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>

//         <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
//           <div className="border border-[#4a0a0a]/15 bg-white p-7 md:p-10">
//             <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
//               Elevated Design and Architectural Guidelines
//             </p>
//             <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-4xl">
//               The details that keep the estate refined.
//             </h3>
//             <p className="mt-5 leading-8 text-[#6b5d57]">
//               Rosemont avoids random plot-by-plot construction by combining open
//               frontage, elevated homes, demarcated boundaries, privacy walls,
//               and a consistent villa language.
//             </p>

//             <ul className="mt-7 grid gap-3">
//               {designFeatures.map((feature) => (
//                 <li
//                   key={feature}
//                   className="flex gap-3 leading-7 text-[#6b5d57]"
//                 >
//                   <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#4a0a0a]" />
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2">
//             {planningPillars.map((item, index) => (
//               <article
//                 key={item.title}
//                 className={`group border p-7 transition duration-500 hover:-translate-y-2 ${
//                   index === 0
//                     ? "border-[#4a0a0a] bg-[#4a0a0a] text-white"
//                     : "border-[#4a0a0a]/15 bg-white text-[#241818] hover:border-[#4a0a0a]"
//                 }`}
//               >
//                 <span className="mb-7 block h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 <h4
//                   className={`text-2xl font-semibold leading-tight ${
//                     index === 0 ? "text-white" : "text-[#4a0a0a]"
//                   }`}
//                 >
//                   {item.title}
//                 </h4>
//                 <p
//                   className={`mt-5 leading-8 ${
//                     index === 0 ? "text-white/72" : "text-[#6b5d57]"
//                   }`}
//                 >
//                   {item.text}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white lg:grid-cols-[0.72fr_1.28fr]">
//           <div className="bg-[#4a0a0a] p-7 text-white md:p-10">
//             <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
//               Nature and Open Space
//             </p>
//             <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
//               Lake, park, and farming complete the master plan.
//             </h3>
//             <p className="mt-5 leading-8 text-white/70">
//               The estate is not only plotted land. It is planned around open
//               space, water, greenery, recreation, and daily community wellness.
//             </p>
//           </div>

//           <div className="divide-y divide-[#4a0a0a]/15">
//             {natureFeatures.map((item, index) => (
//               <article
//                 key={item.title}
//                 className="group grid gap-6 p-7 transition duration-500 hover:bg-[#f8f3ec] md:grid-cols-[90px_1fr] md:p-9"
//               >
//                 <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45">
//                   0{index + 1}
//                 </p>
//                 <div>
//                   <h4 className="text-2xl font-semibold leading-tight text-[#4a0a0a]">
//                     {item.title}
//                   </h4>
//                   <p className="mt-4 max-w-2xl leading-8 text-[#6b5d57]">
//                     {item.text}
//                   </p>
//                   <span className="mt-6 block h-px w-20 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>  */}
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import {
  designFeatures,
  estateImage,
  masterPlanMetrics,
} from "@/data/rosemontSite";

const plotCategories = [
  {
    title: "5 Katha Villa Residences",
    plots: "900 plots",
    size: "2,750 sft duplex",
    floors: "Ground 1,350 sft / First 1,400 sft",
    frontage: "25 ft residential road",
    image: "/5 katha villa/5-katha-1.jpg",
    note: "Efficient family villas with open lawn living, garage planning, and comfortable indoor-outdoor balance.",
  },
  {
    title: "10 Katha Villa Residences",
    plots: "450 plots",
    size: "4,500 sft duplex",
    floors: "Ground 2,000 sft / First 2,500 sft",
    frontage: "40 ft avenue frontage",
    image: "/10 katha villa/10-katha-1.png",
    note: "Expanded estate living with larger gardens, executive facade presence, and optional private pool planning.",
  },
  {
    title: "20 Katha Signature Estates",
    plots: "90 estates",
    size: "7,200 sft villa",
    floors: "Ground 4,000 sft / First 3,200 sft",
    frontage: "Grand private driveway",
    image: "/20 katha villa/20-katha-1.jpg",
    note: "The most prestigious estate scale with duplex or triplex opportunity, private pool, and extended gardens.",
  },
];

const roadHighlights = [
  {
    value: "60 ft",
    title: "Grand Avenue",
    text: "The primary estate boulevard designed for arrival, movement, and a generous estate impression.",
  },
  {
    value: "40 ft",
    title: "Secondary Avenues",
    text: "Wide internal avenues connect residential zones, amenities, landscapes, and community facilities.",
  },
  {
    value: "25 ft",
    title: "Residential Roads",
    text: "Smaller plot access roads support calm neighborhood movement and daily residential convenience.",
  },
];

export function MainMasterPlanSection() {
  return (
    <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Main Master Plan
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#3e0607] md:text-5xl">
              807 Bigha Planned Estate with Roads, Villas, Nature, and Community
              Scale
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            The master plan organizes Rosemont into residential villa zones,
            wide avenue networks, elevated plots, lake and park landscapes,
            community farming, infrastructure corridors, and a harmonized
            architectural environment.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-[#4a0a0a] p-7 text-white md:p-10 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
              Land Area and Project Scale
            </p>
            <h3 className="mt-5 text-4xl font-semibold leading-none md:text-6xl">
              807
            </h3>
            <p className="mt-3 text-xl font-semibold text-white">
              Bigha Estate Development
            </p>
            <p className="mt-6 leading-8 text-white/70">
              A large-scale low-density estate integrating plots, villas,
              community amenities, green zones, and long-term infrastructure.
            </p>

            <div className="mt-10 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-1">
              {masterPlanMetrics.slice(1).map((metric) => (
                <div
                  key={metric.label}
                  className="group flex items-end justify-between gap-5 border-b border-white/15 pb-5"
                >
                  <div>
                    <p className="text-3xl font-semibold leading-none">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/55">
                      {metric.label}
                    </p>
                  </div>
                  <span className="h-px w-14 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-rows-[1.05fr_auto]">
            <div className="relative min-h-[390px] overflow-hidden bg-[#4a0a0a]">
              <Image
                src={estateImage}
                alt="Anondo Rosemont Estate master plan villa environment"
                fill
                sizes="(max-width: 1024px) 100vw, 62vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.02)_0%,rgba(56,10,10,0.68)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                <span className="mb-6 block h-px w-24 bg-white" />
                <h3 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
                  Master planning that feels open, organized, and estate-like.
                </h3>
              </div>
            </div>

            <div className="grid border-t border-[#4a0a0a]/15 md:grid-cols-3">
              {roadHighlights.map((road, index) => (
                <article
                  key={road.title}
                  className="group border-b border-[#4a0a0a]/15 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45">
                    Road 0{index + 1}
                  </p>
                  <h4 className="mt-4 text-2xl font-semibold leading-tight text-[#4a0a0a]">
                    {road.value}
                  </h4>
                  <p className="mt-3 leading-7 text-[#6b5d57]">
                    <span className="font-semibold text-[#4a0a0a]">
                      {road.title}
                    </span>{" "}
                    {road.text}
                  </p>
                  <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
                Plot Distribution and Layout
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-4xl">
                Three residential scales, one unified villa community.
              </h3>
            </div>
            <p className="max-w-xl leading-8 text-[#6b5d57]">
              Each plot category is planned with a dedicated villa format so the
              estate remains consistent, elegant, and easier to manage.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plotCategories.map((plot, index) => (
              <article
                key={plot.title}
                className="group overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/18"
              >
                <div className="relative h-[310px] overflow-hidden bg-[#4a0a0a]">
                  <Image
                    src={plot.image}
                    alt={plot.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.78)_100%)]" />

                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-extrabold text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="mb-5 block h-px w-20 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
                    <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/65">
                      {plot.plots}
                    </p>
                    <h4 className="text-2xl font-semibold leading-tight">
                      {plot.title}
                    </h4>
                  </div>
                </div>

                <div className="p-7">
                  <div className="grid gap-3 border-b border-[#4a0a0a]/15 pb-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#6b5d57]">
                        Villa Size
                      </span>
                      <span className="text-right font-extrabold text-[#4a0a0a]">
                        {plot.size}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#6b5d57]">
                        Floor Plan
                      </span>
                      <span className="max-w-[12rem] text-right text-sm font-semibold leading-6 text-[#4a0a0a]">
                        {plot.floors}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-[#6b5d57]">
                        Access
                      </span>
                      <span className="text-right text-sm font-semibold text-[#4a0a0a]">
                        {plot.frontage}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-[#6b5d57]">{plot.note}</p>

                  <div className="mt-7 flex items-center justify-between gap-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#4a0a0a]/55">
                      Villa Category
                    </p>
                    <span className="h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="bg-[#5a0c0c] p-7 text-white md:p-10 lg:p-12">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/60">
              Architectural Harmony Guidelines
            </p>
            <h3 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              The details that keep Rosemont visually unified.
            </h3>
            <p className="mt-6 leading-8 text-white/70">
              The master plan protects the estate character through elevated
              plots, open lawns, disciplined boundaries, wide boulevards, and a
              consistent European-inspired villa language.
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            {designFeatures.map((feature, index) => (
              <article
                key={feature}
                className="group min-h-[210px] border-b border-[#4a0a0a]/15 p-7 transition duration-500 hover:bg-[#f8f3ec] sm:border-r sm:even:border-r-0 lg:p-9"
              >
                <div className="mb-8 flex items-center justify-between gap-5">
                  <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-[#4a0a0a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-20 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </div>

                <p className="text-xl font-semibold leading-snug text-[#4a0a0a] md:text-2xl">
                  {feature}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";
// import { estateImage, masterPlanMetrics } from "@/data/rosemontSite";

// const plotCategories = [
//   {
//     title: "5 Katha Villa Residences",
//     plots: "900 plots",
//     size: "2,750 sft duplex",
//     floors: "Ground 1,350 sft / First 1,400 sft",
//     frontage: "25 ft residential road",
//     image: estateImage,
//     note: "Efficient family villas with open lawn living, garage planning, and comfortable indoor-outdoor balance.",
//   },
//   {
//     title: "10 Katha Villa Residences",
//     plots: "450 plots",
//     size: "4,500 sft duplex",
//     floors: "Ground 2,000 sft / First 2,500 sft",
//     frontage: "40 ft avenue frontage",
//     image: estateImage,
//     note: "Expanded estate living with larger gardens, executive facade presence, and optional private pool planning.",
//   },
//   {
//     title: "20 Katha Signature Estates",
//     plots: "90 estates",
//     size: "7,200 sft villa",
//     floors: "Ground 4,000 sft / First 3,200 sft",
//     frontage: "Grand private driveway",
//     image: estateImage,
//     note: "The most prestigious estate scale with duplex or triplex opportunity, private pool, and extended gardens.",
//   },
// ];

// const roadHighlights = [
//   {
//     value: "60 ft",
//     title: "Grand Avenue",
//     text: "The primary estate boulevard designed for arrival, movement, and a generous estate impression.",
//   },
//   {
//     value: "40 ft",
//     title: "Secondary Avenues",
//     text: "Wide internal avenues connect residential zones, amenities, landscapes, and community facilities.",
//   },
//   {
//     value: "25 ft",
//     title: "Residential Roads",
//     text: "Smaller plot access roads support calm neighborhood movement and daily residential convenience.",
//   },
// ];

// export function MainMasterPlanSection() {
//   return (
//     <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
//       <div className="mx-auto max-w-[1400px] px-5">
//         <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
//               <span className="h-px w-10 bg-current" />
//               Main Master Plan
//             </p>
//             <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
//               807 Bigha Planned Estate with Roads, Villas, Nature, and Community
//               Scale
//             </h2>
//           </div>

//           <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
//             The master plan organizes Rosemont into residential villa zones,
//             wide avenue networks, elevated plots, lake and park landscapes,
//             community farming, infrastructure corridors, and a harmonized
//             architectural environment.
//           </p>
//         </div>

//         <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.78fr_1.22fr]">
//           <div className="bg-[#4a0a0a] p-7 text-white md:p-10 lg:p-12">
//             <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
//               Land Area and Project Scale
//             </p>
//             <h3 className="mt-5 text-4xl font-semibold leading-none md:text-6xl">
//               807
//             </h3>
//             <p className="mt-3 text-xl font-semibold text-white">
//               Bigha Estate Development
//             </p>
//             <p className="mt-6 leading-8 text-white/70">
//               A large-scale low-density estate integrating plots, villas,
//               community amenities, green zones, and long-term infrastructure.
//             </p>

//             <div className="mt-10 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-1">
//               {masterPlanMetrics.slice(1).map((metric) => (
//                 <div
//                   key={metric.label}
//                   className="group flex items-end justify-between gap-5 border-b border-white/15 pb-5"
//                 >
//                   <div>
//                     <p className="text-3xl font-semibold leading-none">
//                       {metric.value}
//                     </p>
//                     <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/55">
//                       {metric.label}
//                     </p>
//                   </div>
//                   <span className="h-px w-14 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid lg:grid-rows-[1.05fr_auto]">
//             <div className="relative min-h-[390px] overflow-hidden bg-[#4a0a0a]">
//               <Image
//                 src={estateImage}
//                 alt="Anondo Rosemont Estate master plan villa environment"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 62vw"
//                 className="object-cover transition duration-700 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.02)_0%,rgba(56,10,10,0.68)_100%)]" />
//               <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
//                 <span className="mb-6 block h-px w-24 bg-white" />
//                 <h3 className="max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">
//                   Master planning that feels open, organized, and estate-like.
//                 </h3>
//               </div>
//             </div>

//             <div className="grid border-t border-[#4a0a0a]/15 md:grid-cols-3">
//               {roadHighlights.map((road, index) => (
//                 <article
//                   key={road.title}
//                   className="group border-b border-[#4a0a0a]/15 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
//                 >
//                   <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45">
//                     Road 0{index + 1}
//                   </p>
//                   <h4 className="mt-4 text-2xl font-semibold leading-tight text-[#4a0a0a]">
//                     {road.value}
//                   </h4>
//                   <p className="mt-3 leading-7 text-[#6b5d57]">
//                     <span className="font-semibold text-[#4a0a0a]">
//                       {road.title}
//                     </span>{" "}
//                     {road.text}
//                   </p>
//                   <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-12">
//           <div className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
//             <div>
//               <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
//                 Plot Distribution and Layout
//               </p>
//               <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-4xl">
//                 Three residential scales, one unified villa community.
//               </h3>
//             </div>
//             <p className="max-w-xl leading-8 text-[#6b5d57]">
//               Each plot category is planned with a dedicated villa format so the
//               estate remains consistent, elegant, and easier to manage.
//             </p>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-3">
//             {plotCategories.map((plot, index) => (
//               <article
//                 key={plot.title}
//                 className="group overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/18"
//               >
//                 <div className="relative h-[310px] overflow-hidden bg-[#4a0a0a]">
//                   <Image
//                     src={plot.image}
//                     alt={plot.title}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 33vw"
//                     className="object-cover transition duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.78)_100%)]" />

//                   <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-white/25 bg-white/15 text-sm font-extrabold text-white backdrop-blur-md">
//                     {String(index + 1).padStart(2, "0")}
//                   </div>

//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <span className="mb-5 block h-px w-20 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                     <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/65">
//                       {plot.plots}
//                     </p>
//                     <h4 className="text-2xl font-semibold leading-tight">
//                       {plot.title}
//                     </h4>
//                   </div>
//                 </div>

//                 <div className="p-7">
//                   <div className="grid gap-3 border-b border-[#4a0a0a]/15 pb-6">
//                     <div className="flex items-center justify-between gap-4">
//                       <span className="text-sm font-semibold text-[#6b5d57]">
//                         Villa Size
//                       </span>
//                       <span className="text-right font-extrabold text-[#4a0a0a]">
//                         {plot.size}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between gap-4">
//                       <span className="text-sm font-semibold text-[#6b5d57]">
//                         Floor Plan
//                       </span>
//                       <span className="max-w-[12rem] text-right text-sm font-semibold leading-6 text-[#4a0a0a]">
//                         {plot.floors}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between gap-4">
//                       <span className="text-sm font-semibold text-[#6b5d57]">
//                         Access
//                       </span>
//                       <span className="text-right text-sm font-semibold text-[#4a0a0a]">
//                         {plot.frontage}
//                       </span>
//                     </div>
//                   </div>

//                   <p className="mt-6 leading-8 text-[#6b5d57]">{plot.note}</p>

//                   <div className="mt-7 flex items-center justify-between gap-5">
//                     <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#4a0a0a]/55">
//                       Villa Category
//                     </p>
//                     <span className="h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
