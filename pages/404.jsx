import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Head from "next/head";
import { FiArrowLeft, FiHome, FiMapPin } from "react-icons/fi";

export default function Custom404() {
  const containerRef = useRef(null);
  const numberRef = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 38 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        numberRef.current,
        { opacity: 0, scale: 0.92, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          delay: 0.15,
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          delay: 0.45,
          transformOrigin: "left center",
          ease: "power3.out",
        },
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.55,
          ease: "power3.out",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Anondo Rosemont Estate</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you are looking for could not be found. Return to Anondo Rosemont Estate."
        />
      </Head>

      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-primary px-4 py-20 text-off_white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{
            backgroundImage: "url('/rosemont-hero.png')",
          }}
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(59,18,18,0.96)_0%,rgba(74,10,10,0.94)_45%,rgba(36,24,24,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(248,243,236,0.16),transparent_36%)]" />

        {/* Decorative Lines */}
        <div className="absolute left-8 top-8 hidden h-28 w-28 border-l border-t border-off_white/18 md:block" />
        <div className="absolute bottom-8 right-8 hidden h-28 w-28 border-b border-r border-off_white/18 md:block" />

        <div
          ref={containerRef}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-4 border border-off_white/15 bg-off_white/8 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-off_white/75 backdrop-blur-md">
            <span className="h-px w-10 bg-off_white/50" />
            Anondo Rosemont Estate
            <span className="h-px w-10 bg-off_white/50" />
          </div>

          <div
            ref={numberRef}
            className="select-none font-serif text-[118px] font-bold leading-none tracking-[-0.08em] text-off_white sm:text-[150px] md:text-[190px]"
          >
            404
          </div>

          <div
            ref={lineRef}
            className="mx-auto mt-4 h-px w-40 bg-gradient-to-r from-transparent via-off_white/65 to-transparent"
          />

          <h1 className="mt-9 text-3xl font-semibold leading-tight tracking-[-0.03em] text-off_white md:text-5xl">
            This estate path could not be found.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-off_white/72 md:text-lg">
            The page you are looking for may have been moved, removed, or is
            temporarily unavailable. Return to Rosemont Estate and continue
            exploring the master-planned villa community.
          </p>

          <div
            ref={cardRef}
            className="mx-auto mt-12 max-w-3xl border border-off_white/12 bg-off_white/8 p-5 shadow-rosemont backdrop-blur-xl md:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-off_white/10 bg-primary/35 p-5">
                <FiHome className="mx-auto mb-3 text-xl text-off_white" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-off_white/65">
                  Villa Estate
                </p>
              </div>

              <div className="border border-off_white/10 bg-primary/35 p-5">
                <FiMapPin className="mx-auto mb-3 text-xl text-off_white" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-off_white/65">
                  Near Purbachal
                </p>
              </div>

              <div className="border border-off_white/10 bg-primary/35 p-5">
                <span className="mx-auto mb-3 block h-5 w-5 rounded-full border border-off_white/80 animate-ripple" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-off_white/65">
                  Legacy Living
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-4 bg-off_white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-primary transition duration-500 hover:bg-soft_black hover:text-off_white"
              >
                <FiArrowLeft className="text-lg" />
                Back to Home
                <span className="h-px w-10 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-4 border border-off_white/35 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-off_white transition duration-500 hover:border-off_white hover:bg-off_white hover:text-primary"
              >
                Contact Rosemont
                <span className="h-px w-8 origin-left scale-x-50 bg-current transition-transform duration-700 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>

          <p className="mt-8 font-serif text-lg italic text-off_white/55">
            Elegantia in Aeternum — Elegance Forever
          </p>
        </div>
      </section>
    </>
  );
}
