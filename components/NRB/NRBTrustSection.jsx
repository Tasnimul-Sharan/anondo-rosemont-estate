"use client";

import { FaShieldAlt, FaFileSignature, FaMapMarkedAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Prime Estate Location",
    desc: "A planned villa estate near Purbachal with strong future growth potential.",
  },
  {
    icon: <FaFileSignature />,
    title: "Documentation Support",
    desc: "Guided process for legal papers, ownership verification, and registration support.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Investment",
    desc: "A gated estate environment designed for long-term ownership confidence.",
  },
];

export default function NRBTrustSection() {
  return (
    <section className="relative overflow-hidden bg-off_white py-24 text-soft_black">
      <div className="absolute left-0 top-0 hidden h-full w-[28%] bg-primary lg:block" />

      <div className="custom-container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-10 bg-primary" />
            NRB Trust Advantage
            <span className="h-px w-10 bg-primary" />
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Why Global Bangladeshis Choose Rosemont
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-soft_black/70 md:text-lg">
            A refined investment opportunity designed for NRBs who want a secure
            home, future asset, and meaningful address in Bangladesh.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Villa-Based Estate",
            "Near Purbachal",
            "Legal Guidance",
            "Remote Assistance",
          ].map((item) => (
            <span
              key={item}
              className="border border-primary/15 bg-white px-5 py-2 text-sm font-semibold text-primary shadow-soft"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={item.title}
              className="group border border-primary/12 bg-white p-8 shadow-soft transition duration-500 hover:-translate-y-1 hover:bg-primary hover:shadow-rosemont"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center border border-primary/15 bg-primary/10 text-2xl text-primary transition duration-500 group-hover:border-off_white/20 group-hover:bg-off_white/10 group-hover:text-off_white">
                  {item.icon}
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary/35 transition group-hover:text-off_white/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-primary transition group-hover:text-off_white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-soft_black/60 transition group-hover:text-off_white/70">
                {item.desc}
              </p>

              <div className="mt-7 h-px w-16 origin-left scale-x-50 bg-primary transition duration-700 group-hover:scale-x-100 group-hover:bg-off_white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
