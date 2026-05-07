"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "Can I buy land from abroad?",
    a: "Yes, the entire process can be completed remotely through online consultation and legal support.",
  },
  {
    q: "Is registration possible without visiting Bangladesh?",
    a: "Yes, you can complete registration using Power of Attorney without physically visiting.",
  },
  {
    q: "Is the land legally safe?",
    a: "All plots are verified with complete documentation and ready for immediate registration.",
  },
  {
    q: "How do I make payment from abroad?",
    a: "We support international bank transfer and guided payment assistance for NRB buyers.",
  },
  {
    q: "Can my family visit the site on my behalf?",
    a: "Yes, your family members in Bangladesh can visit and coordinate with our team.",
  },
  {
    q: "How long does the registration process take?",
    a: "Registration can be completed within a very short time after document verification.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Everything you need to know before investing from abroad
        </p>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-md border-primary/30"
                    : "bg-white/70 backdrop-blur border-gray-200 hover:border-primary/30"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <h3 className="font-semibold text-lg text-gray-800">
                    {faq.q}
                  </h3>

                  {/* ICON WRAPPER */}
                  <div className="relative w-5 h-5 flex items-center justify-center">
                    {/* PLUS */}
                    <FaPlus
                      className={`absolute transition-all duration-300 ${
                        isOpen
                          ? "opacity-0 scale-75 rotate-90"
                          : "opacity-100 scale-100 rotate-0 text-gray-500"
                      }`}
                    />

                    {/* MINUS */}
                    <FaMinus
                      className={`absolute transition-all duration-300 ${
                        isOpen
                          ? "opacity-100 scale-100 rotate-0 text-primary"
                          : "opacity-0 scale-75 -rotate-90"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
