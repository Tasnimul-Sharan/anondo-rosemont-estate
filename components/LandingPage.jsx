"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCity,
  FaHome,
  FaLeaf,
} from "react-icons/fa";

import Link from "next/link";
import Button from "./Button";

const sliderData = [
  {
    subtitle: "Anondo Rosemont Estate",
    title: "Where Elegance Becomes Heritage",
    description: `
Where the Hills Whisper and Roses Welcome You Home
Elegantia in Aeternum — Elegance Forever
A Signature Duplex Township by Anondo Rosemont Estate under Anondo CityScappers Ltd.`,
    image: "/slider/slider1.jpg",
    buttons: [
      {
        text: "Explore Rosemont Estate",
        link: "/rosemont",
        variant: "primary",
      },
      { text: "Download Brochure", link: "/brochure", variant: "outline" },
    ],
  },
  {
    subtitle: "Anondo Bhubon",
    title: "A New Horizon in Eco-Friendly Urban Living",
    description: `
Discover Bangladesh’s first eco-conscious township — where nature, wellness, and modern living exist in harmony.
`,
    image: "/slider/slider3.jpg",
    buttons: [
      { text: "Download Brochure", link: "/brochure", variant: "primary" },
      { text: "View Pricing", link: "/pricing", variant: "outline" },
    ],
  },
  {
    subtitle: "Anondo Park City",
    title: "Smart & Sustainable Living in Purbachal",
    description: `
A visionary residential project by Bangladesh Police, spanning 115 hectares in the heart of Purbachal New Town. Offering a secure gated community, modern amenities, and an eco-friendly environment designed for a better quality of life.
`,
    image: "/slider/slider2.jpg",
    buttons: [
      { text: "Get Connect", link: "/contact", variant: "primary" },
      { text: "View Pricing", link: "/pricing", variant: "outline" },
    ],
  },
];

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const textRefs = useRef([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full overflow-hidden group">
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="relative w-full md:py-96 py-60 overflow-hidden"
          >
            <motion.div
              key={`bg-${index}-${activeIndex}`}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></motion.div>

            <div className="absolute inset-0 bg-slate-950/50"></div>

            <motion.div
              ref={(el) => (textRefs.current[index] = el)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center text-white z-10 px-4"
              initial="hidden"
              animate={activeIndex === index ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.p
                className="uppercase tracking-[0.3em] text-sm font-medium text-white relative inline-flex items-center gap-3 border border-white rounded-full px-4 py-1 backdrop-blur"
                variants={textVariants}
              >
                <FaHome className="text-white text-sm" />
                {slide.subtitle}
              </motion.p>

              <motion.h1
                className="text-3xl md:text-6xl font-serif italic font-semibold leading-tight text-balance break-words text-center"
                style={{ maxWidth: "900px", lineHeight: 1.2 }}
                variants={textVariants}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                className="mt-3 text-base md:text-lg max-w-2xl text-gray-200 leading-relaxed"
                variants={textVariants}
              >
                {slide.description}
              </motion.p>

              {slide?.buttons?.length > 0 && (
                <motion.div
                  className="mt-6 flex gap-4 flex-wrap justify-center"
                  variants={textVariants}
                >
                  {slide.buttons.map((btn, i) => (
                    <Link key={i} href={btn.link}>
                      <Button variant={btn.variant || "primary"}>
                        {btn.text}
                      </Button>
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 left-6 -translate-y-1/2 border-2 bg-primary border-primary hover:bg-secondary hover:border-transparent text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all transform duration-1000"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute z-20 top-1/2 right-6 -translate-y-1/2 border-2 bg-primary border-primary hover:bg-secondary hover:border-transparent text-white p-4 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all transform duration-1000"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

export default LandingPage;
