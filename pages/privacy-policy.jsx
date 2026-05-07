"use client";
import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import PrivacyPolicyPageSection from "@/components/PrivacyPolicyPageSection";
export default function ProjectLotteryPolicy() {
  const meta = {
    title: "Privacy Policy | Anondo Cityscapers – Your Trusted Housing Project in Bangladesh",
    description:
      "Learn about the privacy policy of Anondo Cityscapers. Understand how we collect, use, and protect your personal information.",
    keywords:
      "Anondo Cityscapers privacy policy, housing project privacy Bangladesh, personal data protection, residential project policy, housing society data handling",
    author: "Anondo Cityscapers",
    url: "https://anondocityscapers.com/privacy-policy",
    image: "https://anondocityscapers.com/privacy/privacy-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          title: "Privacy Policy",
          backgroundImage: "/contact-bg.jpeg",
        }}
      />
      <PrivacyPolicyPageSection />
    </div>
  );
}
