"use client";

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import BuyingProcessSection from "@/components/NRB/BuyingProcessSection";
import DocumentsSection from "@/components/NRB/DocumentsSection";
import FAQSection from "@/components/NRB/FAQSection";
import LeadCaptureCard from "@/components/NRB/LeadCaptureCard";
import NRBHeroSection from "@/components/NRB/NRBHeroSection";
import NRBSupportSection from "@/components/NRB/NRBSupportSection";
import NRBTrustSection from "@/components/NRB/NRBTrustSection";
import VideoSection from "@/components/NRB/VideoSection";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";

export default function NRBPage() {
  const meta = {
    title:
      "NRB Investment | Anondo Rosemont Estate - Secure Villa & Land Ownership in Bangladesh",
    description:
      "Anondo Rosemont Estate offers NRB investors a secure opportunity to own land and duplex villas near Purbachal, Bangladesh, with legal documentation support, verified ownership process, and a premium gated estate lifestyle.",
    keywords:
      "NRB investment Bangladesh, Anondo Rosemont Estate NRB, NRB property investment Bangladesh, buy land in Bangladesh from abroad, villa investment Bangladesh, duplex villa near Purbachal, secure land ownership Bangladesh, Bangladeshi expatriate property investment, NRB real estate Bangladesh, Anondo Cityscapers",
    author: "Anondo Cityscapers",
    url: "https://www.anondorosemontestate.com/nrb",
    image: "https://www.anondorosemontestate.com/og/anondo-rosemont-nrb-og.jpg",
  };

  return (
    <div className="w-full overflow-hidden bg-off_white text-soft_black">
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={meta.url} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Anondo Cityscapers" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="og:image:alt"
          content="Anondo Rosemont Estate NRB Investment"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        <meta name="theme-color" content="#3e0607" />
      </Head>

      <RosemontPageHero
        eyebrow="NRB Investment Opportunity"
        title="Secure Land & Villa Ownership for NRBs"
        copy="Anondo Rosemont Estate offers NRB investors a secure opportunity to own land and duplex villas near Purbachal, Bangladesh, with legal documentation support, verified ownership process, and a premium gated estate lifestyle."
      />

      <NRBHeroSection />
      <NRBTrustSection />
      <BuyingProcessSection />
      <DocumentsSection />
      <VideoSection />
      <NRBSupportSection />
      <FAQSection />
      <LeadCaptureCard />
    </div>
  );
}
