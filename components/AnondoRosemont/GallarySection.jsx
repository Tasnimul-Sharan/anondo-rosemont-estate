"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import { FiEye } from "react-icons/fi";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function GallarySection({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const slides = images.map((image) => ({
    src: image.src,
    title: image.title,
  }));

  return (
    <section className="bg-[#f8f3ec] py-16 text-[#241818] md:py-24 lg:py-32">
      <div className="custom-container mx-auto">
        <div className="mb-10 grid gap-6 border-b border-[#4a0a0a]/15 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#4a0a0a]">
              <span className="h-px w-10 bg-current" />
              Rosemont Gallery
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#4a0a0a] md:text-5xl">
              A closer look at the Rosemont estate vision.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-[#6b5d57] md:text-lg">
            Explore the villa concepts, estate surroundings, and planned
            lifestyle spaces that shape Anondo Rosemont Estate.
          </p>
        </div>

        {images.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="group overflow-hidden border border-[#4a0a0a]/15 bg-white text-left shadow-xl shadow-[#4a0a0a]/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4a0a0a]/15"
                aria-label={`Open ${image.title}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#efe4d8]">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-[#4a0a0a]/0 transition duration-500 group-hover:bg-[#4a0a0a]/10" />

                  <div className="absolute left-4 top-4 border border-white/30 bg-[#4a0a0a]/75 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[#4a0a0a]/10 p-5">
                  <div>
                    <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#4a0a0a]/45">
                      Rosemont Gallery
                    </p>
                    <h3 className="text-lg font-semibold leading-tight text-[#4a0a0a]">
                      {image.title}
                    </h3>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#4a0a0a]/15 bg-[#f8f3ec] text-lg text-[#4a0a0a] transition duration-500 group-hover:bg-[#4a0a0a] group-hover:text-white">
                    <FiEye />
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="border border-[#4a0a0a]/15 bg-white px-6 py-14 text-center text-[#6b5d57] shadow-xl shadow-[#4a0a0a]/10">
            No gallery images found.
          </div>
        )}

        {currentIndex >= 0 && (
          <Lightbox
            open={currentIndex >= 0}
            close={() => setCurrentIndex(-1)}
            index={currentIndex}
            slides={slides}
            plugins={[Thumbnails, Captions, Zoom, Fullscreen, Slideshow]}
            captions={{ titleTextAlign: "center" }}
            thumbnails={{ position: "bottom", width: 104, height: 72 }}
          />
        )}
      </div>
    </section>
  );
}
