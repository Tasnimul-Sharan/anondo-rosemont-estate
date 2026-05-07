export function FeatureGrid({ items, columns = "three", dark }) {
  return (
    <div
      className={`grid gap-6 ${columns === "two" ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
    >
      {items.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className={`group min-h-[210px] border p-7 shadow-xl transition duration-500 hover:-translate-y-1 ${
            dark
              ? "border-white/15 bg-white/10 text-white hover:bg-white hover:text-[#4a0a0a]"
              : "border-[#4a0a0a]/15 bg-white/75 text-[#241818] shadow-[#4a0a0a]/10 hover:bg-[#4a0a0a] hover:text-white"
          }`}
        >
          <p
            className={`mb-6 text-xs font-extrabold uppercase tracking-[0.2em] ${
              dark
                ? "text-white/55 group-hover:text-[#4a0a0a]/55"
                : "text-[#4a0a0a]/55 group-hover:text-white/55"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </p>

          <span className="mb-7 block h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
          <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>

          {item.text && (
            <p
              className={`mt-4 leading-8 ${
                dark
                  ? "text-white/70 group-hover:text-[#6b5d57]"
                  : "text-[#6b5d57] group-hover:text-white/72"
              }`}
            >
              {item.text}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
