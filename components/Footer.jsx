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
import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Project", href: "/project" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

const projects = [
  { name: "Anondo Bhubon", link: "/anondo-bhubon" },
  { name: "Anondo Parkcity", link: "/anondo-parkcity" },
  { name: "Anondo Rosemont Estate", link: "/anondo-rosemont-estate" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#4a0a0a] text-white">
      {/* Premium Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(180deg,rgba(74,10,10,1)_0%,rgba(28,4,4,1)_100%)]" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-black/25 blur-3xl" />

      <div className="relative z-10 custom-container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1.25fr] xl:gap-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/cityscapers.png"
                alt="Anondo Cityscapers Logo"
                width={210}
                height={170}
                className="mb-5 h-auto w-[190px] object-contain"
              />
            </Link>

            <p className="max-w-sm text-base leading-8 text-white/72">
              Luxury living redefined through visionary townships, premium
              communities, and future-ready real estate developments.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <SocialIcon
                icon={<FaFacebookF />}
                href="https://www.facebook.com/AnondoHousing"
              />
              <SocialIcon
                icon={<FaXTwitter />}
                href="https://twitter.com/AnondoPolice"
              />
              <SocialIcon
                icon={<FaLinkedinIn />}
                href="https://www.linkedin.com/company/anondo-housing-society"
              />
              <SocialIcon
                icon={<FaYoutube />}
                href="https://www.youtube.com/@AnondoHousingSocietyOfficial"
              />
              <SocialIcon
                icon={<FaInstagram />}
                href="https://www.instagram.com/aphs_bd/"
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

          {/* Projects */}
          <FooterColumn title="Projects">
            <ul className="space-y-3">
              {projects.map((item) => (
                <FooterLink key={item.name} href={item.link}>
                  {item.name}
                </FooterLink>
              ))}
            </ul>
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
                  href="mailto:info@anondocityscapers.com"
                  className="transition-colors duration-300 hover:text-white"
                >
                  info@anondocityscapers.com
                </Link>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-md">
              <p className="mb-3 text-sm leading-6 text-white/72">
                Enter your email and receive the latest news from us.
              </p>

              <div className="flex overflow-hidden rounded-full border border-white/15 bg-black/15">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/45"
                />
                <button
                  type="button"
                  className="group flex items-center gap-2 bg-white px-4 text-sm font-semibold text-[#4a0a0a] transition-all duration-300 hover:bg-white/88"
                >
                  Send
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/12 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/58 md:flex-row md:text-left">
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">
                Anondo Cityscapers Ltd
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
    <li className="group w-fit">
      <Link
        href={href}
        className="relative inline-flex items-center gap-2 text-sm text-white/68 transition-colors duration-300 hover:text-white"
      >
        <span className="h-px w-0 bg-white/70 transition-all duration-500 group-hover:w-5" />
        {children}
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/8 text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#4a0a0a]"
    >
      {icon}
    </Link>
  );
}
