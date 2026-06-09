import { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

export default function VillaGallery({ villa }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="bg-[#f8f3ec] py-20">
        <div className="custom-container mx-auto">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.25em] text-secondary">
              Villa Gallery
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold text-secondary">
              Explore {villa.name}
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-[#6b5d57] leading-8">
              Discover the architecture, landscapes, interiors, and lifestyle
              experiences crafted within {villa.name}.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-2 h-auto lg:h-[700px]">
            {/* Hero Image */}
            <div
              onClick={() => setSelectedImage(villa.gallery[0])}
              className="group relative lg:col-span-2 lg:row-span-2 cursor-pointer overflow-hidden rounded-[32px]"
            >
              <Image
                src={villa.gallery[0]}
                alt=""
                fill
                className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-secondary">
                  Main Residence
                </span>
              </div> */}
            </div>

            {villa.gallery.slice(1, 5).map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="group relative cursor-pointer overflow-hidden rounded-[24px] min-h-[220px]"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />
              </div>
            ))}
          </div>

          {/* Bottom Gallery */}
          {villa.gallery.length > 5 && (
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {villa.gallery.slice(5).map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative h-[400px] cursor-pointer overflow-hidden rounded-[24px]"
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={40} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Villa Gallery"
              width={1600}
              height={1000}
              className="max-h-[90vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
