"use client";

import Head from "next/head";

import HeroLuxury from "@/components/AnondoRosemont/HeroLuxury";
import MasterplanHighlight from "@/components/AnondoRosemont/MasterplanHighlight";
import LifestyleExperience from "@/components/AnondoRosemont/LifestyleExperience";
import FeaturedVillas from "@/components/AnondoRosemont/FeaturedVillas";
import { MainMasterPlanSection } from "@/components/AnondoRosemont/MainMasterPlanSection";
// import { LifestyleAmenities } from "@/components/AnondoRosemont/LifestyleAmenities";
import { CommunityFacilitiesSection } from "@/components/AnondoRosemont/CommunityFacilitiesSection";
import SustainableLiving from "@/components/AnondoRosemont/SustainableLiving";
import ResidentialComponentsPage from "@/components/AnondoRosemont/ResidentialComponentsPage";
import NrbOpportunity from "@/components/AnondoRosemont/NrbOpportunity";
import { SecurityInfrastructure } from "@/components/AnondoRosemont/SecurityInfrastructure";
import InvestmentOpportunity from "@/components/AnondoRosemont/InvestmentOpportunity";
import { ContactBlock } from "@/components/AnondoRosemont/ContactBlock";
import { ContentSections } from "@/components/AnondoRosemont/ContentSections";

const meta = {
  title:
    "Anondo Rosemont Estate | Premium Duplex Villa Community Near Purbachal",
  description:
    "Anondo Rosemont Estate is a premium 807-bigha low-density duplex villa community in Ulukhola near Purbachal, offering elegant villas, secure gated living, lake, park, clubhouse, sports complex, and long-term investment value.",
  keywords:
    "Anondo Rosemont Estate, Rosemont Estate, Anondo Real Estate Group, duplex villa Bangladesh, villa community near Purbachal, luxury villa Bangladesh, Ulukhola housing project, gated community Bangladesh, premium real estate Bangladesh, NRB property investment Bangladesh, low density villa community, Purbachal real estate investment",
  author: "Anondo Real Estate Group",
  url: "https://anondocityscapers.com/anondo-rosemont-estate",
  image: "https://anondocityscapers.com/og/anondo-rosemont-estate-og.jpg",
};

export default function AnondoRosemontEstatePage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href={meta.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:site_name" content="Anondo Cityscapers" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content="Anondo Rosemont Estate" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {/* Optional Theme Color */}
        <meta name="theme-color" content="#0F172A" />
      </Head>

      <main className="w-full overflow-hidden">
        <HeroLuxury />
        <MasterplanHighlight />
        <LifestyleExperience />
        <FeaturedVillas />
        <MainMasterPlanSection />
        {/* <LifestyleAmenities /> */}
        <CommunityFacilitiesSection />
        <SustainableLiving />
        <ResidentialComponentsPage />
        <NrbOpportunity />
        <SecurityInfrastructure />
        <InvestmentOpportunity />
        <ContactBlock />
        <ContentSections />
      </main>
    </>
  );
}
