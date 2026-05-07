//

"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
    };

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Submitted successfully!");
      e.target.reset();
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          name="name"
          placeholder="Enter your full name"
          required
          className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          name="phone"
          placeholder="e.g. +880..."
          required
          className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
      >
        {loading ? "Submitting..." : "Book Site Visit"}
      </button>
    </form>
  );
}