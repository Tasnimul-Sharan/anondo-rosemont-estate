import { nrbOpportunity } from "@/data/rosemontSite";

export default function NrbOpportunity() {
  return (
    <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid overflow-hidden border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/12 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="bg-[#4a0a0a] p-7 text-white md:p-10 lg:p-12">
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
              <span className="h-px w-10 bg-current" />
              NRB Special Opportunity
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              A Secure Homecoming Investment
            </h2>
            <p className="mt-6 leading-8 text-white/72">
              Rosemont is designed for global Bangladeshis who want a trusted,
              prestigious, and low-complexity property in their homeland.
            </p>

            <div className="mt-10 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["807", "Bigha Estate"],
                ["Villa", "Ready-Built Model"],
                ["NRB", "Ownership Confidence"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold leading-none text-white">
                    {value}
                  </p>
                  <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="divide-y divide-[#4a0a0a]/15">
            {nrbOpportunity.map((item, index) => (
              <article
                key={item.title}
                className="group grid gap-6 p-7 transition duration-500 hover:bg-[#f8f3ec] md:p-10 lg:grid-cols-[82px_1fr]"
              >
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]/45 transition duration-300 group-hover:text-[#4a0a0a]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <span className="mt-6 block h-px w-16 origin-left scale-x-[0.35] bg-[#4a0a0a] transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-[#4a0a0a] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#6b5d57]">{item.text}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.items.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 leading-7 text-[#6b5d57]"
                      >
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 bg-[#4a0a0a]" />
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
    </section>
  );
}
