"use client";

import { FaWhatsapp, FaVideo, FaFileAlt, FaUsers } from "react-icons/fa";

export default function NRBSupportSection() {
  const supports = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp Support",
      desc: "Instant communication from anywhere in the world",
    },
    {
      icon: <FaVideo />,
      title: "Video Call Consultation",
      desc: "Discuss everything via Zoom or live video call",
    },
    {
      icon: <FaFileAlt />,
      title: "Document Assistance",
      desc: "Full help with legal documents & processing",
    },
    {
      icon: <FaUsers />,
      title: "Family Coordination",
      desc: "We assist your family in Bangladesh directly",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Complete Support for NRB Buyers
          </h2>

          <p className="text-gray-500 mb-8 text-lg">
            From consultation to registration — everything is handled smoothly
            even if you're outside Bangladesh.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5">
            {supports.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border hover:shadow-md transition"
              >
                <div className="w-12 h-12 min-w-[48px] flex items-center justify-center rounded-full bg-primary text-white text-lg shadow-md">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CTA CARD */}
        <div className="relative">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border">
            {/* Badge */}
            <span className="inline-block mb-4 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              NRB Dedicated Support
            </span>

            <h3 className="text-2xl font-bold mb-3">Talk to Our Expert</h3>

            <p className="text-gray-500 mb-6">
              Get step-by-step guidance for buying land from abroad without any
              hassle.
            </p>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/+8801313775333?text=Hello%20Anondo%20Cityscapers%2C%20I%20would%20like%20to%20inquire%20about%20your%20projects."
                target="_blank"
                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>

              {/* <a
                href="https://calendly.com/YOUR_USERNAME/nrb-call"
                target="_blank"
                className="w-full border border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary/5 transition text-center block"
              >
                Book Video Call
              </a> */}
              <form className="space-y-4">
                <input
                  placeholder="Your Name"
                  className="w-full border p-3 rounded-lg"
                />
                <input
                  placeholder="WhatsApp Number"
                  className="w-full border p-3 rounded-lg"
                />
                <input type="date" className="w-full border p-3 rounded-lg" />
                <input type="time" className="w-full border p-3 rounded-lg" />

                <button className="w-full bg-primary text-white py-3 rounded-lg">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -z-10 top-0 right-0 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
