import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const contactDetails = [
  [
    "Office Address",
    "Printers Building, 11–12th Floor, 5 Rajuk Avenue, Motijheel, 1000 Dhaka",
  ],
  ["Phone", "+880 1331-115500"],
  ["Email", "info@anondorosemontestate.com"],
];

const inputClass =
  "w-full border border-[#670f0e]/15 bg-[#f8f3ec] px-5 py-4 text-[#241818] outline-none transition duration-300 placeholder:text-[#6b5d57]/65 focus:border-[#670f0e] focus:bg-white";

export function ContactBlock() {
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");
    setSuccess(false);

    const formData = new FormData(event.target);

    formData.append("access_key", "ab503824-020d-4163-a181-7a37a9d5dabf");

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
          "Thank you for your interest in Anondo Rosemont Estate. Your enquiry has been received successfully, and our team will contact you soon regarding your request.",
        );

        event.target.reset();
      } else {
        setSuccess(false);
        setResult(
          data.message || "Unable to send your enquiry. Please try again.",
        );
      }
    } catch (error) {
      setSuccess(false);

      setResult("A network error occurred. Please try again shortly.");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setResult("");
      }, 5000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-[1400px] px-5">
        <div className="grid overflow-hidden border border-[#670f0e]/15 bg-white shadow-2xl shadow-[#670f0e]/15 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="bg-[#670f0e] p-7 text-white md:p-10 lg:p-12">
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.24em] text-white/70">
              <span className="h-px w-10 bg-current" />
              Enquiries
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Become Part of Rosemont
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/72">
              Contact Anondo Rosemont Estate for plot availability, villa
              specifications, booking procedures, brochure requests, and site
              visit scheduling.
            </p>

            <div className="mt-10 grid gap-5 border-t border-white/15 pt-8">
              {contactDetails.map(([label, value]) => (
                <div
                  key={label}
                  className="group flex items-start justify-between gap-6 border-b border-white/12 pb-5 last:border-b-0 last:pb-0"
                >
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/45">
                      {label}
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-white">
                      {value}
                    </p>
                  </div>
                  <span className="mt-3 h-px w-12 origin-left scale-x-[0.35] bg-white/70 transition-transform duration-700 group-hover:scale-x-100" />
                </div>
              ))}
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
                Tell us how we can assist with your Rosemont enquiry.
              </h3>
            </div>

            <div className="relative z-10 mt-3 grid gap-4 md:grid-cols-2">
              <input type="checkbox" name="botcheck" className="hidden" />
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
                  {loading ? "Sending..." : "Start Your Rosemont Enquiry"}
                </span>
              </button>

              <p className="max-w-sm text-sm leading-7 text-[#6b5d57]">
                Our team will respond with project information and site visit
                guidance.
              </p>
            </div>
            {result && (
              <div
                className={`relative z-10 flex items-center gap-3 rounded-lg border px-5 py-4 text-sm font-medium ${
                  success
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    success
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {success ? (
                    <FiCheckCircle className="text-lg" />
                  ) : (
                    <FiAlertCircle className="text-lg" />
                  )}
                </div>

                <span>{result}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
