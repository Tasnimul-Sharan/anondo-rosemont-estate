"use client";

import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

export default function VideoSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-soft_black">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-off_white to-transparent" />
      <div className="absolute left-0 top-0 hidden h-full w-[26%] bg-primary/5 lg:block" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />

      <div className="custom-container relative z-10 mx-auto">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Project Video
            <span className="h-px w-10 bg-primary" />
          </p>

          <h2 className="text-3xl font-semibold leading-tight text-primary md:text-5xl">
            See the Estate & Ownership Process
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-soft_black/70 md:text-lg">
            Watch the project overview, site environment, development progress,
            and how NRB buyers can begin the ownership journey with proper
            guidance.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden border border-primary/15 bg-primary p-3 shadow-rosemont md:p-5">
            <div className="absolute right-0 top-0 z-10 h-28 w-28 border-b border-l border-off_white/20" />
            <div className="absolute bottom-0 left-0 z-10 h-28 w-28 border-r border-t border-off_white/20" />

            <div className="relative aspect-video overflow-hidden border border-off_white/15 bg-soft_black group">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
                title="Anondo Rosemont Estate Project Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(62,6,7,0.12)_0%,rgba(62,6,7,0.45)_100%)] opacity-60 transition duration-500 group-hover:opacity-30" />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="flex h-20 w-20 items-center justify-center border border-off_white/30 bg-off_white/10 text-off_white backdrop-blur-md">
                  <FaPlayCircle className="text-5xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            "Project Overview",
            "Ownership Guidance",
            "Transparent NRB Support",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-3 border border-primary/12 bg-off_white px-5 py-4 text-sm font-semibold text-primary shadow-soft"
            >
              <FaCheckCircle className="text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
