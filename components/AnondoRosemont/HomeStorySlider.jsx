"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const slides = [
  {
    eyebrow: "Anondo Rosemont Estate",
    title: "Where Elegance Becomes Heritage",
    subtitle: "Land, villas, landscape, and legacy in one planned community",
    text: "Rosemont brings spacious duplex homes, open lawns, calm avenues, and natural surroundings together for families who want permanence beyond ordinary city living.",
    image: "/rosemont-hero.png",
    href: "/ROSEMONT BROCHURE.pdf",
    cta: "Download Brochure",
    newTab: true,
  },
  {
    eyebrow: "A New Chapter of Estate Living",
    title: "True luxury is space to live, breathe, and belong.",
    subtitle: "807 bigha of planned openness",
    text: "In a world where cities rise higher and homes grow smaller, Rosemont offers land, gardens, water, avenues, and a calmer residential rhythm.",
    image: "/5 katha villa/ChatGPT Image May 2, 2026, 12_28_36 PM (1).jpg",
    href: "/master-plan",
    cta: "View Master Plan",
  },
  {
    eyebrow: "Elegantia in Aeternum",
    title: "Elegant duplex villas built for generations.",
    subtitle: "5, 10, and 20 katha villa categories",
    text: "Developer-built villas maintain architectural harmony across the estate, with landscaped lawns, privacy planning, and refined family living.",
    image: "/20 katha villa/ChatGPT Image May 2, 2026, 12_39_41 PM (5).jpg",
    href: "/villas-residences",
    cta: "Explore Villas",
  },
];

function ArrowButton({ direction, onClick }) {
  const Icon = direction === "prev" ? FiArrowLeft : FiArrowRight;
  const position = direction === "prev" ? "left-5" : "right-5";

  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      onClick={onClick}
      className={`absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-white hover:text-[#4a0a0a] lg:flex ${position}`}
    >
      <Icon size={20} />
    </button>
  );
}

export default function HomeStorySlider() {
  const settings = {
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5200,
    // dots: true,
    fade: true,
    infinite: true,
    pauseOnHover: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
    // appendDots: (dots) => (
    //   <div className="absolute bottom-7 left-0 right-0 z-20">
    //     <ul className="flex items-center justify-center gap-3">{dots}</ul>
    //   </div>
    // ),
    // customPaging: () => (
    //   <button
    //     type="button"
    //     aria-label="Go to slide"
    //     className="block h-2.5 w-2.5 rounded-full border border-white/60 bg-white/25 transition"
    //   />
    // ),
  };

  return (
    <section className="relative overflow-hidden bg-[#4a0a0a] text-white">
      <Slider {...settings} className="rosemont-story-slider">
        {slides.map((slide) => (
          <div key={slide.title}>
            <div className="relative min-h-[720px] overflow-hidden md:min-h-[760px] lg:min-h-[820px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,10,10,0.64)_0%,rgba(74,10,10,0.34)_40%,rgba(74,10,10,0.04)_72%,transparent_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#4a0a0a] to-transparent" />

              <div className="custom-container relative z-10 mx-auto flex min-h-[720px] items-center py-24 md:min-h-[760px] lg:min-h-[820px]">
                <div className="max-w-3xl">
                  <p className="mb-6 inline-flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.28em] text-white/72">
                    <span className="h-px w-12 bg-current" />
                    {slide.eyebrow}
                  </p>

                  <h2 className="text-4xl font-semibold leading-[1.02] text-white md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-xl font-semibold leading-tight text-white/86 md:text-2xl">
                    {slide.subtitle}
                  </p>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                    {slide.text}
                  </p>

                  <Link
                    href={slide.href}
                    target={slide.newTab ? "_blank" : undefined}
                    rel={slide.newTab ? "noopener noreferrer" : undefined}
                    className="group mt-10 inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#4a0a0a] transition duration-300 hover:bg-[#f8f3ec]"
                  >
                    {slide.cta}
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
