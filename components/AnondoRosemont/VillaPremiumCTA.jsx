"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiCalendar, FiDownload } from "react-icons/fi";

const ctaFacts = [
  { value: "5", label: "Katha Duplex" },
  { value: "10", label: "Katha Villa" },
  { value: "20", label: "Katha Estate" },
];

export default function VillaPremiumCTA() {
  return (
    <section className="relative overflow-hidden bg-[#4a0a0a] py-16 text-white md:py-20 lg:py-24">
      <Image
        src="/10 katha villa/10-katha.jpg"
        alt="Anondo Rosemont Estate premium villa"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#241818]/55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,10,10,0.88)_0%,rgba(74,10,10,0.68)_46%,rgba(74,10,10,0.28)_100%)]" />

      <div className="custom-container relative z-10 mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/65">
              <span className="h-px w-10 bg-current" />
              Premium Villa Consultation
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              Choose the villa scale that fits your family legacy.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Book a private consultation to compare 5, 10, and 20 katha villa
              formats, floor planning, garden options, and estate ownership
              details.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-4 bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#4a0a0a] transition duration-300 hover:bg-[#f8f3ec]"
              >
                <FiCalendar size={18} />
                Book Visit
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/ROSEMONT BROCHURE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-4 border border-white/35 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-[#4a0a0a]"
              >
                <FiDownload size={18} />
                Brochure
                <span className="h-px w-9 origin-left scale-x-[0.45] bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>

          <div className="grid border border-white/16 bg-white/10 backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
            {ctaFacts.map((fact) => (
              <div
                key={fact.label}
                className="border-b border-white/15 p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b lg:border-r-0 lg:last:border-b-0"
              >
                <p className="text-4xl font-semibold leading-none">
                  {fact.value}
                </p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.2em] text-white/58">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
