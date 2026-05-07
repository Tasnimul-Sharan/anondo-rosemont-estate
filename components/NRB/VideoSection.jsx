"use client";

import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

export default function VideoSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white text-center">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          See the Project & Registration Process
        </h2>

        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          Watch real footage of the land, development progress, and how you can
          legally own property from abroad.
        </p>

        {/* Video Wrapper */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
          {/* YouTube Iframe */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID"
            title="Project Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          {/* Play Overlay (for visual premium feel) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition">
            <FaPlayCircle className="text-white text-6xl" />
          </div>
        </div>

        {/* TRUST POINTS */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-600">
          <div className="flex items-center gap-2 text-base">
            <FaCheckCircle className="text-green-500" />
            Real Project Footage
          </div>

          <div className="flex items-center gap-2 text-base">
            <FaCheckCircle className="text-green-500" />
            Live Registration Process
          </div>

          <div className="flex items-center gap-2 text-base">
            <FaCheckCircle className="text-green-500" />
            100% Transparent System
          </div>
        </div>
      </div>
    </section>
  );
}
