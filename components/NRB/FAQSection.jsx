"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "Can I buy a Rosemont property from abroad?",
    a: "Yes. NRB buyers can start the process remotely through online consultation, document sharing, and guided coordination with our team.",
  },
  {
    q: "Is registration possible without visiting Bangladesh?",
    a: "In many cases, registration-related work may be coordinated through proper authorization or Power of Attorney, depending on legal requirements.",
  },
  {
    q: "Is the property documentation supported?",
    a: "Our team provides document guidance and coordinates the necessary papers for buyer review and legal verification.",
  },
  {
    q: "How can I make payment from abroad?",
    a: "Our support team can guide NRB buyers regarding available payment procedures and documentation required for international coordination.",
  },
  {
    q: "Can my family visit the site on my behalf?",
    a: "Yes. Your family members in Bangladesh can visit the project site and coordinate directly with our team.",
  },
  {
    q: "Can I book a video consultation?",
    a: "Yes. NRB buyers can request a video consultation to discuss plot category, villa options, documentation, and next steps.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-off_white py-24 text-soft_black">
      <div className="absolute left-0 top-0 h-full w-[24%] bg-primary/5" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

      <div className="custom-container relative z-10 mx-auto">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-10 bg-primary" />
            NRB FAQ
            <span className="h-px w-10 bg-primary" />
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-soft_black/70 md:text-lg">
            Essential information for NRB investors planning to own a Rosemont
            property in Bangladesh.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = active === i;

            return (
              <div
                key={faq.q}
                className={`border transition-all duration-500 ${
                  isOpen
                    ? "border-primary/25 bg-white shadow-soft"
                    : "border-primary/10 bg-white/70 backdrop-blur hover:border-primary/25"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 p-6 text-left"
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={`mt-1 text-xs font-bold uppercase tracking-[0.22em] transition ${
                        isOpen ? "text-primary" : "text-primary/35"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-lg font-semibold leading-snug text-primary md:text-xl">
                      {faq.q}
                    </h3>
                  </div>

                  <div className="relative flex h-9 w-9 min-w-[36px] items-center justify-center border border-primary/15 bg-primary/5 text-primary">
                    <FaPlus
                      className={`absolute text-sm transition-all duration-300 ${
                        isOpen
                          ? "scale-75 rotate-90 opacity-0"
                          : "scale-100 rotate-0 opacity-100"
                      }`}
                    />

                    <FaMinus
                      className={`absolute text-sm transition-all duration-300 ${
                        isOpen
                          ? "scale-100 rotate-0 opacity-100"
                          : "scale-75 -rotate-90 opacity-0"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden px-6 transition-all duration-500 ${
                    isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-l border-primary/25 pl-5">
                    <p className="text-sm leading-7 text-soft_black/65 md:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
