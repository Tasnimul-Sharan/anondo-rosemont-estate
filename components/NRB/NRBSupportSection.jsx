"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaVideo, FaFileAlt, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { submitWeb3Form } from "@/lib/web3forms";

const supports = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Support",
    desc: "Instant communication from anywhere in the world.",
  },
  {
    icon: <FaVideo />,
    title: "Video Call Consultation",
    desc: "Discuss your investment through Zoom or live video consultation.",
  },
  {
    icon: <FaFileAlt />,
    title: "Document Assistance",
    desc: "Guidance for legal documents, verification, and registration support.",
  },
  {
    icon: <FaUsers />,
    title: "Family Coordination",
    desc: "We coordinate directly with your family members in Bangladesh.",
  },
];

export default function NRBSupportSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const outcome = await submitWeb3Form({
      form,
      subject: "NRB Consultation Booking - Anondo Rosemont Estate",
    });

    if (outcome.ok) {
      setStatus({
        type: "success",
        message:
          "Thank you. Your consultation request for Anondo Rosemont Estate has been received. Our NRB desk will contact you shortly.",
      });
      form.reset();
    } else {
      setStatus({
        type: "error",
        message: outcome.message,
      });
    }

    setLoading(false);
    timerRef.current = setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  return (
    <section className="relative overflow-hidden bg-off_white py-24 text-soft_black">
      {/* <div className="absolute left-0 top-0 hidden h-full w-[30%] bg-primary lg:block" /> */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-[110px]" />

      <div className="custom-container relative z-10 mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Left Content */}
        <div>
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-10 bg-primary" />
            NRB Support Desk
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-primary md:text-5xl">
            Complete Support for NRB Buyers
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-soft_black/70 md:text-lg">
            From consultation to booking and registration guidance, our team
            supports NRB buyers with a clear, structured, and hassle-free
            process even while living abroad.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {supports.map((item, i) => (
              <div
                key={item.title}
                className="group border border-primary/12 bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:bg-primary hover:shadow-rosemont"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center border border-primary/15 bg-primary/10 text-xl text-primary transition duration-500 group-hover:border-off_white/20 group-hover:bg-off_white/10 group-hover:text-off_white">
                    {item.icon}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary/25 transition group-hover:text-off_white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-primary transition group-hover:text-off_white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-soft_black/60 transition group-hover:text-off_white/70">
                  {item.desc}
                </p>

                <div className="mt-6 h-px w-14 origin-left scale-x-50 bg-primary transition duration-700 group-hover:scale-x-100 group-hover:bg-off_white" />
              </div>
            ))}
          </div>
        </div>

        {/* Right CTA Card */}
        <div className="relative">
          <div className="relative overflow-hidden border border-primary/12 bg-white p-8 shadow-rosemont md:p-10">
            <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-primary/20" />

            <span className="mb-5 inline-flex items-center gap-3 border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Dedicated NRB Desk
            </span>

            <h3 className="text-2xl font-semibold leading-tight text-primary md:text-3xl">
              Talk to Our Rosemont Expert
            </h3>

            <p className="mt-4 text-base leading-8 text-soft_black/65">
              Get step-by-step guidance for buying a Rosemont property from
              abroad with proper coordination and documentation support.
            </p>

            <div className="mt-7 space-y-4">
              <Link
                href="https://wa.me/8801313775333?text=Hello%20Anondo%20Rosemont%20Estate%2C%20I%20would%20like%20to%20inquire%20about%20Anondo%20Rosemont%20Estate%20NRB%20investment."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-off_white transition duration-500 hover:bg-secondary"
              >
                <FaWhatsapp />
                Chat on WhatsApp
                <span className="h-px w-8 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" />

                <input
                  name="name"
                  type="text"
                  required
                  aria-label="Your Name"
                  placeholder="Your Name"
                  className="w-full border border-primary/15 bg-off_white px-4 py-3 text-sm text-soft_black outline-none transition focus:border-primary"
                />

                <input
                  name="phone"
                  type="tel"
                  required
                  aria-label="WhatsApp Number"
                  placeholder="WhatsApp Number"
                  className="w-full border border-primary/15 bg-off_white px-4 py-3 text-sm text-soft_black outline-none transition focus:border-primary"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="preferred_date"
                    type="date"
                    aria-label="Preferred consultation date"
                    className="w-full border border-primary/15 bg-off_white px-4 py-3 text-sm text-soft_black outline-none transition focus:border-primary"
                  />

                  <input
                    name="preferred_time"
                    type="time"
                    aria-label="Preferred consultation time"
                    className="w-full border border-primary/15 bg-off_white px-4 py-3 text-sm text-soft_black outline-none transition focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 border border-primary bg-off_white px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary transition duration-500 hover:bg-primary hover:text-off_white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Confirm Booking"}
                  <span className="h-px w-8 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
                </button>

                {status.message && (
                  <div
                    role="status"
                    className={`border px-4 py-3 text-sm leading-6 ${
                      status.type === "success"
                        ? "border-primary/20 bg-primary/8 text-primary"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 bg-primary/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
