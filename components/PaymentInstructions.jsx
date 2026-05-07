"use client";
import {
  FaExclamationTriangle,
  FaEnvelope,
  FaPhoneAlt,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function PaymentInstructions() {
  return (
    <>
      {/* Instructions */}
      <div className="mt-12 bg-gradient-to-br from-primary/5 to-white border border-primary/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition">
        <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-4">
          <FaExclamationTriangle className="text-primary" />
          Important Information
        </h3>

        <p className="text-sm text-gray-700 leading-relaxed mb-5 flex items-start gap-2">
          <FaInfoCircle className="mt-1 text-primary" />
          During remittance, your Full Name, Member Number, and Project Name
          must be clearly mentioned to properly identify the subscriber.
        </p>

        {/* Email */}
        <div className="mt-4">
          <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
            <FaEnvelope className="text-primary" />
            Email Address
          </h4>
          <ul className="text-base text-gray-700 space-y-1 pl-6 list-disc">
            <li>info@anondocityscapers.com</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-5">
          <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-primary" />
            Contact Numbers
          </h4>
          <ul className="text-base text-gray-700 space-y-2">
            {["01324412961", "01324412954", "01750180096", "01750180093"].map(
              (num, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-full">
                    <FiPhone className="text-primary text-sm" />
                  </span>
                  <a
                    href={`tel:${num}`}
                    className="hover:text-primary transition"
                  >
                    {num}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* English Section (Converted from Bengali) */}
      <div className="mt-16 bg-white p-8 rounded-xl border shadow-sm hover:shadow-lg transition">
        <h2 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
          <FaInfoCircle />
          Payment & Installment Process for New Members
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed mb-5">
          Before accepting a new membership application, a verification process
          is conducted. After successful verification, members are required to
          deposit a security amount along with the initial installment.
          Thereafter, regular and timely installment payments must be made to
          ensure continued membership and completion of the allocated property
          payment.
        </p>

        <h3 className="font-semibold text-sm mb-3 text-gray-900">
          Important Instructions:
        </h3>

        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-sm text-gray-700">
            <FaCheckCircle className="text-primary mt-1" />
            All installment payments must be made on time.
          </li>

          <li className="flex items-start gap-2 text-sm text-gray-700">
            <FaCheckCircle className="text-primary mt-1" />
            Ensure the correct payment amount is deposited.
          </li>

          <li className="flex items-start gap-2 text-sm text-gray-700">
            <FaCheckCircle className="text-primary mt-1" />
            After making a payment, the receipt must be collected and preserved
            for future reference.
          </li>
        </ul>
      </div>
    </>
  );
}
