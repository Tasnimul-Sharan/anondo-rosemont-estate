export function ListSection({ title, copy, items, dark }) {
  return (
    <section
      className={`group border p-7 md:p-10 ${
        dark
          ? "border-white/15 bg-white/10 text-white"
          : "border-[#4a0a0a]/15 bg-white/75 text-[#241818] shadow-xl shadow-[#4a0a0a]/10"
      }`}
    >
      <span className="mb-8 block h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />

      <h2
        className={`text-2xl font-semibold leading-tight md:text-4xl ${dark ? "text-white" : "text-[#4a0a0a]"}`}
      >
        {title}
      </h2>

      {copy && (
        <p
          className={`mt-5 leading-8 ${dark ? "text-white/70" : "text-[#6b5d57]"}`}
        >
          {copy}
        </p>
      )}

      {items?.length > 0 && (
        <ul className="mt-6 grid gap-3">
          {items.map((item) => (
            <li
              key={item}
              className={`flex gap-3 leading-8 ${dark ? "text-white/72" : "text-[#6b5d57]"}`}
            >
              <span
                className={`mt-[13px] h-1.5 w-1.5 shrink-0 ${dark ? "bg-white" : "bg-[#4a0a0a]"}`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
