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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-primary/75">
          Full Name
        </label>

        <input
          name="name"
          placeholder="Enter your full name"
          required
          className="w-full border border-primary/15 bg-off_white px-4 py-4 text-sm text-soft_black outline-none transition placeholder:text-soft_black/35 focus:border-primary focus:bg-white"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-primary/75">
          Phone Number
        </label>

        <input
          name="phone"
          placeholder="e.g. +880..."
          required
          className="w-full border border-primary/15 bg-off_white px-4 py-4 text-sm text-soft_black outline-none transition placeholder:text-soft_black/35 focus:border-primary focus:bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group flex w-full items-center justify-center gap-4 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-off_white transition duration-500 hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Book Site Visit"}
        <span className="h-px w-10 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
      </button>
    </form>
  );
}
