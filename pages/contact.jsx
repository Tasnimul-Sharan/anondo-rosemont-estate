"use client";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import EventMap from "@/components/EventMap";
import ContactPageSection from "@/components/ContactPageSection";
export default function ContactPage() {
  const meta = {
    title:
      "Contact Us | Anondo Cityscapers – Inquiries for Residential Housing Projects in Bangladesh",
    description:
      "Contact Anondo Cityscapers for inquiries about residential housing projects, plot or apartment ownership, booking details, site visits, and general information. We are here to help you find secure and modern living solutions in Bangladesh.",
    keywords:
      "Contact Anondo Cityscapers, housing contact Bangladesh, real estate contact Bangladesh, apartment booking contact, plot purchase inquiry, housing project contact, residential housing Bangladesh",
    author: "Anondo Cityscapers",
    url: "https://anondocityscapers.com/contact",
    image: "https://anondocityscapers.com/contact/contact-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content="Anondo Cityscapers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: "Contact",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <ContactPageSection />
      {/* <EventMap /> */}
    </div>
  );
}
