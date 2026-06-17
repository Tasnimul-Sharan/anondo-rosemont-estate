import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaDollarSign,
} from "react-icons/fa";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "bddcb629-55c2-476e-b590-2d44e089d506");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const res = await response.json();

    if (res.success) {
      setSuccess(true);
      setResult("Request submitted! Our agent will contact you shortly.");
      event.target.reset();
    } else {
      setSuccess(false);
      setResult("Failed to send. Please try again.");
    }

    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - CONTACT CARD */}
        <div className="bg-primary/5 p-8 rounded-2xl shadow-sm border">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-500 mt-2">
            Contact us for buying, selling or renting properties.
          </p>

          <div className="mt-8 space-y-6">
            {/* LOCATION */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-700 font-medium">
                  Printers Building, 12-13th Floor, 5 Rajuk Avenue, Motijheel,
                  1000 Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
              <div className="bg-primary/10  p-3 rounded-full">
                <FaPhoneAlt className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-gray-700 font-medium">+880 1331-115500</p>
              </div>
            </div>
            {/* EMAIL */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/20 hover:shadow-md transition">
              <div className="bg-primary/10 p-3 rounded-full">
                <FaEnvelope className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-700 font-medium">
                  info@anondocityscapers.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={onSubmit}
          className="bg-white p-8 rounded-2xl shadow-sm border space-y-5"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Request a Property
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            className="w-full p-3 border rounded-lg outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            className="w-full p-3 border rounded-lg outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg outline-none"
          />

          {/* PROPERTY TYPE */}
          <div className="flex items-center border rounded-lg px-3">
            <FaHome className="text-primary" />
            <select
              name="property_type"
              className="w-full p-3 focus:outline-none"
              required
            >
              <option value="">Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>

          {/* BUDGET */}
          <div className="flex items-center border rounded-lg px-3">
            <FaDollarSign className="text-primary" />
            <select name="budget" className="w-full p-3 focus:outline-none">
              <option value="">Budget Range</option>
              <option>Below 50 Lakh</option>
              <option>50 Lakh - 1 Crore</option>
              <option>1 - 3 Crore</option>
              <option>Above 3 Crore</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Additional Details..."
            className="w-full p-3 h-28 border rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Request
          </button>

          {result && (
            <div
              className={`text-center p-3 rounded-lg ${
                success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {result}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
