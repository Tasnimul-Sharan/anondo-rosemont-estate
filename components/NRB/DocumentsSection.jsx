"use client";

import {
  FaPassport,
  FaIdCard,
  FaCamera,
  FaFileSignature,
} from "react-icons/fa";

const docs = [
  {
    title: "Passport Copy",
    desc: "Clear copy of your valid passport for primary verification.",
    icon: FaPassport,
  },
  {
    title: "NID Copy",
    desc: "National ID copy, if available, for additional identity support.",
    icon: FaIdCard,
  },
  {
    title: "Photographs",
    desc: "Recent passport-size photographs with clear background.",
    icon: FaCamera,
  },
  {
    title: "Power of Attorney",
    desc: "Required if a representative will act on your behalf in Bangladesh.",
    icon: FaFileSignature,
  },
];

export default function DocumentsSection() {
  return (
    <section className="relative overflow-hidden bg-off_white py-24 text-soft_black">
      <div className="absolute right-0 top-0 h-full w-[30%] bg-primary/5" />

      <div className="custom-container relative z-10 mx-auto text-center">
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-10 bg-primary" />
          Required Documents
          <span className="h-px w-10 bg-primary" />
        </p>

        <h2 className="text-3xl font-semibold leading-tight text-primary md:text-5xl">
          Prepare Documents for a Smooth Process
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-soft_black/70 md:text-lg">
          Our team will guide NRB buyers through the documentation process for
          booking, verification, and registration support.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {docs.map((doc, i) => {
            const Icon = doc.icon;

            return (
              <div
                key={doc.title}
                className="group relative overflow-hidden border border-primary/12 bg-white p-7 shadow-soft transition duration-500 hover:-translate-y-1 hover:bg-primary hover:shadow-rosemont"
              >
                <div className="absolute right-5 top-5 text-xs font-bold uppercase tracking-[0.25em] text-primary/25 transition group-hover:text-off_white/35">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center border border-primary/15 bg-primary/10 text-3xl text-primary transition duration-500 group-hover:border-off_white/20 group-hover:bg-off_white/10 group-hover:text-off_white">
                  <Icon />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-primary transition group-hover:text-off_white">
                  {doc.title}
                </h3>

                <div className="mx-auto my-5 h-px w-12 bg-primary transition group-hover:bg-off_white" />

                <p className="text-sm leading-7 text-soft_black/60 transition group-hover:text-off_white/75">
                  {doc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
