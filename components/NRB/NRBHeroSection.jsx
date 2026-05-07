export default function NRBHeroSection() {
  return (
    <section className="relative w-full py-32 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white text-center overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Badge */}
        <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs tracking-widest text-white/70">
          NRB EXCLUSIVE INVESTMENT OPPORTUNITY
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
          Own Land in Bangladesh
          <br />
          <span className="text-primary">With Instant Legal Registration</span>
        </h1>

        {/* Sub text */}
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
          Secure your future with ready land near Purbachal — fully verified,
          legally safe, and available for NRB investors worldwide.
        </p>

        {/* Trust line */}
        <div className="mt-6 text-sm text-gray-400">
          Trusted by NRB buyers from UK 🇬🇧 UAE 🇦🇪 USA 🇺🇸
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <a className="bg-primary hover:bg-primary/90 px-7 py-3 rounded-xl font-semibold shadow-lg transition">
            Book Site Visit
          </a>

          <a className="border border-white/30 hover:border-white px-7 py-3 rounded-xl font-semibold transition">
            WhatsApp Now
          </a>
        </div>

        {/* Extra Hint */}
        <p className="mt-6 text-xs text-gray-500">
          No hidden charges • Full legal support • Remote purchase available
        </p>
      </div>
    </section>
  );
}
