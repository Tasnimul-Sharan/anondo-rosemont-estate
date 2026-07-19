"use client";

import { useState } from "react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: "", message: "" });

  const form = e.target;
  const formData = new FormData(form);

  formData.append("access_key", "26650a51-3fb4-44db-93ee-06e1e36565ac");
  formData.append("subject", "New Site Visit Lead - Anondo Rosemont Estate");
  formData.append("from_name", "Anondo Rosemont Estate Website");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus({
        type: "success",
        message:
          "Thank you. Your site visit request has been submitted successfully. Our team will contact you shortly.",
      });

      form.reset();

      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000);
    } else {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again later.",
      });

      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000);
    }
  } catch (err) {
    setStatus({
      type: "error",
      message:
        "Something went wrong. Please check your connection and try again.",
    });

    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 3000);
  } finally {
    setLoading(false);
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status.message && (
        <div
          className={`border px-5 py-4 text-sm leading-6 ${
            status.type === "success"
              ? "border-primary/20 bg-primary/8 text-primary"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          <div className="flex items-start gap-3">
            <span
              className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                status.type === "success"
                  ? "bg-primary text-off_white"
                  : "bg-red-600 text-white"
              }`}
            >
              {status.type === "success" ? "✓" : "!"}
            </span>

            <p>{status.message}</p>
          </div>
        </div>
      )}

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-primary/75">
          Full Name
        </label>

        <input
          name="name"
          type="text"
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
          type="tel"
          placeholder="e.g. +880..."
          required
          className="w-full border border-primary/15 bg-off_white px-4 py-4 text-sm text-soft_black outline-none transition placeholder:text-soft_black/35 focus:border-primary focus:bg-white"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-primary/75">
          Email Address
        </label>

        <input
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full border border-primary/15 bg-off_white px-4 py-4 text-sm text-soft_black outline-none transition placeholder:text-soft_black/35 focus:border-primary focus:bg-white"
        />
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-primary/75">
          Message
        </label>

        <textarea
          name="message"
          rows="4"
          placeholder="Tell us your preferred site visit date or query"
          className="w-full resize-none border border-primary/15 bg-off_white px-4 py-4 text-sm text-soft_black outline-none transition placeholder:text-soft_black/35 focus:border-primary focus:bg-white"
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