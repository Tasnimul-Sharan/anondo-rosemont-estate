"use client";

import LeadForm from "./LeadForm";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

export default function LeadCaptureCard() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-primary py-24 text-off_white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(62,6,7,0.96)_0%,rgba(74,10,10,0.92)_50%,rgba(114,18,19,0.82)_100%)]" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-off_white/10 blur-[120px]" />

      <div className="custom-container relative z-10 mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden border border-off_white/15 bg-off_white p-8 text-soft_black shadow-rosemont md:p-10">
            <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-primary/20" />

            <div className="absolute right-5 top-5 bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-off_white">
              Limited Slots
            </div>

            <div className="pt-8 text-center">
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                <span className="h-px w-8 bg-primary" />
                NRB Appointment
                <span className="h-px w-8 bg-primary" />
              </p>

              <h3 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">
                Book Your Rosemont Site Visit
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-soft_black/65">
                Visit the estate physically or connect through video call from
                abroad with our dedicated NRB support team.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm text-soft_black/65">
              {["Free Consultation", "No Hidden Charges", "Legal Guidance"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <FiCheckCircle className="text-primary" />
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="mt-8">
              <LeadForm />
            </div>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-primary/15" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-soft_black/40">
                or
              </span>
              <div className="h-px flex-1 bg-primary/15" />
            </div>

            <Link
              href="https://wa.me/8801313775333?text=Hello%20Anondo%20Cityscapers%2C%20I%20would%20like%20to%20inquire%20about%20Anondo%20Rosemont%20Estate%20NRB%20investment."
              target="_blank"
              className="group flex w-full items-center justify-center gap-3 border border-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary transition duration-500 hover:bg-primary hover:text-off_white"
            >
              <FaWhatsapp />
              Talk on WhatsApp
              <span className="h-px w-10 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
