// import Image from "next/image";

// const investmentStats = [
//   { value: "807", label: "Bigha Master Plan" },
//   { value: "Villa", label: "Built Property Model" },
//   { value: "NRB", label: "Secure Ownership" },
// ];

// const investmentPillars = [
//   {
//     title: "The Value of Land Ownership",
//     text: "Rosemont combines permanent land ownership with a fully constructed villa, creating both lifestyle value and long-term asset strength.",
//   },
//   {
//     title: "Villa Community Advantage",
//     text: "Low-density estate living, architectural harmony, green surroundings, and premium amenities make villa communities highly desirable.",
//   },
//   {
//     title: "Purbachal Growth Potential",
//     text: "Located near the expanding Purbachal corridor, Rosemont benefits from future infrastructure, connectivity, and regional appreciation.",
//   },
//   {
//     title: "A Secure Investment",
//     text: "A gated estate environment, developer-built villas, organized planning, and strong infrastructure reduce uncertainty for investors and NRBs.",
//   },
// ];

// const investmentAdvantages = [
//   "Large-scale master planning over 807 bigha",
//   "Prime location near Purbachal New Town",
//   "Low-density villa community design",
//   "High-quality residential infrastructure",
//   "Comprehensive lifestyle amenities",
//   "Secure gated environment",
//   "Strong developer reputation",
//   "Ideal for homeowners and NRB investors",
// ];

// export default function InvestmentOpportunity() {
//   return (
//     <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
//       <div className="absolute right-0 top-0 hidden h-full w-[32%] bg-[#5a0c0c] lg:block" />

//       <div className="relative z-10 mx-auto max-w-[1400px] px-5">
//         <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
//           <div>
//             <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#5a0c0c]">
//               <span className="h-px w-10 bg-current" />
//               Investment Opportunity
//             </p>

//             <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-[#5a0c0c] md:text-6xl">
//               A Secure Investment for the Future
//             </h2>
//           </div>

//           <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg lg:text-white/75">
//             Anondo Rosemont Estate represents a rare opportunity to invest in a
//             carefully planned villa community near Purbachal. It combines land
//             ownership, developer-built residences, secure infrastructure, and
//             long-term growth potential.
//           </p>
//         </div>

//         <div className="mt-14 grid border border-[#5a0c0c]/15 bg-white shadow-2xl shadow-[#5a0c0c]/12 lg:grid-cols-[0.9fr_1.1fr]">
//           <div className="relative min-h-[520px] overflow-hidden bg-[#5a0c0c]">
//             <Image
//               src="/10 katha villa/MAHI Final.jpeg"
//               alt="Anondo Rosemont Estate investment"
//               fill
//               sizes="(max-width: 1024px) 100vw, 45vw"
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.18)_0%,rgba(56,10,10,0.88)_100%)]" />

//             <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
//               <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-white/60">
//                 Land. Villa. Legacy.
//               </p>

//               <h3 className="max-w-md text-3xl font-semibold leading-tight md:text-5xl">
//                 Real estate value shaped by planning, privacy, and permanence.
//               </h3>

//               <div className="mt-10 grid border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3">
//                 {investmentStats.map((stat) => (
//                   <div
//                     key={stat.label}
//                     className="border-b border-white/15 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
//                   >
//                     <p className="text-3xl font-bold">{stat.value}</p>
//                     <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/58">
//                       {stat.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="p-7 md:p-10">
//             <div className="grid gap-5 md:grid-cols-2">
//               {investmentPillars.map((item, index) => (
//                 <article
//                   key={item.title}
//                   className="group border border-[#5a0c0c]/15 bg-[#f8f3ec] p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#5a0c0c] hover:text-white"
//                 >
//                   <div className="mb-7 flex items-center justify-between gap-5">
//                     <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#5a0c0c]/45 transition group-hover:text-white/50">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>

//                     <span className="h-px w-14 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//                   </div>

//                   <h4 className="text-xl font-semibold leading-tight">
//                     {item.title}
//                   </h4>

//                   <p className="mt-4 leading-8 text-[#6b5d57] transition group-hover:text-white/72">
//                     {item.text}
//                   </p>
//                 </article>
//               ))}
//             </div>

//             <div className="mt-8 border-t border-[#5a0c0c]/15 pt-8">
//               <h3 className="text-2xl font-semibold text-[#5a0c0c]">
//                 Key Investment Advantages
//               </h3>

//               <ul className="mt-6 grid gap-3 md:grid-cols-2">
//                 {investmentAdvantages.map((item) => (
//                   <li
//                     key={item}
//                     className="flex gap-3 leading-7 text-[#6b5d57]"
//                   >
//                     <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#5a0c0c]" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>

//               <button className="group mt-8 inline-flex items-center gap-4 bg-[#5a0c0c] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#241818]">
//                 Why Invest
//                 <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import Image from "next/image";

const investmentStats = [
  { value: "807", label: "Bigha Master Plan" },
  { value: "Villa", label: "Built Property Model" },
  { value: "NRB", label: "Secure Ownership" },
];

const investmentPillars = [
  {
    title: "The Value of Land Ownership",
    text: "Rosemont combines permanent land ownership with a fully constructed villa, creating both lifestyle value and long-term asset strength.",
  },
  {
    title: "Villa Community Advantage",
    text: "Low-density estate living, architectural harmony, green surroundings, and premium amenities make villa communities highly desirable.",
  },
  {
    title: "Purbachal Growth Potential",
    text: "Located near the expanding Purbachal corridor, Rosemont benefits from future infrastructure, connectivity, and regional appreciation.",
  },
  {
    title: "A Secure Investment",
    text: "A gated estate environment, developer-built villas, organized planning, and strong infrastructure reduce uncertainty for investors and NRBs.",
  },
];

const investmentAdvantages = [
  "Large-scale master planning over 807 bigha",
  "Prime location near Purbachal New Town",
  "Low-density villa community design",
  "High-quality residential infrastructure",
  "Comprehensive lifestyle amenities",
  "Secure gated environment",
  "Strong developer reputation",
  "Ideal for homeowners and NRB investors",
];

const whyInvestDetails = [
  {
    title: "Land Ownership with Built Value",
    text: "Unlike typical plot-focused housing projects, Rosemont delivers land ownership together with a constructed villa. This gives buyers a tangible residential asset with immediate lifestyle value and stronger long-term appeal.",
    points: [
      "Private plot ownership",
      "Developer-built duplex villa",
      "Reduced construction uncertainty",
      "Better neighborhood consistency",
    ],
  },
  {
    title: "Planned Scarcity and Low Density",
    text: "As cities grow denser, well-planned low-density villa communities become increasingly rare. Rosemont's structured plot distribution, open spaces, and estate amenities support long-term desirability.",
    points: [
      "807 bigha master-planned scale",
      "Controlled villa community density",
      "Large green and recreational zones",
      "Premium estate environment",
    ],
  },
  {
    title: "Purbachal Growth Corridor",
    text: "Rosemont's proximity to Purbachal New Town positions the estate near one of Bangladesh's most important future urban development zones while preserving a calmer residential atmosphere.",
    points: [
      "Near Purbachal New Town",
      "Future infrastructure potential",
      "Urban accessibility with natural setting",
      "Strong regional appreciation outlook",
    ],
  },
  {
    title: "NRB-Friendly Ownership",
    text: "For Non-Resident Bangladeshis, Rosemont reduces the complexity of remote property ownership by offering ready-built villas, organized infrastructure, and a secure estate environment.",
    points: [
      "Ready-built villa model",
      "Secure gated community",
      "CCTV-backed estate planning",
      "Lower remote management burden",
    ],
  },
];

export default function InvestmentOpportunity() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
        <div className="absolute right-0 top-0 hidden h-full w-[32%] bg-[#5a0c0c] lg:block" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#5a0c0c]">
                <span className="h-px w-10 bg-current" />
                Investment Opportunity
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] text-[#5a0c0c] md:text-6xl">
                A Secure Investment for the Future
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg lg:bg-[linear-gradient(90deg,#6b5d57_0%,#6b5d57_51%,rgba(255,255,255,0.78)_47%,rgba(255,255,255,0.78)_100%)] lg:bg-clip-text lg:text-transparent">
              Anondo Rosemont Estate represents a rare opportunity to invest in
              a carefully planned villa community near Purbachal. It combines
              land ownership, developer-built residences, secure infrastructure,
              and long-term growth potential.
            </p>
          </div>

          <div className="mt-14 grid border border-[#5a0c0c]/15 bg-white shadow-2xl shadow-[#5a0c0c]/12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[520px] overflow-hidden bg-[#5a0c0c]">
              <Image
                src="/10 katha villa/MAHI Final.jpeg"
                alt="Anondo Rosemont Estate investment"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.18)_0%,rgba(56,10,10,0.88)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-10">
                <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-white/60">
                  Land. Villa. Legacy.
                </p>

                <h3 className="max-w-md text-3xl font-semibold leading-tight md:text-5xl">
                  Real estate value shaped by planning, privacy, and permanence.
                </h3>

                <div className="mt-10 grid border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-3">
                  {investmentStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="border-b border-white/15 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                    >
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/58">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                {investmentPillars.map((item, index) => (
                  <article
                    key={item.title}
                    className="group border border-[#5a0c0c]/15 bg-[#f8f3ec] p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#5a0c0c] hover:text-white"
                  >
                    <div className="mb-7 flex items-center justify-between gap-5">
                      <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#5a0c0c]/45 transition group-hover:text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-14 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
                    </div>

                    <h4 className="text-xl font-semibold leading-tight">
                      {item.title}
                    </h4>

                    <p className="mt-4 leading-8 text-[#6b5d57] transition group-hover:text-white/72">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8 border-t border-[#5a0c0c]/15 pt-8">
                <h3 className="text-2xl font-semibold text-[#5a0c0c]">
                  Key Investment Advantages
                </h3>

                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {investmentAdvantages.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-7 text-[#6b5d57]"
                    >
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#5a0c0c]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setOpen(true)}
                  className="group mt-8 inline-flex items-center gap-4 bg-[#5a0c0c] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[#241818]"
                >
                  Why Invest
                  <span className="h-px w-12 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[999] overflow-y-auto bg-[#241818]/70 px-5 py-8 backdrop-blur-sm">
          <div className="mx-auto max-w-[1200px] overflow-hidden border border-white/15 bg-[#f8f3ec] shadow-2xl shadow-black/30">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-[#5a0c0c] p-7 text-white md:p-10">
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
                  <span className="h-px w-10 bg-current" />
                  Why Invest
                </p>

                <h3 className="text-3xl font-semibold leading-tight md:text-5xl">
                  Rosemont is built for lifestyle, legacy, and long-term asset
                  confidence.
                </h3>

                <p className="mt-6 leading-8 text-white/72">
                  The investment strength of Rosemont comes from combining land
                  ownership, completed villas, controlled planning, future
                  regional growth, and a secure gated estate model.
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="group mt-10 inline-flex items-center gap-4 border border-white/25 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#5a0c0c]"
                >
                  Close
                  <span className="h-px w-10 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
                </button>
              </div>

              <div className="divide-y divide-[#5a0c0c]/15">
                {whyInvestDetails.map((item, index) => (
                  <article
                    key={item.title}
                    className="group grid gap-6 p-7 md:p-8 lg:grid-cols-[70px_1fr]"
                  >
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#5a0c0c]/45 group-hover:text-[#5a0c0c]">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <span className="mt-5 block h-px w-12 origin-left scale-x-[0.35] bg-[#5a0c0c] transition-transform duration-700 group-hover:scale-x-100" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-semibold leading-tight text-[#5a0c0c]">
                        {item.title}
                      </h4>

                      <p className="mt-4 leading-8 text-[#6b5d57]">
                        {item.text}
                      </p>

                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 leading-7 text-[#6b5d57]"
                          >
                            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#5a0c0c]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
