export default function EstateStoryHero() {
  return (
    <div className="relative border-b border-[#4a0a0a]/15 py-16 md:py-24 lg:py-32">
      <div className="absolute right-0 top-0 hidden h-full w-[30%] bg-[#4a0a0a] lg:block" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.26em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              The Estate Story
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.98] text-[#4a0a0a] md:text-6xl lg:text-7xl">
              The Story of Anondo Rosemont Estate
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b5d57]">
              A vision of elegant estate living inspired by nature,
              architecture, and community heritage.
            </p>
          </div>

          <div className="border border-white/15 bg-[#4a0a0a] p-7 text-white shadow-2xl shadow-[#4a0a0a]/20">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-white/60">
              Motto
            </p>
            <p className="mt-4 text-3xl font-semibold leading-tight">
              Elegantia in Aeternum
            </p>
            <p className="mt-3 leading-8 text-white/70">
              Elegance Forever, planned as a foundation for heritage, community,
              and long-term estate value.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border border-[#4a0a0a]/15 bg-white shadow-2xl shadow-[#4a0a0a]/10 md:grid-cols-3">
          {[
            ["807", "Bigha Estate"],
            ["60 ft", "Grand Avenue"],
            ["Villa", "Only Township"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-[#4a0a0a]/15 p-7 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-4xl font-bold leading-none text-[#4a0a0a]">
                {value}
              </p>
              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.2em] text-[#6b5d57]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
