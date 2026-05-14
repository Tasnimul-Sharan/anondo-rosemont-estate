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
import RosemontBlogsSection from "@/components/AnondoRosemont/RosemontBlogsSection";

const siteUrl = "https://anondocityscapers.com";
const pageUrl = `${siteUrl}/anondo-rosemont-estate`;

const meta = {
  title:
    "Anondo Rosemont Estate | 807 Bigha Premium Duplex Villa Community Near Purbachal",
  description:
    "Anondo Rosemont Estate is an 807-bigha premium low-density duplex villa community in Ulukhola near Purbachal New Town, offering elegant villas, secure gated living, lake, central park, clubhouse, sports complex, community facilities, and NRB-friendly investment value.",
  keywords:
    "Anondo Rosemont Estate, Rosemont Estate, duplex villa Bangladesh, villa community near Purbachal, luxury villa Bangladesh, Ulukhola housing project, gated community Bangladesh, premium real estate Bangladesh, NRB property investment Bangladesh, low density villa community, Purbachal real estate investment, 807 bigha estate Bangladesh",
  author: "Anondo Rosemont Estate",
  url: pageUrl,
  image: `${siteUrl}/og/anondo-rosemont-estate-og.jpg`,
  phone: "+8801331115500",
  email: "info@anondorosemontestate.com",
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Anondo Rosemont Estate",
      url: siteUrl,
      email: meta.email,
      telephone: meta.phone,
      logo: `${siteUrl}/logo.png`,
      // sameAs: [
      //   "https://facebook.com/AnondoHousing",
      //   "https://linkedin.com/company/anondo-housing-society",
      //   "https://instagram.com/aphs_bd/",
      //   "https://youtube.com/@AnondoHousingSocietyOfficial",
      // ],
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${pageUrl}#real-estate-agent`,
      name: "Anondo Rosemont Estate",
      url: pageUrl,
      image: meta.image,
      description: meta.description,
      telephone: meta.phone,
      email: meta.email,
      parentOrganization: {
        "@id": `${siteUrl}#organization`,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ulukhola",
        addressRegion: "Dhaka",
        addressCountry: "BD",
      },
      areaServed: [
        {
          "@type": "Place",
          name: "Ulukhola",
        },
        {
          "@type": "Place",
          name: "Purbachal New Town",
        },
        {
          "@type": "Country",
          name: "Bangladesh",
        },
      ],
    },
    {
      "@type": "Place",
      "@id": `${pageUrl}#place`,
      name: "Anondo Rosemont Estate",
      url: pageUrl,
      image: meta.image,
      description:
        "A premium 807-bigha low-density duplex villa estate in Ulukhola near Purbachal New Town.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ulukhola",
        addressRegion: "Dhaka",
        addressCountry: "BD",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: meta.title,
      description: meta.description,
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Anondo Cityscapers",
        publisher: {
          "@id": `${siteUrl}#organization`,
        },
      },
      about: {
        "@id": `${pageUrl}#place`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: meta.image,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Anondo Rosemont Estate",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function AnondoRosemontEstatePage() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>

        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#4a0a0a" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="canonical" href={meta.url} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Anondo Rosemont Estate" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:secure_url" content={meta.image} />
        <meta
          property="og:image:alt"
          content="Anondo Rosemont Estate premium duplex villa community near Purbachal"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content="Anondo Rosemont Estate" />

        <meta name="geo.region" content="BD-13" />
        <meta
          name="geo.placename"
          content="Ulukhola, near Purbachal New Town, Bangladesh"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
          }}
        />
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
        <RosemontBlogsSection />
        <ContactBlock />
      </main>
    </>
  );
}

