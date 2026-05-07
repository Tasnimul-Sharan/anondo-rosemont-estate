"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FiClock, FiPhoneCall, FiMail, FiChevronRight } from "react-icons/fi";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Home",
    path: "/anondo-rosemont-estate",
  },
  {
    name: "The Estate",
    path: "/anondo-rosemont-estate/the-estate",
  },
  {
    name: "Master Plan",
    path: "/anondo-rosemont-estate/master-plan",
  },
  {
    name: "Villas",
    path: "/anondo-rosemont-estate/villas-residences",
  },
  {
    name: "Lifestyle",
    path: "#",
    submenu: [
      {
        name: "Lifestyle & Amenities",
        path: "/anondo-rosemont-estate/lifestyle-amenities",
      },
      {
        name: "Community Facilities",
        path: "/anondo-rosemont-estate/community-facilities",
      },
      {
        name: "Strategic Location",
        path: "/anondo-rosemont-estate/location",
      },
    ],
  },
  {
    name: "Investment",
    path: "#",
    submenu: [
      {
        name: "Investment & NRB",
        path: "/anondo-rosemont-estate/investment-nrb",
      },
      {
        name: "Developer",
        path: "/anondo-rosemont-estate/developer",
      },
    ],
  },
  {
    name: "Gallery",
    path: "/anondo-rosemont-estate/gallery",
  },
  {
    name: "Contact",
    path: "/anondo-rosemont-estate/contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const items = menu?.querySelectorAll("li");

    if (!menu) return;

    if (isMenuOpen) {
      gsap.to(menu, {
        width: "100vw",
        height: "100vh",
        opacity: 1,
        duration: 0.7,
        ease: "power4.out",
      });

      gsap.fromTo(
        items,
        { x: "-35px", opacity: 0 },
        { x: "0px", opacity: 1, duration: 0.5, stagger: 0.08 },
      );
    } else {
      gsap.to(menu, {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.querySelector("#google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,bn",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    const addScript = document.createElement("script");
    addScript.id = "google-translate-script";
    addScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;

    document.body.appendChild(addScript);
  }, []);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;

    if (!selectedLang) return;

    const googleTranslateCombo = document.querySelector(".goog-te-combo");

    if (googleTranslateCombo) {
      googleTranslateCombo.value = selectedLang;
      googleTranslateCombo.dispatchEvent(new Event("change"));
      return;
    }

    const waitForTranslate = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");

      if (combo) {
        combo.value = selectedLang;
        combo.dispatchEvent(new Event("change"));
        clearInterval(waitForTranslate);
      }
    }, 300);

    setTimeout(() => clearInterval(waitForTranslate), 5000);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[#4a0a0a]/90 shadow-2xl shadow-black/25 backdrop-blur-xl text-off_white"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      {/* Top Info Bar */}
      <div
        className={`hidden overflow-hidden border-b border-white/10 text-white transition-all duration-500 lg:block ${
          isScrolled
            ? "max-h-0 py-0 opacity-0"
            : "max-h-[58px] py-3 opacity-100"
        }`}
      >
        <div className="custom-container mx-auto flex items-center justify-between gap-6 whitespace-nowrap text-sm">
          <div className="flex flex-wrap items-center gap-6 text-white/82">
            <div className="flex items-center gap-2 transition hover:text-[#f8f3ec]">
              <FiPhoneCall className="text-[#f8f3ec]" />
              <span className="tracking-wide">+880 1331-115500</span>
            </div>

            <span className="h-4 w-px bg-white/25" />

            <div className="flex items-center gap-2 transition hover:text-[#f8f3ec]">
              <FiMail className="text-[#f8f3ec]" />
              <span className="tracking-wide">info@anondocityscapers.com</span>
            </div>

            <span className="h-4 w-px bg-white/25" />

            <div className="flex items-center gap-2">
              <FiClock className="text-[#f8f3ec]" />
              <span>Sat – Thu · 10 AM – 6 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <Link
              href="https://facebook.com/AnondoHousing"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF className="cursor-pointer text-white/78 transition-all duration-300 hover:text-[#f8f3ec]" />
            </Link>

            <Link
              href="https://linkedin.com/company/anondo-housing-society"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="cursor-pointer text-white/78 transition-all duration-300 hover:text-[#f8f3ec]" />
            </Link>

            <Link
              href="https://instagram.com/aphs_bd/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="cursor-pointer text-white/78 transition-all duration-300 hover:text-[#f8f3ec]" />
            </Link>

            <Link
              href="https://youtube.com/@AnondoHousingSocietyOfficial"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube className="cursor-pointer text-white/78 transition-all duration-300 hover:text-[#f8f3ec]" />
            </Link>

            {/* <select
              className="ml-3 border border-white/20 bg-[#f8f3ec] px-3 py-1 text-sm font-semibold text-[#4a0a0a] outline-none"
              onChange={handleLanguageChange}
              defaultValue=""
              aria-label="Select Language"
            >
              <option value="">ভাষা</option>
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b border-white/12">
        <div className="custom-container mx-auto flex min-h-[88px] items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/anondo-rosemont-estate"
            className="flex h-20 items-center overflow-hidden"
            aria-label="Anondo Rosemont Estate Home"
          >
            <div className="relative flex items-center gap-4">
              {/* <Image
                src="/cityscapers.png"
                alt="Anondo Cityscapers Logo"
                width={1200}
                height={1200}
                priority
                className="h-24 w-auto object-contain brightness-0 invert"
              /> */}

              {/* <span className="hidden h-10 w-px bg-white/20 sm:block" /> */}

              <div className="hidden leading-none text-white sm:block">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
                  Anondo
                </p>
                <p className="mt-2 text-base font-semibold tracking-wide">
                  Rosemont Estate
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="relative hidden items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.13em] text-white/78 xl:flex 2xl:gap-6">
            {menuItems.map((item, i) => (
              <li key={i} className="group relative py-9">
                <Link
                  href={item.path}
                  className="flex items-center gap-1.5 transition duration-300 hover:text-white"
                >
                  {item.name}

                  {item.submenu && (
                    <FiChevronRight className="rotate-90 text-sm text-white/55 transition duration-300 group-hover:text-white" />
                  )}
                </Link>

                <span className="absolute bottom-7 left-0 h-px w-0 bg-[#f8f3ec] transition-all duration-500 group-hover:w-full" />

                {item.submenu && (
                  <ul className="invisible absolute left-0 top-full z-50 w-80 translate-y-5 overflow-hidden border border-white/12 bg-[#4a0a0a]/95 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.submenu.map((sub, j) => (
                      <li
                        key={j}
                        className="group/item border-b border-white/10 last:border-b-0"
                      >
                        <Link
                          href={sub.path}
                          className="flex items-center justify-between px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white/75 transition-all duration-300 hover:bg-[#f8f3ec] hover:text-[#4a0a0a]"
                        >
                          <span className="relative">
                            {sub.name}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover/item:w-full" />
                          </span>

                          <FiChevronRight className="translate-x-[-8px] text-lg opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Link href="/anondo-rosemont-estate/contact">
              <button className="group relative inline-flex items-center justify-center gap-4 overflow-hidden border border-white/25 bg-[#f8f3ec] px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#4a0a0a] shadow-xl shadow-black/15 transition duration-500 hover:text-white">
                <span className="absolute inset-0 bg-[#4a0a0a] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute -left-16 top-0 h-full w-10 skew-x-[-18deg] bg-white/30 transition-all duration-700 ease-out group-hover:left-[120%]" />

                <span className="relative z-10">Book Visit</span>

                <span className="relative z-10 h-px w-8 origin-left scale-x-50 bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            className="z-50 border border-white/20 bg-[#f8f3ec] p-3 text-2xl text-[#4a0a0a] xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed left-0 top-0 z-40 flex flex-col overflow-y-auto bg-[#4a0a0a] px-8 py-12 shadow-2xl shadow-black/40 xl:hidden"
        style={{ width: 0, height: 0, opacity: 0 }}
      >
        <div className="mt-12 border-b border-white/12 pb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
            Anondo
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
            Rosemont Estate
          </h2>
          <p className="mt-3 text-sm italic text-white/68">
            Elegantia in Aeternum — Elegance Forever
          </p>
        </div>

        <ul className="mt-8 flex flex-col gap-6 text-lg font-semibold uppercase tracking-[0.14em] text-white/82">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className="block transition hover:text-white"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>

              {item.submenu && (
                <ul className="ml-4 mt-4 space-y-3 border-l border-white/18 pl-5 text-sm font-medium uppercase tracking-[0.12em] text-white/58">
                  {item.submenu.map((sub, j) => (
                    <li key={j}>
                      <Link
                        href={sub.path}
                        onClick={closeMobileMenu}
                        className="block py-1 transition hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="mt-10">
          <Link
            href="/anondo-rosemont-estate/contact"
            onClick={closeMobileMenu}
          >
            <button className="group inline-flex w-full items-center justify-center gap-4 bg-[#f8f3ec] px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#4a0a0a]">
              Book Site Visit
              <span className="h-px w-12 origin-left scale-x-50 bg-current transition-transform duration-700 ease-out group-hover:scale-x-100" />
            </button>
          </Link>
        </div>

        {/* Mobile Bottom Info */}
        <div className="mt-12 space-y-5 border-t border-white/12 pt-7 text-sm font-medium text-white/68">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiPhoneCall className="text-[#f8f3ec]" />
              <span>+880 1331-115500</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-[#f8f3ec]" />
              <span>info@anondocityscapers.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FiClock className="text-[#f8f3ec]" />
              <span>Sat – Thu · 10 AM – 6 PM</span>
            </div>
          </div>

          <div className="flex gap-5 pt-4 text-xl">
            <Link
              href="https://facebook.com/AnondoHousing"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-white/68 transition hover:text-white" />
            </Link>

            <Link
              href="https://linkedin.com/company/anondo-housing-society"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-white/68 transition hover:text-white" />
            </Link>

            <Link
              href="https://instagram.com/aphs_bd/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="text-white/68 transition hover:text-white" />
            </Link>

            <Link
              href="https://youtube.com/@AnondoHousingSocietyOfficial"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white/68 transition hover:text-white" />
            </Link>
          </div>

          {/* <div className="pt-4">
            <select
              className="w-full border border-white/15 bg-[#f8f3ec] px-3 py-3 text-sm font-semibold text-[#4a0a0a] outline-none"
              onChange={handleLanguageChange}
              defaultValue=""
              aria-label="Select Language"
            >
              <option value="">ভাষা বেছে নিন</option>
              <option value="en">English</option>
              <option value="bn">Bangla</option>
            </select>
          </div> */}
        </div>
      </div>

      {/* <div id="google_translate_element" style={{ display: "none" }} /> */}
    </header>
  );
}
