"use client";
import React from "react";
import {
  FaUserShield,
  FaDatabase,
  FaCogs,
  FaShareAlt,
  FaLock,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function PrivacyPolicyPageSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-gray-800 leading-7">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            At Anondo City Scapers, we respect your privacy and are committed to
            protecting your personal information. This page explains how we
            collect, use, and safeguard your data.
          </p>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-5 rounded-full" />
        </div>

        {/* Section 1 */}
        <Card icon={<FaDatabase />} title="1. Information We Collect">
          <List
            items={[
              "Personal Details: Name, email address, phone number, and address when you contact us or request services.",
              "Payment Information: Billing details processed securely through trusted partners like bKash, Nagad, or bank cards.",
              "Website Data: Anonymous usage data such as browser type and visited pages to improve our services.",
            ]}
          />
        </Card>

        <Spacer />

        {/* Section 2 */}
        <Card icon={<FaCogs />} title="2. How We Use Your Information">
          <List
            items={[
              "To process orders and deliver our services.",
              "To respond to inquiries and provide customer support.",
              "To send important updates, offers, or service-related notifications (if you opt-in).",
            ]}
          />
        </Card>

        <Spacer />

        {/* Section 3 */}
        <Card icon={<FaShareAlt />} title="3. Information Sharing">
          <List
            items={[
              "We do not sell your personal data to third parties.",
              "We may share information with trusted partners such as payment gateways or service providers.",
              "We may disclose information if required by law or authorities in Bangladesh.",
            ]}
          />
        </Card>

        <Spacer />

        {/* Section 4 */}
        <Card icon={<FaLock />} title="4. Data Security">
          <Paragraph text="We take reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse. However, no online system can be guaranteed 100% secure." />
        </Card>

        <Spacer />

        {/* Section 5 */}
        <Card icon={<FaCheckCircle />} title="5. Your Rights">
          <List
            items={[
              "Request access to the personal data we hold about you.",
              "Request correction or deletion of your information.",
              "Unsubscribe from marketing communications at any time.",
            ]}
          />
        </Card>

        <Spacer />

        {/* Contact Section */}
        <Card icon={<FaUserShield />} title="6. Contact Us">
          <div className="space-y-3 text-gray-600">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-primary" />
              <span>+880 1318-252050</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-primary" />
              <span>info@anondocityscapers.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-primary" />
              <span>Motijheel, Dhaka 1000, Bangladesh</span>
            </div>
          </div>
        </Card>

        {/* Footer Note */}
        <div className="mt-16 bg-blue-100 border border-blue-200 rounded-2xl p-6 flex items-center gap-3 shadow-sm">
          <FaUserShield className="text-primary text-xl" />
          <p className="font-medium">
            Your privacy is important to us. We are committed to protecting your
            data with transparency and care.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Components */

function Card({ icon, title, children }) {
  return (
    <div className="bg-white rounded-3xl border border-blue-100 p-8 shadow-sm hover:shadow-xl transition duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-primary text-xl">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Paragraph({ text }) {
  return <p className="text-gray-600 leading-relaxed">{text}</p>;
}

function List({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-2 text-gray-600">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Spacer() {
  return <div className="h-10" />;
}
