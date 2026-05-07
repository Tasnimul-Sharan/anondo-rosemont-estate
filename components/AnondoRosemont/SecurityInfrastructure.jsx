import { securityInfrastructure } from "@/data/rosemontSite";

export function SecurityInfrastructure() {
  return (
    <section className="relative overflow-hidden bg-[#721213] py-16 text-white md:py-24 lg:py-32">
      <div className="absolute left-0 top-0 hidden h-full w-[28%] bg-black/12 lg:block" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-5">
        <div className="grid gap-10 border-b border-white/15 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
              <span className="h-px w-10 bg-current" />
              Security and Infrastructure
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              A Secure Estate Planned for Daily Confidence
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-white/70 md:text-lg">
            Rosemont combines controlled entry, CCTV surveillance, professional
            security, utility systems, roads, lighting, and drainage into a
            complete infrastructure framework.
          </p>
        </div>

        <div className="divide-y divide-white/15">
          {securityInfrastructure.map((item, index) => (
            <article
              key={item.title}
              className="group grid gap-8 py-10 lg:grid-cols-[130px_0.85fr_1.15fr] lg:items-start"
            >
              <div className="flex items-center gap-5">
                <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-white/45 transition duration-300 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-14 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100 lg:hidden" />
              </div>

              <div>
                <span className="mb-6 hidden h-px w-20 origin-left scale-x-[0.35] bg-white transition-transform duration-700 ease-out group-hover:scale-x-100 lg:block" />
                <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 leading-8 text-white/68">{item.text}</p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {item.items.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 leading-7 text-white/72"
                  >
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-white" />
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
