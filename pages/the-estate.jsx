"use client";

import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import EstateStoryHero from "@/components/AnondoRosemont/EstateStoryHero";
import EstateIntroIdentity from "@/components/AnondoRosemont/EstateIntroIdentity";
import ChairmanForeword from "@/components/AnondoRosemont/ChairmanForeword";
import FounderVision from "@/components/AnondoRosemont/FounderVision";
import EstatePhilosophy from "@/components/AnondoRosemont/EstatePhilosophy";
import EstatePrinciples from "@/components/AnondoRosemont/EstatePrinciples";


export default function TheEstatePage() {
  const meta = {
    title: "The Estate Story | Anondo Rosemont Estate",
    description:
      "Discover the story, vision, philosophy, chairman's foreword, and estate principles behind Anondo Rosemont Estate, a premium duplex villa community near Purbachal.",
    keywords:
      "Anondo Rosemont Estate story, Rosemont Estate vision, chairman foreword, estate philosophy, duplex villa community Bangladesh, Purbachal villa estate",
    author: "Anondo Rosemont Estate",
    url: "https://anondorosemontestate.com/the-estate",
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
          title: "The Estate",
          subtitle: "Where Elegance Becomes Heritage",
          backgroundImage: "/10 katha villa/MAHI Final.jpeg",
        }}
      />
        <EstateStoryHero />
        <EstateIntroIdentity />
        <ChairmanForeword />
        <FounderVision />
        <EstatePhilosophy />
        <EstatePrinciples />
    </div>
  );
}
