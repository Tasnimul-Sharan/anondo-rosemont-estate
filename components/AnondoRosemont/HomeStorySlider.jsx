// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

// // const slides = [
// //   {
// //     eyebrow: "Anondo Rosemont Estate",
// //     title: "Where Elegance Becomes Heritage",
// //     subtitle: "Land, villas, landscape, and legacy in one planned community",
// //     text: "Rosemont brings spacious duplex homes, open lawns, calm avenues, and natural surroundings together for families who want permanence beyond ordinary city living.",
// //     image: "/rosemont-hero.png",
// //     href: "/ROSEMONT BROCHURE.pdf",
// //     cta: "Download Brochure",
// //     newTab: true,
// //   },
// //   {
// //     eyebrow: "A New Chapter of Estate Living",
// //     title: "True luxury is space to live, breathe, and belong.",
// //     subtitle: "807 bigha of planned openness",
// //     text: "In a world where cities rise higher and homes grow smaller, Rosemont offers land, gardens, water, avenues, and a calmer residential rhythm.",
// //     image: "/5 katha villa/ChatGPT Image May 2, 2026, 12_28_36 PM (1).jpg",
// //     href: "/master-plan",
// //     cta: "View Master Plan",
// //   },
// //   {
// //     eyebrow: "Elegantia in Aeternum",
// //     title: "Elegant duplex villas built for generations.",
// //     subtitle: "5, 10, and 20 katha villa categories",
// //     text: "Developer-built villas maintain architectural harmony across the estate, with landscaped lawns, privacy planning, and refined family living.",
// //     image: "/20 katha villa/ChatGPT Image May 2, 2026, 12_39_41 PM (5).jpg",
// //     href: "/villas-residences",
// //     cta: "Explore Villas",
// //   },
// // ];

// const slides = [
//   {
//     eyebrow: "Anondo Rosemont Estate",
//     title: "Where Elegance Becomes Heritage",
//     subtitle: "Land, villas, landscape, and legacy in one planned community",
//     text: "A master-planned villa estate where elegant duplex homes, open lawns, calm avenues, and natural surroundings create a legacy address for generations.",
//     image: "/rosemont-hero.png",
//     href: "/ROSEMONT BROCHURE.pdf",
//     cta: "Download Brochure",
//     newTab: true,
//   },
//   {
//     eyebrow: "A New Chapter of Estate Living",
//     title: "True luxury is space to live, breathe, and belong.",
//     subtitle: "807 bigha of planned openness",
//     text: "Rosemont redefines residential living with spacious land, landscaped gardens, scenic water bodies, wide avenues, and a calmer rhythm beyond ordinary city life.",
//     image: "/5 katha villa/5-katha.jpg",
//     href: "/master-plan",
//     cta: "View Master Plan",
//   },
//   {
//     eyebrow: "Elegantia in Aeternum",
//     title: "Elegant duplex villas built for generations.",
//     subtitle: "5, 10, and 20 katha villa categories",
//     text: "Developer-built villas ensure architectural harmony, refined streetscapes, private lawns, and a dignified family lifestyle within a secure estate community.",
//     image: "/20 katha villa/20-katha.jpg",
//     href: "/villas-residences",
//     cta: "Explore Villas",
//   },
// ];

// function ArrowButton({ direction, onClick }) {
//   const Icon = direction === "prev" ? FiArrowLeft : FiArrowRight;
//   const position = direction === "prev" ? "left-5" : "right-5";

//   return (
//     <button
//       type="button"
//       aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
//       onClick={onClick}
//       className={`absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-white/10 text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-white hover:text-secondary lg:flex ${position}`}
//     >
//       <Icon size={20} />
//     </button>
//   );
// }

// export default function HomeStorySlider() {
//   const settings = {
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 5200,
//     // dots: true,
//     fade: true,
//     infinite: true,
//     pauseOnHover: true,
//     speed: 900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <ArrowButton direction="next" />,
//     prevArrow: <ArrowButton direction="prev" />,
//     // appendDots: (dots) => (
//     //   <div className="absolute bottom-7 left-0 right-0 z-20">
//     //     <ul className="flex items-center justify-center gap-3">{dots}</ul>
//     //   </div>
//     // ),
//     // customPaging: () => (
//     //   <button
//     //     type="button"
//     //     aria-label="Go to slide"
//     //     className="block h-2.5 w-2.5 rounded-full border border-white/60 bg-white/25 transition"
//     //   />
//     // ),
//   };

//   return (
//     <section className="relative overflow-hidden bg-secondary text-white">
//       <Slider {...settings} className="rosemont-story-slider">
//         {slides.map((slide) => (
//           <div key={slide.title}>
//             <div className="relative min-h-[720px] overflow-hidden md:min-h-[760px] lg:min-h-[820px]">
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 fill
//                 sizes="100vw"
//                 className="object-cover"
//               />

//               <div className="absolute inset-0 bg-black/20" />
//               <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(74,10,10,0.64)_0%,rgba(74,10,10,0.34)_40%,rgba(74,10,10,0.04)_72%,transparent_100%)]" />
//               <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-secondary to-transparent" />

//               <div className="custom-container relative z-10 mx-auto flex min-h-[720px] items-center py-24 md:min-h-[760px] lg:min-h-[820px]">
//                 <div className="max-w-3xl">
//                   <p className="mb-6 inline-flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.28em] text-white/72">
//                     <span className="h-px w-12 bg-current" />
//                     {slide.eyebrow}
//                   </p>

//                   <h2 className="text-4xl font-semibold leading-[1.02] text-white md:text-5xl lg:text-6xl">
//                     {slide.title}
//                   </h2>

//                   <p className="mt-6 max-w-2xl text-xl font-semibold leading-tight text-white/86 md:text-2xl">
//                     {slide.subtitle}
//                   </p>

//                   <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
//                     {slide.text}
//                   </p>

//                   <Link
//                     href={slide.href}
//                     target={slide.newTab ? "_blank" : undefined}
//                     rel={slide.newTab ? "noopener noreferrer" : undefined}
//                     className="group mt-10 inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-secondary transition duration-300 hover:bg-[#f8f3ec]"
//                   >
//                     {slide.cta}
//                     <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// }


// "use client";

// import { useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import { Cormorant_Garamond } from "next/font/google";
// import {
//   FiArrowLeft,
//   FiArrowRight,
//   FiArrowUpRight,
// } from "react-icons/fi";

// const headingFont = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   display: "swap",
// });

// const slides = [
//   {
//     eyebrow: "Anondo Rosemont Estate",
//     title: "Where Elegance Becomes Heritage",
//     subtitle:
//       "Land, villas, landscape, and legacy in one planned community.",
//     text: "A master-planned villa estate where elegant duplex homes, open lawns, calm avenues, and natural surroundings create a distinguished legacy address for generations.",
//     image: "/rosemont-hero.png",
//     imagePosition: "67% center",
//     href: "/ROSEMONT BROCHURE.pdf",
//     cta: "Download Brochure",
//     newTab: true,
//     secondaryHref: "/gallery",
//     secondaryCta: "View Estate Gallery",
//     facts: [
//       "807 Bigha Estate",
//       "Near Purbachal",
//       "Luxury Villa Community",
//     ],
//   },
//   {
//     eyebrow: "A New Chapter of Estate Living",
//     title: "True Luxury Is Space to Live, Breathe and Belong",
//     subtitle:
//       "A thoughtfully planned estate defined by openness, greenery and tranquillity.",
//     text: "Rosemont redefines residential living through spacious land, landscaped gardens, scenic water bodies, wide avenues and a calmer rhythm beyond ordinary city life.",
//     image: "/5 katha villa/5-katha.jpg",
//     imagePosition: "63% center",
//     href: "/master-plan",
//     cta: "View Master Plan",
//     secondaryHref: "/the-estate",
//     secondaryCta: "Discover The Estate",
//     facts: [
//       "807 Bigha Master Plan",
//       "Wide Grand Avenues",
//       "Natural Landscape",
//     ],
//   },
//   {
//     eyebrow: "Elegantia in Aeternum",
//     title: "Elegant Duplex Villas Built for Generations",
//     subtitle:
//       "Exclusive 5, 10 and 20 katha villa categories within one harmonious estate.",
//     text: "Developer-built villas ensure architectural harmony, refined streetscapes, private lawns and a dignified family lifestyle within a secure estate community.",
//     image: "/20 katha villa/20-katha.jpg",
//     imagePosition: "66% center",
//     href: "/villas-residences",
//     cta: "Explore Villas",
//     secondaryHref: "/contact",
//     secondaryCta: "Book Consultation",
//     facts: ["5 Katha Villas", "10 Katha Villas", "20 Katha Villas"],
//   },
// ];

// const formatNumber = (number) => String(number).padStart(2, "0");

// function DesktopArrow({ direction, onClick }) {
//   const isPrevious = direction === "previous";
//   const Icon = isPrevious ? FiArrowLeft : FiArrowRight;

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={isPrevious ? "Previous slide" : "Next slide"}
//       className={`group absolute top-1/2 z-[70] hidden h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/35 bg-[#3e0607]/45 text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-500 hover:border-[#f8f3ec] hover:bg-[#f8f3ec] hover:text-[#3e0607] lg:flex xl:h-16 xl:w-16 ${
//         isPrevious ? "left-6 xl:left-8" : "right-6 xl:right-8"
//       }`}
//     >
//       <Icon
//         className={`text-xl transition-transform duration-500 xl:text-2xl ${
//           isPrevious
//             ? "group-hover:-translate-x-1"
//             : "group-hover:translate-x-1"
//         }`}
//       />

//       <span className="pointer-events-none absolute inset-[5px] border border-white/10 transition-colors duration-500 group-hover:border-[#3e0607]/10" />
//     </button>
//   );
// }

// function MobileArrow({ direction, onClick }) {
//   const isPrevious = direction === "previous";
//   const Icon = isPrevious ? FiArrowLeft : FiArrowRight;

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-label={isPrevious ? "Previous slide" : "Next slide"}
//       className={`group flex h-12 w-12 items-center justify-center bg-[#f8f3ec] text-[#3e0607] shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-all duration-300 hover:bg-white sm:h-14 sm:w-14 ${
//         isPrevious
//           ? "border-r border-[#3e0607]/15"
//           : ""
//       }`}
//     >
//       <Icon
//         className={`text-lg transition-transform duration-300 ${
//           isPrevious
//             ? "group-hover:-translate-x-1"
//             : "group-hover:translate-x-1"
//         }`}
//       />
//     </button>
//   );
// }

// export default function HomeStorySlider() {
//   const sliderRef = useRef(null);
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     arrows: false,
//     dots: false,
//     fade: true,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 6500,
//     speed: 1200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     swipe: true,
//     swipeToSlide: true,
//     draggable: true,
//     accessibility: true,
//     cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",

//     beforeChange: (_, nextSlide) => {
//       setActiveSlide(nextSlide);
//     },
//   };

//   const goToPreviousSlide = () => {
//     sliderRef.current?.slickPrev();
//   };

//   const goToNextSlide = () => {
//     sliderRef.current?.slickNext();
//   };

//   const progress = ((activeSlide + 1) / slides.length) * 100;

//   return (
//     <section
//       className="relative isolate overflow-hidden bg-[#3e0607] text-white"
//       aria-label="Anondo Rosemont Estate highlights"
//     >
//       <Slider
//         ref={sliderRef}
//         {...settings}
//         className="rosemont-story-slider"
//       >
//         {slides.map((slide, index) => {
//           const isActive = activeSlide === index;

//           return (
//             <div key={slide.title}>
//               <article className="relative min-h-[760px] overflow-hidden sm:min-h-[800px] md:min-h-[840px] lg:min-h-[900px]">
//                 {/* Background image */}
//                 <Image
//                   src={slide.image}
//                   alt={slide.title}
//                   fill
//                   priority={index === 0}
//                   sizes="100vw"
//                   className={`object-cover transition-transform duration-[8500ms] ease-out ${
//                     isActive ? "scale-[1.055]" : "scale-100"
//                   }`}
//                   style={{
//                     objectPosition: slide.imagePosition,
//                   }}
//                 />

//                 {/* Image dark tone */}
//                 <div className="pointer-events-none absolute inset-0 bg-black/10" />

//                 {/* Desktop left gradient */}
//                 <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(39,3,5,0.95)_0%,rgba(57,5,7,0.84)_27%,rgba(62,6,7,0.54)_46%,rgba(62,6,7,0.16)_68%,rgba(0,0,0,0.02)_84%,transparent_100%)]" />

//                 {/* Mobile overlay */}
//                 <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(30,2,4,0.42)_0%,rgba(30,2,4,0.12)_28%,rgba(30,2,4,0.66)_69%,rgba(30,2,4,0.97)_100%)] lg:bg-none" />

//                 {/* Cinematic vignette */}
//                 <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_40%,transparent_0%,transparent_25%,rgba(27,2,3,0.12)_58%,rgba(27,2,3,0.52)_100%)]" />

//                 {/* Bottom gradient */}
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#290405]/95 via-[#290405]/35 to-transparent" />

//                 {/* Premium frame */}
//                 <div className="pointer-events-none absolute inset-7 z-[2] hidden border border-white/[0.1] lg:block" />

//                 {/* Main content */}
//                 <div className="custom-container relative z-20 mx-auto flex min-h-[760px] items-end pb-32 pt-40 sm:min-h-[800px] sm:pb-36 md:min-h-[840px] md:pt-44 lg:min-h-[900px] lg:items-center lg:pb-24 lg:pt-48">
//                   <div
//                     className={`max-w-[760px] transition-all duration-1000 ${
//                       isActive
//                         ? "translate-y-0 opacity-100"
//                         : "translate-y-8 opacity-0"
//                     }`}
//                   >
//                     {/* Eyebrow */}
//                     <div className="mb-6 flex items-center gap-4 sm:mb-7">
//                       <span className="h-px w-10 bg-[#f8f3ec]/75 sm:w-14" />

//                       <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/75 sm:text-xs sm:tracking-[0.32em]">
//                         {slide.eyebrow}
//                       </p>
//                     </div>

//                     {/* Heading */}
//                     <h1
//                       className={`${headingFont.className} max-w-[760px] text-[clamp(2.8rem,4.6vw,5rem)] font-semibold leading-[0.88] tracking-[-0.035em] text-white`}
//                     >
//                       {slide.title}
//                     </h1>

//                     {/* Subtitle */}
//                     <p className="mt-7 max-w-[650px] text-lg font-medium leading-[1.45] text-white/90 sm:text-xl md:text-2xl md:leading-[1.35]">
//                       {slide.subtitle}
//                     </p>

//                     {/* Description */}
//                     <p className="mt-5 hidden max-w-[620px] text-[15px] leading-7 text-white/68 sm:block md:mt-6 md:text-base md:leading-8">
//                       {slide.text}
//                     </p>

//                     {/* Facts */}
//                     <div className="mt-7 hidden flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-5 md:flex">
//                       {slide.facts.map((fact, factIndex) => (
//                         <div
//                           key={fact}
//                           className="flex items-center gap-5"
//                         >
//                           <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-white/65 lg:text-[11px]">
//                             {fact}
//                           </span>

//                           {factIndex !== slide.facts.length - 1 && (
//                             <span className="h-1 w-1 rounded-full bg-white/40" />
//                           )}
//                         </div>
//                       ))}
//                     </div>

//                     {/* CTA */}
//                     <div className="mt-8 flex flex-wrap items-center gap-5 sm:mt-9">
//                       <Link
//                         href={slide.href}
//                         target={slide.newTab ? "_blank" : undefined}
//                         rel={
//                           slide.newTab
//                             ? "noopener noreferrer"
//                             : undefined
//                         }
//                         className="group/primary inline-flex min-h-14 w-full items-center justify-center gap-5 bg-[#f8f3ec] px-6 text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#3e0607] transition-all duration-500 hover:bg-white sm:w-auto sm:px-7 sm:text-xs"
//                       >
//                         <span>{slide.cta}</span>

//                         <span className="relative hidden h-px w-8 overflow-hidden bg-[#3e0607]/25 sm:block">
//                           <span className="absolute inset-0 origin-left scale-x-50 bg-[#3e0607] transition-transform duration-500 group-hover/primary:scale-x-100" />
//                         </span>

//                         <FiArrowUpRight className="text-base transition-transform duration-500 group-hover/primary:-translate-y-1 group-hover/primary:translate-x-1" />
//                       </Link>

//                       <Link
//                         href={slide.secondaryHref}
//                         className="group/secondary inline-flex min-h-12 items-center gap-4 border-b border-white/30 px-1 text-[10px] font-bold uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:border-white sm:text-xs"
//                       >
//                         <span>{slide.secondaryCta}</span>

//                         <FiArrowRight className="text-base transition-transform duration-500 group-hover/secondary:translate-x-1.5" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           );
//         })}
//       </Slider>

//       {/* Desktop left arrow */}
//       <DesktopArrow
//         direction="previous"
//         onClick={goToPreviousSlide}
//       />

//       {/* Desktop right arrow */}
//       <DesktopArrow
//         direction="next"
//         onClick={goToNextSlide}
//       />

//       {/* Mobile bottom navigation */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[70] lg:hidden">
//         <div className="custom-container mx-auto flex items-center justify-between">
//           {/* Counter */}
//           <div className="pointer-events-auto flex items-center gap-3">
//             <span className="text-sm font-bold tracking-[0.18em] text-white">
//               {formatNumber(activeSlide + 1)}
//             </span>

//             <span className="h-px w-7 bg-white/35" />

//             <span className="text-xs font-semibold tracking-[0.18em] text-white/55">
//               {formatNumber(slides.length)}
//             </span>
//           </div>

//           {/* Arrows */}
//           <div className="pointer-events-auto flex overflow-hidden">
//             <MobileArrow
//               direction="previous"
//               onClick={goToPreviousSlide}
//             />

//             <MobileArrow
//               direction="next"
//               onClick={goToNextSlide}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Desktop slide counter */}
//       <div className="pointer-events-none absolute bottom-11 right-28 z-[60] hidden items-center gap-3 lg:flex xl:right-32">
//         <span className="text-sm font-bold tracking-[0.18em] text-white">
//           {formatNumber(activeSlide + 1)}
//         </span>

//         <span className="h-px w-8 bg-white/35" />

//         <span className="text-xs font-semibold tracking-[0.18em] text-white/55">
//           {formatNumber(slides.length)}
//         </span>
//       </div>

//       {/* Progress bar */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[80] h-[3px] bg-white/10">
//         <div
//           className="h-full bg-[#f8f3ec] transition-[width] duration-700 ease-out"
//           style={{
//             width: `${progress}%`,
//           }}
//         />
//       </div>

//       {/* Screen reader status */}
//       <p className="sr-only" aria-live="polite">
//         Slide {activeSlide + 1} of {slides.length}:{" "}
//         {slides[activeSlide].title}
//       </p>
//     </section>
//   );
// }

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { Cormorant_Garamond } from "next/font/google";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const slides = [
  {
    eyebrow: "Anondo Rosemont Estate",
    title: "Where Elegance Becomes Heritage",
    subtitle:
      "Land, villas, landscape, and legacy in one planned community.",
    text: "A master-planned villa estate where elegant duplex homes, open lawns, calm avenues, and natural surroundings create a distinguished legacy address for generations.",
    image: "/rosemont-hero.png",
    imagePosition: "67% center",
    href: "/ROSEMONT BROCHURE.pdf",
    cta: "Download Brochure",
    newTab: true,
    secondaryHref: "/gallery",
    secondaryCta: "View Estate Gallery",
    facts: [
      "807 Bigha Estate",
      "Near Purbachal",
      "Luxury Villa Community",
    ],
  },
  {
    eyebrow: "A New Chapter of Estate Living",
    title: "True Luxury Is Space to Live, Breathe and Belong",
    subtitle:
      "A thoughtfully planned estate defined by openness, greenery and tranquillity.",
    text: "Rosemont redefines residential living through spacious land, landscaped gardens, scenic water bodies, wide avenues and a calmer rhythm beyond ordinary city life.",
    image: "/5 katha villa/5-katha.jpg",
    imagePosition: "63% center",
    href: "/master-plan",
    cta: "View Master Plan",
    secondaryHref: "/the-estate",
    secondaryCta: "Discover The Estate",
    facts: [
      "807 Bigha Master Plan",
      "Wide Grand Avenues",
      "Natural Landscape",
    ],
  },
  {
    eyebrow: "Elegantia in Aeternum",
    title: "Elegant Duplex Villas Built for Generations",
    subtitle:
      "Exclusive 5, 10 and 20 katha villa categories within one harmonious estate.",
    text: "Developer-built villas ensure architectural harmony, refined streetscapes, private lawns and a dignified family lifestyle within a secure estate community.",
    image: "/20 katha villa/20-katha.jpg",
    imagePosition: "66% center",
    href: "/villas-residences",
    cta: "Explore Villas",
    secondaryHref: "/contact",
    secondaryCta: "Book Consultation",
    facts: ["5 Katha Villas", "10 Katha Villas", "20 Katha Villas"],
  },
];

const formatNumber = (number) => String(number).padStart(2, "0");

function DesktopArrow({ direction, onClick }) {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? FiArrowLeft : FiArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? "Previous slide" : "Next slide"}
      className={`
        group absolute top-1/2 z-[70] hidden h-14 w-14
        -translate-y-1/2 items-center justify-center
        border border-white/35 bg-[#3e0607]/55
        text-white opacity-0
        shadow-[0_18px_45px_rgba(0,0,0,0.35)]
        backdrop-blur-md
        pointer-events-none
        transition-all duration-500 ease-out

        group-hover/hero:pointer-events-auto
        group-hover/hero:translate-x-0
        group-hover/hero:opacity-100

        focus-visible:pointer-events-auto
        focus-visible:translate-x-0
        focus-visible:opacity-100
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-white

        hover:border-[#f8f3ec]
        hover:bg-[#f8f3ec]
        hover:text-[#3e0607]

        lg:flex
        xl:h-16 xl:w-16

        ${
          isPrevious
            ? "left-6 -translate-x-4 xl:left-8"
            : "right-6 translate-x-4 xl:right-8"
        }
      `}
    >
      <Icon
        className={`text-xl transition-transform duration-500 xl:text-2xl ${
          isPrevious
            ? "group-hover:-translate-x-1"
            : "group-hover:translate-x-1"
        }`}
      />

      <span className="pointer-events-none absolute inset-[5px] border border-white/10 transition-colors duration-500 group-hover:border-[#3e0607]/10" />
    </button>
  );
}

function MobileArrow({ direction, onClick }) {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? FiArrowLeft : FiArrowRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? "Previous slide" : "Next slide"}
      className={`
        group flex h-12 w-12 items-center justify-center
        bg-[#f8f3ec] text-[#3e0607]
        shadow-[0_12px_32px_rgba(0,0,0,0.28)]
        transition-all duration-300 hover:bg-white
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
        sm:h-14 sm:w-14
        ${isPrevious ? "border-r border-[#3e0607]/15" : ""}
      `}
    >
      <Icon
        className={`text-lg transition-transform duration-300 ${
          isPrevious
            ? "group-hover:-translate-x-1"
            : "group-hover:translate-x-1"
        }`}
      />
    </button>
  );
}

export default function HomeStorySlider() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6500,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    accessibility: true,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",

    beforeChange: (_, nextSlide) => {
      setActiveSlide(nextSlide);
    },
  };

  const goToPreviousSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const progress = ((activeSlide + 1) / slides.length) * 100;

  return (
    <section
      className="group/hero relative isolate overflow-hidden bg-[#3e0607] text-white"
      aria-label="Anondo Rosemont Estate highlights"
    >
      <Slider
        ref={sliderRef}
        {...settings}
        className="rosemont-story-slider"
      >
        {slides.map((slide, index) => (
          <div key={slide.title}>
            <article className="relative h-[760px] overflow-hidden sm:h-[800px] md:h-[840px] lg:h-[900px]">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                style={{
                  objectPosition: slide.imagePosition,
                }}
              />

              {/* Basic Image Tone */}
              <div className="pointer-events-none absolute inset-0 bg-black/10" />

              {/* Desktop Left Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(39,3,5,0.95)_0%,rgba(57,5,7,0.84)_27%,rgba(62,6,7,0.54)_46%,rgba(62,6,7,0.16)_68%,rgba(0,0,0,0.02)_84%,transparent_100%)]" />

              {/* Mobile Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(30,2,4,0.42)_0%,rgba(30,2,4,0.12)_28%,rgba(30,2,4,0.66)_69%,rgba(30,2,4,0.97)_100%)] lg:bg-none" />

              {/* Cinematic Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_40%,transparent_0%,transparent_25%,rgba(27,2,3,0.12)_58%,rgba(27,2,3,0.52)_100%)]" />

              {/* Bottom Gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#290405]/95 via-[#290405]/35 to-transparent" />

              {/* Premium Frame */}
              <div className="pointer-events-none absolute inset-7 z-[2] hidden border border-white/[0.1] lg:block" />

              {/* Content */}
              <div className="custom-container relative z-20 mx-auto flex h-[760px] items-end pb-32 pt-40 sm:h-[800px] sm:pb-36 md:h-[840px] md:pt-44 lg:h-[900px] lg:items-center lg:pb-24 lg:pt-48">
                <div className="max-w-[760px]">
                  {/* Eyebrow */}
                  <div className="mb-6 flex items-center gap-4 sm:mb-7">
                    <span className="h-px w-10 bg-[#f8f3ec]/75 sm:w-14" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/75 sm:text-xs sm:tracking-[0.32em]">
                      {slide.eyebrow}
                    </p>
                  </div>

                  {/* Heading */}
                  <h1
                    className={`${headingFont.className} max-w-[720px] text-[clamp(2.7rem,4.3vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.03em] text-white`}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-6 max-w-[650px] text-lg font-medium leading-[1.45] text-white/90 sm:text-xl md:text-[22px] md:leading-[1.4]">
                    {slide.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-5 hidden max-w-[620px] text-[15px] leading-7 text-white/68 sm:block md:text-base md:leading-8">
                    {slide.text}
                  </p>

                  {/* Facts */}
                  <div className="mt-6 hidden flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-5 md:flex">
                    {slide.facts.map((fact, factIndex) => (
                      <div
                        key={fact}
                        className="flex items-center gap-5"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-[0.19em] text-white/65 lg:text-[11px]">
                          {fact}
                        </span>

                        {factIndex !== slide.facts.length - 1 && (
                          <span className="h-1 w-1 rounded-full bg-white/40" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-8">
                    <Link
                      href={slide.href}
                      target={slide.newTab ? "_blank" : undefined}
                      rel={
                        slide.newTab
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group/primary inline-flex min-h-14 w-full items-center justify-center gap-5 bg-[#f8f3ec] px-6 text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#3e0607] transition-all duration-500 hover:bg-white sm:w-auto sm:px-7 sm:text-xs"
                    >
                      <span>{slide.cta}</span>

                      <span className="relative hidden h-px w-8 overflow-hidden bg-[#3e0607]/25 sm:block">
                        <span className="absolute inset-0 origin-left scale-x-50 bg-[#3e0607] transition-transform duration-500 group-hover/primary:scale-x-100" />
                      </span>

                      <FiArrowUpRight className="text-base transition-transform duration-500 group-hover/primary:-translate-y-1 group-hover/primary:translate-x-1" />
                    </Link>

                    <Link
                      href={slide.secondaryHref}
                      className="group/secondary inline-flex min-h-12 items-center gap-4 border-b border-white/30 px-1 text-[10px] font-bold uppercase tracking-[0.17em] text-white transition-colors duration-300 hover:border-white sm:text-xs"
                    >
                      <span>{slide.secondaryCta}</span>

                      <FiArrowRight className="text-base transition-transform duration-500 group-hover/secondary:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </Slider>

      {/* Desktop Arrows — only visible on hero hover */}
      <DesktopArrow
        direction="previous"
        onClick={goToPreviousSlide}
      />

      <DesktopArrow
        direction="next"
        onClick={goToNextSlide}
      />

      {/* Mobile Navigation */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[70] lg:hidden">
        <div className="custom-container mx-auto flex items-center justify-between">
          <div className="pointer-events-auto flex items-center gap-3">
            <span className="text-sm font-bold tracking-[0.18em] text-white">
              {formatNumber(activeSlide + 1)}
            </span>

            <span className="h-px w-7 bg-white/35" />

            <span className="text-xs font-semibold tracking-[0.18em] text-white/55">
              {formatNumber(slides.length)}
            </span>
          </div>

          <div className="pointer-events-auto flex overflow-hidden">
            <MobileArrow
              direction="previous"
              onClick={goToPreviousSlide}
            />

            <MobileArrow
              direction="next"
              onClick={goToNextSlide}
            />
          </div>
        </div>
      </div>

      {/* Desktop Counter */}
      <div className="pointer-events-none absolute bottom-11 right-28 z-[60] hidden items-center gap-3 lg:flex xl:right-32">
        <span className="text-sm font-bold tracking-[0.18em] text-white">
          {formatNumber(activeSlide + 1)}
        </span>

        <span className="h-px w-8 bg-white/35" />

        <span className="text-xs font-semibold tracking-[0.18em] text-white/55">
          {formatNumber(slides.length)}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[80] h-[3px] bg-white/10">
        <div
          className="h-full bg-[#f8f3ec] transition-[width] duration-700 ease-out"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Screen Reader Status */}
      <p className="sr-only" aria-live="polite">
        Slide {activeSlide + 1} of {slides.length}:{" "}
        {slides[activeSlide].title}
      </p>
    </section>
  );
}