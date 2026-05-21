"use client";

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ContactPageSection from "@/components/ContactPageSection";

export default function ContactPage() {
  const meta = {
    title: "Contact | Anondo Rosemont Estate",
    description:
      "Contact Anondo Rosemont Estate for villa details, plot availability, booking guidance, brochure requests, and site visit scheduling.",
    keywords:
      "Anondo Rosemont Estate contact, Rosemont Estate booking, villa enquiry Bangladesh, Purbachal villa contact",
    author: "Anondo Rosemont Estate",
    url: "https://anondocityscapers.com/contact",
    image: "https://anondocityscapers.com/og/anondo-rosemont-estate-og.jpg",
  };

  return (
    <div className="relative w-full">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content="Anondo Rosemont Estate" />
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
          backgroundImage: "/10 katha villa/MAHI Final.jpeg",
        }}
      />
      <ContactPageSection />
    </div>
  );
}
