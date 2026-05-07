"use client";
import React from "react";
import {
  FaExclamationTriangle,
  FaLandmark,
  FaExchangeAlt,
  FaFileContract,
  FaGlobe,
  FaMoneyCheckAlt,
  FaShieldAlt,
} from "react-icons/fa";

export default function TermsAndConditions() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-gray-800 leading-7">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Welcome to Anondo City Scapers. These Terms and Conditions outline
            the rules and regulations for using our website and services.
          </p>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-5 rounded-full" />
        </div>

        {/* Section 1 */}
        <Card icon={<FaGlobe />} title="1. Use of Website">
          <List
            items={[
              "You agree to provide accurate and up-to-date information when contacting us or making a purchase.",
              "You must use this website only for lawful purposes.",
              "You must not engage in any activity that is harmful, illegal, or disrupts the website.",
            ]}
          />
        </Card>

        <Spacer />

        {/* Section 2 */}
        <Card icon={<FaLandmark />} title="2. Products & Services">
          <List
            items={[
              "We strive to provide accurate descriptions, but we do not guarantee that all information is completely error-free.",
              "We reserve the right to modify or discontinue services at any time without prior notice.",
            ]}
          />
        </Card>

        <Spacer />

        {/* Section 3 */}
        <Card icon={<FaMoneyCheckAlt />} title="3. Payments & Billing">
          <List
            items={[
              "All payments must be made in Bangladeshi Taka (BDT) unless otherwise stated.",
              "We accept common payment methods such as bKash, Nagad, bank transfer, and cards.",
              "If a payment fails, we reserve the right to cancel or suspend the order.",
            ]}
          />
        </Card>

        <Spacer />

        {/* Section 4 */}
        <Card icon={<FaShieldAlt />} title="4. Intellectual Property">
          <Paragraph text="All content on this website including logos, text, images, and design belongs to Anondo City Scapers. You may not copy, reproduce, or use any content without written permission." />
        </Card>

        <Spacer />

        {/* Section 5 */}
        <Card
          icon={<FaExclamationTriangle />}
          title="5. Limitation of Liability"
        >
          <Paragraph text="We strive to provide high-quality service, but we are not liable for any direct or indirect damages resulting from the use of our website or services." />
        </Card>

        <Spacer />

        {/* Section 6 */}
        <Card icon={<FaExchangeAlt />} title="6. Governing Law">
          <Paragraph text="These Terms are governed by the laws of Bangladesh. Any disputes will be handled in the courts of Dhaka, Bangladesh." />
        </Card>

        <Spacer />

        {/* Section 7 */}
        <Card icon={<FaFileContract />} title="7. Changes to Terms">
          <Paragraph text="We may update these Terms and Conditions at any time. Continued use of the website means you accept the updated terms." />
        </Card>

        {/* Footer Notice */}
        <div className="mt-16 bg-orange-100 border border-orange-200 rounded-2xl p-6 flex items-center gap-3 shadow-sm">
          <FaFileContract className="text-primary text-xl" />
          <p className="font-medium">
            These Terms & Conditions are binding for all users of Anondo City
            Scapers.
          </p>
        </div>
      </div>
    </section>
  );
}

/* Components */

function Card({ icon, title, children }) {
  return (
    <div className="bg-white rounded-3xl border border-orange-100 p-8 shadow-sm hover:shadow-xl transition duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50 text-primary text-xl">
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
