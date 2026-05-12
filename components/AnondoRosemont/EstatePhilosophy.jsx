import { storySections } from "@/data/rosemontSite";

const philosophyItems = [
  {
    title: "Low Density Living",
    text: "Spacious plots designed to ensure privacy, comfort, and a balanced estate environment.",
  },
  {
    title: "Elevated Plot Design",
    text: "Homes are elevated 18-24 inches above road level for drainage, visibility, and durability.",
  },
  {
    title: "Open Front Concept",
    text: "Front lawns remain open with pillar-based demarcation, creating a continuous elegant streetscape.",
  },
];

export default function EstatePhilosophy() {
  const philosophy = storySections.find(
    (section) => section.title === "Estate Vision and Design Philosophy",
  );

  if (!philosophy) return null;

  return (
    <div className="bg-[#f8f3ec] py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#4a0a0a]">
            <span className="h-px w-10 bg-current" />
            Design Philosophy
          </p>
          <h2 className="text-4xl font-semibold leading-tight text-[#4a0a0a] md:text-6xl">
            Estate Vision & Design Philosophy
          </h2>
          <p className="mt-6 leading-8 text-[#6b5d57]">
            {philosophy.paragraphs.join(" ")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {philosophyItems.map((item, index) => (
            <article
              key={item.title}
              className="group border border-[#4a0a0a]/15 bg-white p-7 shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-2 hover:bg-[#4a0a0a] hover:text-white"
            >
              <p className="mb-7 text-xs font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45 transition group-hover:text-white/50">
                {String(index + 1).padStart(2, "0")}
              </p>
              <span className="mb-7 block h-px w-20 origin-left scale-x-[0.35] bg-current transition-transform duration-700 group-hover:scale-x-100" />
              <h3 className="text-2xl font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-[#6b5d57] transition group-hover:text-white/72">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
