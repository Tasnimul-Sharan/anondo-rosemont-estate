const estatePrinciples = [
  {
    title: "European Inspired Living",
    text: "Classical estate character, architectural harmony, and landscaped surroundings shaped for Bangladesh.",
  },
  {
    title: "Low Density Community",
    text: "Controlled plot distribution, open spaces, privacy, and a peaceful residential environment for every family.",
  },
  {
    title: "Legacy Focused Development",
    text: "A long-term residential estate designed for homeowners, investors, NRBs, and future generations.",
  },
];

export default function EstatePrinciples() {
  return (
    <div className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
            <span className="h-px w-10 bg-current" />
            Estate Principles
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
            The Principles Behind Rosemont
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {estatePrinciples.map((item) => (
            <article
              key={item.title}
              className="group border border-[#4a0a0a]/15 bg-[#f8f3ec] p-8 shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:bg-[#4a0a0a] hover:text-white"
            >
              <span className="mb-8 block h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
              <h3 className="text-2xl font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="mt-5 leading-8 text-[#6b5d57] transition group-hover:text-white/72">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
