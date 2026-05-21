import Head from "next/head";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";
import LifestyleExperience from "@/components/AnondoRosemont/LifestyleExperience";
import { LifestyleAmenities } from "@/components/AnondoRosemont/lifestyleAmenities";
import SustainableLiving from "@/components/AnondoRosemont/SustainableLiving";

export default function LifestyleAmenitiesRoute() {
  const meta = {
    title: "Lifestyle & Amenities | Anondo Rosemont Estate",
    description:
      "Discover Rosemont lifestyle amenities including central park, estate lake, sports complex, clubhouse, playgrounds, and community farming space.",
    url: "https://anondocityscapers.com/lifestyle-amenities",
    image: "https://anondocityscapers.com/og/anondo-rosemont-estate-og.jpg",
  };

  return (
    <main className="w-full overflow-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <RosemontPageHero
        eyebrow="Lifestyle & Amenities"
        title="A Lifestyle Beyond Ordinary"
        copy="Rosemont combines villa privacy with shared landscapes, recreation, wellness spaces, parks, lakefront calm, and community life."
        image="/other/lifestyle-experience.png"
      />
      <LifestyleExperience />
      <LifestyleAmenities />
      <SustainableLiving />
    </main>
  );
}
