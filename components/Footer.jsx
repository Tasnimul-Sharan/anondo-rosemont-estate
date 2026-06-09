"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";
import { PiMapPinBold } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "The Estate", href: "/the-estate" },
  { name: "Blogs", href: "/blogs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  // { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const estateLinks = [
  { name: "Master Plan", href: "/master-plan" },
  { name: "Villas & Residences", href: "/villas-residences" },
  { name: "Lifestyle & Amenities", href: "/lifestyle-amenities" },
  { name: "Community Facilities", href: "/community-facilities" },
  { name: "Strategic Location", href: "/location" },
  { name: "Investment & NRB", href: "/investment-nrb" },
];

const estateStats = [
  { value: "807", label: "Bigha Estate" },
  { value: "3", label: "Villa Types" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary text-white">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(180deg,rgba(74,10,10,1)_0%,rgba(28,4,4,1)_100%)]" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-black/25 blur-3xl" />

      <div className="relative z-10 custom-container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1.25fr] xl:gap-14">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 inline-block text-white">
              <Image
                src="/rosemont-logo-final.jpeg"
                alt="Anondo Rosemont Estate"
                width={5000}
                height={5000}
                priority
                className="h-24 w-[200px] md:h-40 md:w-[280px] object-cover"
              />
            </Link>

            <p className="max-w-sm text-base leading-8 text-white/72">
              A premium low-density duplex villa estate near Purbachal, shaped
              for elegance, privacy, landscape, and long-term family legacy.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <SocialIcon
                icon={<FaFacebookF />}
                href="https://www.facebook.com/"
              />
              <SocialIcon
                icon={<FaLinkedinIn />}
                href="https://www.linkedin.com/"
              />
              <SocialIcon
                icon={<FaYoutube />}
                href="https://www.youtube.com/"
              />
              <SocialIcon
                icon={<FaInstagram />}
                href="https://www.instagram.com/anondorosemontestate/"
              />
            </div>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <FooterLink key={item.name} href={item.href}>
                  {item.name}
                </FooterLink>
              ))}
            </ul>
          </FooterColumn>

          {/* Estate Links */}
          <FooterColumn title="Estate Links">
            <ul className="space-y-3">
              {estateLinks.map((item) => (
                <FooterLink key={item.name} href={item.href}>
                  {item.name}
                </FooterLink>
              ))}
            </ul>

            {/* <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-4 border border-white/18 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary transition duration-300 hover:bg-white/88"
            >
              Book Visit
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link> */}
          </FooterColumn>

          {/* Contact */}
          <div>
            <FooterTitle>Get in Touch</FooterTitle>

            <div className="mt-6 space-y-5 text-sm text-white/76">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white">
                  <PiMapPinBold size={20} />
                </span>
                <p className="leading-7">
                  Printers Building, 11–12th Floor, 5 Rajuk Avenue, Motijheel,
                  1000 Dhaka
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white">
                  <FiPhoneCall size={18} />
                </span>
                <Link
                  href="tel:+8801313775333"
                  className="transition-colors duration-300 hover:text-white"
                >
                  +880 1313-775333
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white">
                  <HiOutlineMail size={20} />
                </span>
                <Link
                  href="mailto:info@anondorosemontestate.com"
                  className="transition-colors duration-300 hover:text-white"
                >
                  info@anondorosemontestate.com
                </Link>
              </div>
            </div>

            <div className="mt-7 border border-off_white/15 bg-white/8 p-4 backdrop-blur-md">
              <p className="mb-3 text-sm leading-6 text-white/72">
                Enter your email and receive the latest news from us.
              </p>

              <div className="flex overflow-hidden border border-white/15 bg-black/15">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/45"
                />
                <button
                  type="button"
                  className="group flex items-center gap-2 bg-white px-4 text-sm font-semibold text-secondary transition-all duration-300 hover:bg-white/88"
                >
                  Send
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-off_white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/58 md:flex-row md:text-left">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                Anondo Rosemont Estate
              </span>
              . All rights reserved.
            </p>

            <p className="tracking-[0.18em] uppercase text-[11px] text-white/45">
              Crafted for Premium Living
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="lg:pt-2">
      <FooterTitle>{title}</FooterTitle>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function FooterTitle({ children }) {
  return (
    <h4 className="relative inline-flex flex-col text-lg font-semibold text-white">
      {children}
      <span className="mt-3 h-px w-14 bg-white/70" />
    </h4>
  );
}

function FooterLink({ href, children }) {
  return (
    <li className="w-fit">
      <Link
        href={href}
        className="group relative inline-block text-sm text-white/68 transition-colors duration-300 hover:text-white"
      >
        <span>{children}</span>

        {/* Hover Underline Animation */}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white/80 transition-all duration-500 ease-out group-hover:w-full" />
      </Link>
    </li>
  );
}

function SocialIcon({ icon, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-secondary"
    >
      {icon}
    </Link>
  );
}
