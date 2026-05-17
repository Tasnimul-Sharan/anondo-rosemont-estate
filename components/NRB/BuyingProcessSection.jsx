"use client";

import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaFileAlt,
  FaLaptop,
  FaStamp,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    title: "Consultation",
    desc: "WhatsApp or Zoom discussion from anywhere in the world.",
    icon: <FaPhoneAlt />,
  },
  {
    title: "Choose Property",
    desc: "Select your preferred villa or plot category with expert guidance.",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Document Review",
    desc: "Review ownership papers, project details, and legal documentation.",
    icon: <FaFileAlt />,
  },
  {
    title: "Remote Booking",
    desc: "Reserve your property from abroad with a structured support process.",
    icon: <FaLaptop />,
  },
  {
    title: "Registration Support",
    desc: "Receive guidance for official legal registration in Bangladesh.",
    icon: <FaStamp />,
  },
  {
    title: "Ownership Handover",
    desc: "Become the verified owner of a Rosemont property in Bangladesh.",
    icon: <FaCheckCircle />,
  },
];

export default function BuyingProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-soft_black">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-off_white to-transparent" />

      <div className="custom-container relative z-10 mx-auto">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Buying Journey
            <span className="h-px w-10 bg-primary" />
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Simple 6-Step NRB Buying Process
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-soft_black/70 md:text-lg">
            From consultation to ownership, the Rosemont team supports NRB
            investors with a clear and structured property acquisition process.
          </p>
        </div>

        <div className="absolute left-1/2 top-[260px] hidden h-[calc(100%-280px)] w-px -translate-x-1/2 bg-primary/18 md:block" />

        <div className="space-y-16">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={step.title}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`relative w-full border border-primary/12 bg-off_white/80 p-7 shadow-soft backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:shadow-rosemont md:w-[47%] ${
                    isLeft ? "mr-auto text-right" : "ml-auto text-left"
                  }`}
                >
                  <div
                    className={`hidden absolute top-1/2 h-px w-10 -translate-y-1/2 bg-primary/35 md:block ${
                      isLeft ? "right-[-40px]" : "left-[-40px]"
                    }`}
                  />

                  <div
                    className={`mb-4 flex items-center gap-4 ${
                      isLeft ? "justify-end" : "justify-start"
                    }`}
                  >
                    {!isLeft && (
                      <div className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                    )}

                    <h3 className="text-xl font-semibold text-primary">
                      {step.title}
                    </h3>

                    {isLeft && (
                      <div className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  <p className="text-sm leading-7 text-soft_black/65 md:text-base">
                    {step.desc}
                  </p>
                </div>

                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center border border-off_white bg-primary text-sm font-bold text-off_white shadow-rosemont">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
