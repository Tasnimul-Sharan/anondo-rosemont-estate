// import Image from "next/image";
// import { communityFacilities, estateImage } from "@/data/rosemontSite";

// const primaryFacilities = communityFacilities.slice(0, 3);
// const religiousFacilities = communityFacilities.slice(3);

// export function CommunityFacilitiesSection() {
//   return (
//     <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
//       <div className="mx-auto max-w-[1400px] px-5">
//         <div className="grid gap-10 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
//               <span className="h-px w-10 bg-current" />
//               Community Facilities
//             </p>
//             <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
//               Everyday essentials planned inside a complete estate community.
//             </h2>
//           </div>

//           <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
//             Rosemont is planned with education, healthcare, daily convenience,
//             and inclusive religious facilities so families can enjoy a more
//             complete and connected residential environment.
//           </p>
//         </div>

//         <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.82fr_1.18fr]">
//           <div className="relative min-h-[560px] overflow-hidden bg-[#4a0a0a]">
//             <Image
//               src={estateImage}
//               alt="Anondo Rosemont Estate community facilities"
//               fill
//               sizes="(max-width: 1024px) 100vw, 42vw"
//               className="object-cover transition duration-700 hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.08)_0%,rgba(56,10,10,0.86)_100%)]" />

//             <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
//               <span className="mb-7 block h-px w-24 bg-white" />
//               <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
//                 Complete Community Planning
//               </p>
//               <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight md:text-5xl">
//                 Facilities that support family life across generations.
//               </h3>

//               <div className="mt-8 grid grid-cols-3 border-t border-white/15 pt-7">
//                 {[
//                   ["03", "Core Services"],
//                   ["03", "Worship Spaces"],
//                   ["01", "Estate Vision"],
//                 ].map(([value, label]) => (
//                   <div
//                     key={label}
//                     className="border-r border-white/15 pr-4 last:border-r-0 last:pl-4"
//                   >
//                     <p className="text-2xl font-semibold leading-none">
//                       {value}
//                     </p>
//                     <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">
//                       {label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="divide-y divide-[#4a0a0a]/15">
//             {primaryFacilities.map((item, index) => (
//               <article
//                 key={item.title}
//                 className="group grid gap-7 p-7 transition duration-500 hover:bg-[#f8f3ec] md:p-9 lg:grid-cols-[92px_1fr]"
//               >
//                 <div>
//                   <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-[#4a0a0a]">
//                     0{index + 1}
//                   </p>
//                   <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-3xl">
//                     {item.title}
//                   </h3>
//                   <p className="mt-4 max-w-2xl leading-8 text-[#6b5d57]">
//                     {item.text}
//                   </p>
//                 </div>
//               </article>
//             ))}

//             <div className="p-7 md:p-9">
//               <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//                 <div>
//                   <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
//                     Religious and Cultural Harmony
//                   </p>
//                   <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-3xl">
//                     Inclusive places of worship for a balanced community.
//                   </h3>
//                 </div>
//                 <span className="hidden h-px w-24 bg-[#4a0a0a]/35 md:block" />
//               </div>

//               <div className="grid gap-5 md:grid-cols-3">
//                 {religiousFacilities.map((item, index) => (
//                   <article
//                     key={item.title}
//                     className="group border border-[#4a0a0a]/15 bg-[#f8f3ec] p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#4a0a0a] hover:text-white"
//                   >
//                     <div className="mb-7 flex items-center justify-between gap-4">
//                       <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-white/50">
//                         0{index + 4}
//                       </p>
//                       <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                     </div>

//                     <h4 className="text-xl font-semibold leading-tight text-[#4a0a0a] transition duration-300 group-hover:text-white">
//                       {item.title}
//                     </h4>
//                     <p className="mt-4 text-sm leading-7 text-[#6b5d57] transition duration-300 group-hover:text-white/72">
//                       {item.text}
//                     </p>
//                   </article>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import { communityFacilities, estateImage } from "@/data/rosemontSite";

// const primaryFacilities = communityFacilities.slice(0, 3);
// const religiousFacilities = communityFacilities.slice(3);

// export function CommunityFacilitiesSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
//       <div className="absolute left-0 top-0 hidden h-full w-[34%] bg-[#4a0a0a] lg:block" />

//       <div className="relative z-10 mx-auto max-w-[1400px] px-5">
//         <div className="grid gap-10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a] lg:text-white">
//               <span className="h-px w-10 bg-current" />
//               Community Facilities
//             </p>
//             <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl lg:text-white">
//               Everyday essentials planned inside a complete estate community.
//             </h2>
//           </div>

//           <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
//             Rosemont is planned with education, healthcare, daily convenience,
//             and inclusive religious facilities so families can enjoy a more
//             complete and connected residential environment.
//           </p>
//         </div>

//         <div className="h-px w-full bg-[#4a0a0a]/15 lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.18)_34%,rgba(56,10,10,0.15)_34%,rgba(56,10,10,0.15)_100%)]" />

//         <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.82fr_1.18fr]">
//           <div className="relative min-h-[560px] overflow-hidden bg-[#4a0a0a] lg:min-h-[640px]">
//             <Image
//               src={estateImage}
//               alt="Anondo Rosemont Estate community facilities"
//               fill
//               sizes="(max-width: 1024px) 100vw, 42vw"
//               className="object-cover transition duration-700 hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.88)_100%)]" />
//             <div className="absolute inset-0 border border-white/5" />

//             <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
//               <span className="mb-7 block h-px w-24 bg-white" />
//               <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
//                 Complete Community Planning
//               </p>
//               <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight md:text-5xl">
//                 Facilities that support family life across generations.
//               </h3>

//               <div className="mt-8 grid grid-cols-3 border-t border-white/15 pt-7">
//                 {[
//                   ["03", "Core Services"],
//                   ["03", "Worship Spaces"],
//                   ["01", "Estate Vision"],
//                 ].map(([value, label]) => (
//                   <div
//                     key={label}
//                     className="border-r border-white/15 px-4 first:pl-0 last:border-r-0 last:pr-0"
//                   >
//                     <p className="text-2xl font-semibold leading-none">
//                       {value}
//                     </p>
//                     <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">
//                       {label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="divide-y divide-[#4a0a0a]/15">
//             {primaryFacilities.map((item, index) => (
//               <article
//                 key={item.title}
//                 className="group grid gap-7 p-7 transition duration-500 hover:bg-[#f8f3ec] md:p-9 lg:grid-cols-[92px_1fr]"
//               >
//                 <div>
//                   <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-[#4a0a0a]">
//                     0{index + 1}
//                   </p>
//                   <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-3xl">
//                     {item.title}
//                   </h3>
//                   <p className="mt-4 max-w-2xl leading-8 text-[#6b5d57]">
//                     {item.text}
//                   </p>
//                 </div>
//               </article>
//             ))}

//             <div className="p-7 md:p-9">
//               <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//                 <div>
//                   <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
//                     Religious and Cultural Harmony
//                   </p>
//                   <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-3xl">
//                     Inclusive places of worship for a balanced community.
//                   </h3>
//                 </div>
//                 <span className="hidden h-px w-24 bg-[#4a0a0a]/35 md:block" />
//               </div>

//               <div className="grid gap-5 md:grid-cols-3">
//                 {religiousFacilities.map((item, index) => (
//                   <article
//                     key={item.title}
//                     className="group border border-[#4a0a0a]/15 bg-[#f8f3ec] p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#4a0a0a] hover:text-white"
//                   >
//                     <div className="mb-7 flex items-center justify-between gap-4">
//                       <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-white/50">
//                         0{index + 4}
//                       </p>
//                       <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                     </div>

//                     <h4 className="text-xl font-semibold leading-tight text-[#4a0a0a] transition duration-300 group-hover:text-white">
//                       {item.title}
//                     </h4>
//                     <p className="mt-4 text-sm leading-7 text-[#6b5d57] transition duration-300 group-hover:text-white/72">
//                       {item.text}
//                     </p>
//                   </article>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { communityFacilities, estateImage } from "@/data/rosemontSite";

const primaryFacilities = communityFacilities.slice(0, 3);
const religiousFacilities = communityFacilities.slice(3);

export function CommunityFacilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="absolute left-0 top-0 hidden h-full w-[34%] bg-[#4a0a0a] lg:block" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        <div className="grid gap-10 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a] lg:text-white">
              <span className="h-px w-10 bg-current" />
              Community Facilities
            </p>

            <div
              className="relative max-w-3xl"
              style={{
                "--redTextClip":
                  "calc(34vw - max(20px, calc((100vw - 1400px) / 2 + 20px)))",
              }}
            >
              {/* Base text: visible outside the red background */}
              <h2 className="text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
                Everyday essentials planned inside a complete estate community.
              </h2>

              {/* White overlay: visible only on the red background area */}
              <h2
                aria-hidden="true"
                className="absolute left-0 top-0 hidden text-3xl font-semibold leading-tight text-white md:text-5xl lg:block"
                style={{
                  clipPath: "inset(0 calc(100% - var(--redTextClip)) 0 0)",
                }}
              >
                Everyday essentials planned inside a complete estate community.
              </h2>
            </div>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            Rosemont is planned with education, healthcare, daily convenience,
            and inclusive religious facilities so families can enjoy a more
            complete and connected residential environment.
          </p>
        </div>

        <div className="h-px w-full bg-[#4a0a0a]/15 lg:bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.18)_34%,rgba(56,10,10,0.15)_34%,rgba(56,10,10,0.15)_100%)]" />

        <div className="mt-12 grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[560px] overflow-hidden bg-[#4a0a0a] lg:min-h-[640px]">
            <Image
              src="/other/community-facilities.png"
              alt="Anondo Rosemont Estate community facilities"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.04)_0%,rgba(56,10,10,0.88)_100%)]" />
            <div className="absolute inset-0 border border-white/5" />

            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
              <span className="mb-7 block h-px w-24 bg-white" />

              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/55">
                Complete Community Planning
              </p>

              <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight md:text-5xl">
                Facilities that support family life across generations.
              </h3>

              <div className="mt-8 grid grid-cols-3 border-t border-white/15 pt-7">
                {[
                  ["03", "Core Services"],
                  ["03", "Worship Spaces"],
                  ["01", "Estate Vision"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-r border-white/15 px-4 first:pl-0 last:border-r-0 last:pr-0"
                  >
                    <p className="text-2xl font-semibold leading-none">
                      {value}
                    </p>

                    <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/55">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="divide-y divide-[#4a0a0a]/15">
            {primaryFacilities.map((item, index) => (
              <article
                key={item.title}
                className="group grid gap-7 p-7 transition duration-500 hover:bg-[#f8f3ec] md:p-9 lg:grid-cols-[92px_1fr]"
              >
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-[#4a0a0a]">
                    0{index + 1}
                  </p>

                  <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-8 text-[#6b5d57]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}

            <div className="p-7 md:p-9">
              <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/55">
                    Religious and Cultural Harmony
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-3xl">
                    Inclusive places of worship for a balanced community.
                  </h3>
                </div>

                <span className="hidden h-px w-24 bg-[#4a0a0a]/35 md:block" />
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {religiousFacilities.map((item, index) => (
                  <article
                    key={item.title}
                    className="group border border-[#4a0a0a]/15 bg-[#f8f3ec] p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#4a0a0a] hover:text-white"
                  >
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-white/50">
                        0{index + 4}
                      </p>

                      <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
                    </div>

                    <h4 className="text-xl font-semibold leading-tight text-[#4a0a0a] transition duration-300 group-hover:text-white">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#6b5d57] transition duration-300 group-hover:text-white/72">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}