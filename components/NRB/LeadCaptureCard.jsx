"use client";

import LeadForm from "./LeadForm";
import { FaWhatsapp } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export default function LeadCaptureCard() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white flex justify-center">
      <div className="w-full max-w-xl px-4">
        <div className="bg-white rounded-3xl shadow-2xl border p-8 md:p-10 relative overflow-hidden">
          {/* Top Badge */}
          <div className="absolute top-4 right-4 text-xs bg-primary text-white px-3 py-1 rounded-full">
            Limited Slots
          </div>
          {/* Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-center leading-tight">
            Book Your Site Visit
          </h3>
          <p className="text-center text-gray-500 mt-3">
            Visit the project physically or connect via video call from abroad
          </p>
          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-4 mt-5 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500 text-base" />
              <span>Free Consultation</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500 text-base" />
              <span>No Hidden Charges</span>
            </div>

            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-green-500 text-base" />
              <span>Full Legal Support</span>
            </div>
          </div>
          {/* Form */}
          <div className="mt-6">
            <LeadForm />
          </div>
          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="text-sm text-gray-400">or</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/+8801313775333?text=Hello%20Anondo%20Cityscapers%2C%20I%20would%20like%20to%20inquire%20about%20your%20projects."
            target="_blank"
            className="flex items-center justify-center gap-2 w-full border border-green-500 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50 transition"
          >
            <FaWhatsapp /> Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}