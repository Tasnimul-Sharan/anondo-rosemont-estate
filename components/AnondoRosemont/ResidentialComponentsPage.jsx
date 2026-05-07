// // import { ListSection } from "@/components/ListSection";

import { residentialComponents } from "@/data/rosemontSite";

// import { residentialComponents } from "@/data/rosemontSite";
// import { ListSection } from "./ListSection";

// export default function ResidentialComponentsPage() {
//   return (
//     <section className="bg-[#f8f3ec] py-16 md:py-24">
//       <div className="mx-auto grid max-w-[1180px] gap-7 px-5 lg:grid-cols-2">
//         {residentialComponents.map((section) => (
//           <ListSection
//             key={section.title}
//             title={section.title}
//             copy={section.text}
//             items={section.items}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

export default function ResidentialComponentsPage() {
  return (
    <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="mb-12 grid gap-8 border-b border-[#4a0a0a]/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Residential Components
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
              Complete Villa Residences with Estate-Level Detail
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            Rosemont brings land ownership, developer-built villas, garage
            planning, garden landscape, and optional leisure facilities into one
            organized residential model.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {residentialComponents.map((item, index) => (
            <article
              key={item.title}
              className={`group border border-[#4a0a0a]/15 p-7 shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4a0a0a]/18 ${
                index === 0
                  ? "bg-[#4a0a0a] text-white lg:col-span-2"
                  : "bg-white/80 text-[#241818]"
              }`}
            >
              <div className="mb-8 flex items-center justify-between gap-6">
                <p
                  className={`text-xs font-extrabold uppercase tracking-[0.22em] ${
                    index === 0 ? "text-white/55" : "text-[#4a0a0a]/55"
                  }`}
                >
                  {item.eyebrow}
                </p>
                <span className="h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </div>

              <h3
                className={`text-2xl font-semibold leading-tight md:text-3xl ${
                  index === 0 ? "text-white" : "text-[#4a0a0a]"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`mt-5 leading-8 ${
                  index === 0 ? "text-white/72" : "text-[#6b5d57]"
                }`}
              >
                {item.text}
              </p>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {item.items.map((point) => (
                  <li
                    key={point}
                    className={`flex gap-3 leading-7 ${
                      index === 0 ? "text-white/72" : "text-[#6b5d57]"
                    }`}
                  >
                    <span
                      className={`mt-[10px] h-1.5 w-1.5 shrink-0 ${
                        index === 0 ? "bg-white" : "bg-[#4a0a0a]"
                      }`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
