"use client";

import { motion } from "framer-motion";
import { FaCity, FaShieldAlt, FaUsers, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket />,
    title: "Future-Proof",
    desc: "Modern planning and infrastructure designed for long-term value and sustainability.",
  },
  {
    icon: <FaCity />,
    title: "Residence",
    desc: "Carefully planned residential environment ensuring comfort, elegance, and privacy.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    desc: "A vibrant and secure community where families grow and connect.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trustworthy",
    desc: "Reliable development backed by transparency, quality, and long-term commitment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          We deliver more than just land — we create sustainable, future-ready
          communities built on trust and excellence.
        </p>

        <div className="w-20 h-[3px] bg-primary mx-auto mb-12"></div>
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl mb-5 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
