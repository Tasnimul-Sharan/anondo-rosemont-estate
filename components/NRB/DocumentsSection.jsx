"use client";
import {
  FaPassport,
  FaIdCard,
  FaCamera,
  FaFileSignature,
} from "react-icons/fa";

import { FaFileAlt } from "react-icons/fa";
const docs = [
  {
    title: "Passport Copy",
    desc: "Clear copy of your valid passport for verification purposes.",
    icon: FaPassport,
  },
  {
    title: "NID (Optional)",
    desc: "National ID card copy (optional but recommended).",
    icon: FaIdCard,
  },
  {
    title: "Photographs",
    desc: "Recent passport size photographs with white background.",
    icon: FaCamera,
  },
  {
    title: "Power of Attorney",
    desc: "Document if someone is acting on your behalf.",
    icon: FaFileSignature,
  },
];

export default function DocumentsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Top label */}
        <p className="text-primary font-medium mb-2 tracking-wide">
          GET STARTED
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Required Documents
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mb-14 max-w-2xl mx-auto">
          Please prepare the following documents for a smooth and hassle-free
          property registration process.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {docs.map((doc, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Number */}
              <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="flex justify-center mt-12 mb-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 text-primary text-3xl group-hover:scale-110 transition">
                  {(() => {
                    const Icon = doc.icon;
                    return <Icon />;
                  })()}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {doc.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-1 bg-primary mx-auto mb-4 rounded"></div>

              {/* Bottom Description Box */}
              <div className="bg-green-50 px-4 py-6 text-sm text-gray-600">
                {doc.desc}
              </div>

              {/* Bottom Curve Accent */}
              {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-primary rounded-t-full flex items-center justify-center text-white">
                ⬇
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
