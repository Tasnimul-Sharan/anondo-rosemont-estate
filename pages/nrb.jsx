"use client";
import HeroSection from "@/components/HeroSection";
import BuyingProcessSection from "@/components/NRB/BuyingProcessSection";
import DocumentsSection from "@/components/NRB/DocumentsSection";
import FAQSection from "@/components/NRB/FAQSection";
import LeadCaptureCard from "@/components/NRB/LeadCaptureCard";
import NRBHeroSection from "@/components/NRB/NRBHeroSection";
import NRBSupportSection from "@/components/NRB/NRBSupportSection";
import NRBTrustSection from "@/components/NRB/NRBTrustSection";
import StickyCTA from "@/components/NRB/StickyCTA";
import VideoSection from "@/components/NRB/VideoSection";
import Head from "next/head";

export default function NRBPage() {
  const meta = {
    title:
      "NRB | Anondo Cityscapers - Modern & Secure Residential Community in Bangladesh",
    description:
      "Anondo Cityscapers offers a modern, secure, and well-planned residential community in Bangladesh with quality housing, reliable utilities, green spaces, and a peaceful living environment for families and investors.",
    keywords:
      "Anondo Cityscapers, housing society Bangladesh, residential housing project Bangladesh, modern housing society, secure residential area, apartment housing Bangladesh, land development project Bangladesh, gated community Bangladesh, real estate Bangladesh, housing project Dhaka",
    author: "Anondo Cityscapers",
    url: "https://anondocityscapers.com/nrb",
    image: "https://anondocityscapers.com/og/home-og.jpg",
  };

  return (
    <div className="w-full">
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Anondo Cityscapers" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>
      <HeroSection
        hero={{
          title: "NRB - Non-Resident Bangladeshi",
          backgroundImage: "/about-bg.jpeg",
        }}
      />
      <NRBHeroSection />
      <NRBTrustSection />
      <BuyingProcessSection />
      <DocumentsSection />
      <VideoSection />
      <NRBSupportSection />
      <FAQSection />
      <LeadCaptureCard />
      {/* <StickyCTA /> */}
    </div>
  );
}
