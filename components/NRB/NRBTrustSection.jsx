"use client";

import { FaShieldAlt, FaFileSignature, FaMapMarkedAlt } from "react-icons/fa";

export default function NRBTrustSection() {
  const features = [
    {
      icon: <FaMapMarkedAlt />,
      title: "Ready Land",
      desc: "Physically available plots — no future promises or uncertainty.",
    },
    {
      icon: <FaFileSignature />,
      title: "Instant Registration",
      desc: "Buy today and complete legal registration without delays.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Zero Risk Investment",
      desc: "Verified land with full documentation and transparency.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Why Investors Trust Anondo Bhubon
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Buy from anywhere in the world with complete legal assurance and zero
          hassle.
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            "No development risk",
            "Ready land",
            "Full documentation support",
            "Buy from abroad",
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm font-medium bg-white border rounded-full shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-7 bg-white rounded-2xl border hover:border-primary/40 hover:shadow-xl transition duration-300"
            >
              {/* ICON */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-xl mb-4 mx-auto">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
