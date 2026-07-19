"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";
import { PiMapPinBold } from "react-icons/pi";

const contactMethods = [
  {
    label: "Office Address",
    icon: PiMapPinBold,
    value:
      "Printers Building, 11-12th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka",
  },
  {
    label: "Phone",
    icon: FiPhoneCall,
    links: [
      { label: "+880 1331-115500", href: "tel:+8801331115500" },
      { label: "+880 1313-775333", href: "tel:+8801313775333" },
    ],
  },
  {
    label: "Email",
    icon: FiMail,
    links: [
      {
        label: "info@anondorosemontestate.com",
        href: "mailto:info@anondorosemontestate.com",
      },
    ],
  },
];

const inputClass =
  "w-full border border-[#670f0e]/15 bg-[#f8f3ec] px-5 py-4 text-[#241818] outline-none transition duration-300 placeholder:text-[#6b5d57]/60 focus:border-[#670f0e] focus:bg-white";

export default function ContactPageSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);

    formData.append("access_key", "26650a51-3fb4-44db-93ee-06e1e36565ac");

    // Optional
    formData.append("subject", "New Rosemont Estate Enquiry");
    formData.append("from_name", "Rosemont Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setResult(
          "Thank you for your enquiry. Our team has received your request and will contact you shortly with the relevant information.",
        );
        event.target.reset();
      } else {
        setSuccess(false);
        setResult(data.message || "❌ Failed to send enquiry.");
      }
    } catch (error) {
      setSuccess(false);
      setResult("❌ Network error. Please try again.");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setResult("");
      }, 5000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      {/* <div className="absolute right-0 top-0 hidden h-full w-[30%] bg-[#670f0e] lg:block" /> */}

      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-[#670f0e]">
              <span className="h-px w-10 bg-current" />
              Contact Rosemont
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-[#670f0e] md:text-6xl">
              Let us guide your estate journey.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            Speak with the Anondo Rosemont Estate team for villa details, plot
            availability, booking guidance, brochure requests, and site visit
            scheduling.
          </p>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          {contactMethods.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group border border-[#670f0e]/15 bg-white p-6 shadow-xl shadow-[#670f0e]/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#670f0e]/15"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-[#670f0e] text-xl text-white">
                  <Icon />
                </div>

                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#670f0e]/55">
                  {item.label}
                </p>

                {item.value && (
                  <p className="mt-3 leading-7 text-[#6b5d57]">{item.value}</p>
                )}

                {item.links && (
                  <div className="mt-3 grid gap-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="break-words text-[#6b5d57] transition hover:text-[#670f0e]"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid overflow-hidden border border-[#670f0e]/15 bg-white shadow-2xl shadow-[#670f0e]/15 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="bg-[#670f0e] p-7 text-white md:p-10 lg:p-12">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
              <span className="h-px w-10 bg-current" />
              Enquiries
            </p>

            <h3 className="text-3xl font-semibold leading-tight md:text-5xl">
              Become Part of Rosemont
            </h3>

            <p className="mt-6 max-w-xl leading-8 text-white/72">
              Share your preferred villa type, contact number, and enquiry
              details. Our team will respond with project information and site
              visit guidance.
            </p>

            <div className="mt-10 border-t border-white/15 pt-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/45">
                Priority Support
              </p>
              <p className="mt-3 leading-8 text-white/76">
                For faster assistance, mention whether you need a brochure,
                booking details, or a site visit schedule.
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative grid gap-5 bg-white p-7 md:p-10 lg:p-12"
          >
            <div className="absolute right-0 top-0 h-28 w-28 border-b border-l border-[#670f0e]/12" />

            <div className="relative z-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#670f0e]/50">
                Request Information
              </p>
              <h3 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-[#670f0e] md:text-4xl">
                Send your Rosemont enquiry.
              </h3>
            </div>

            <div className="relative z-10 mt-3 grid gap-4 md:grid-cols-2">
              <input
                name="name"
                aria-label="Name"
                placeholder="Name"
                className={inputClass}
                required
              />
              <input
                name="phone"
                aria-label="Phone"
                placeholder="Phone"
                className={inputClass}
                required
              />
            </div>

            <input
              name="email"
              type="email"
              aria-label="Email"
              placeholder="Email"
              className={`relative z-10 ${inputClass}`}
              required
            />

            <select
              name="subject"
              aria-label="Enquiry Type"
              className={`relative z-10 ${inputClass}`}
              defaultValue="Villa Consultation"
            >
              <option>Villa Consultation</option>
              <option>Plot Availability</option>
              <option>Villa Specification</option>
              <option>Booking Procedure</option>
              <option>Site Visit Schedule</option>
              <option>NRB Investment Enquiry</option>
            </select>

            <textarea
              name="message"
              aria-label="Message"
              placeholder="Message"
              className={`relative z-10 min-h-[160px] resize-y ${inputClass}`}
              required
            />

            <div className="relative z-10 mt-2 flex flex-col gap-4 border-t border-[#670f0e]/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex w-fit items-center justify-center gap-4 overflow-hidden bg-[#670f0e] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition duration-500 hover:bg-[#241818] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="absolute -left-16 top-0 h-full w-12 skew-x-[-18deg] bg-white/12 transition-all duration-700 ease-out group-hover:left-[120%]" />

                <span className="relative z-10">
                  {loading ? "Sending..." : "Send Enquiry"}
                </span>

                {!loading && (
                  <FiArrowUpRight className="relative z-10 text-lg" />
                )}
              </button>

              <p className="max-w-sm text-sm leading-7 text-[#6b5d57]">
                Our representative will contact you shortly.
              </p>
            </div>

            {result && (
              <div
                className={`relative z-10 flex items-start gap-3 border px-5 py-4 text-sm font-medium ${
                  success
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {success ? (
                  <FiCheckCircle className="mt-0.5 shrink-0 text-lg" />
                ) : (
                  <FiAlertCircle className="mt-0.5 shrink-0 text-lg" />
                )}

                <span>{result}</span>
              </div>
            )}
          </form>
        </div>

        <div className="mt-8 overflow-hidden border border-[#670f0e]/15 bg-white shadow-2xl shadow-[#670f0e]/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4812.923042245769!2d90.41187546190507!3d23.729719178595598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85855d36dcd%3A0xc01cee8905afc935!2sPrinter&#39;s%20Building!5e1!3m2!1sen!2sbd!4v1775975838729!5m2!1sen!2sbd"
            title="Anondo Rosemont Estate office map"
            className="h-[430px] w-full border-0 md:h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
