export function SectionIntro({ eyebrow, title, copy, light }) {
  return (
    <div>
      <p
        className={`mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] ${
          light ? "text-white" : "text-[#4a0a0a]"
        }`}
      >
        <span className="h-px w-10 bg-current" />
        {eyebrow}
      </p>

      <h2
        className={`max-w-3xl text-3xl font-semibold leading-[1.04] md:text-5xl lg:text-6xl ${
          light ? "text-white" : "text-[#4a0a0a]"
        }`}
      >
        {title}
      </h2>

      {copy && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${
            light ? "text-white/70" : "text-[#6b5d57]"
          }`}
        >
          {copy}
        </p>
      )}
    </div>
  );
}
