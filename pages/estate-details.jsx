"use client";

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import EstateRemainingSections from "@/components/AnondoRosemont/EstateRemainingSections";

export default function EstateDetailsPage() {
  const meta = {
    title: "Complete Estate Narrative | Anondo Rosemont Estate",
    description:
      "Explore the complete story of Anondo Rosemont Estate, including master plan, villa living, landscape, security, investment, NRB opportunity, developer credibility, and generational legacy.",
    keywords:
      "Anondo Rosemont Estate details, Rosemont master plan, villa living Bangladesh, Purbachal real estate, NRB property investment, secure villa estate Bangladesh",
    author: "Anondo Rosemont Estate",
    url: "https://anondorosemontestate.com/estate-details",
    image: "https://anondorosemontestate.com/og/anondo-rosemont-estate-og.jpg",
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
          title: "Complete Estate Narrative",
          subtitle: "Anondo Rosemont Estate",
          backgroundImage: "/10 katha villa/MAHI Final.jpeg",
        }}
      />

      <EstateRemainingSections />
    </div>
  );
}
