import Head from "next/head";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";
import { CommunityFacilitiesSection } from "@/components/AnondoRosemont/CommunityFacilitiesSection";
import { ContactBlock } from "@/components/AnondoRosemont/ContactBlock";

export default function CommunityFacilitiesRoute() {
  const meta = {
    title: "Community Facilities | Anondo Rosemont Estate",
    description:
      "Explore Rosemont community facilities planned for education, healthcare, commercial convenience, and inclusive worship spaces.",
    url: "https://anondocityscapers.com/community-facilities",
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
        eyebrow="Community Facilities"
        title="Everyday Essentials Inside the Estate"
        copy="Rosemont plans education, healthcare, commercial convenience, and inclusive worship spaces so residents can enjoy a complete community environment."
        image="/other/community-facilities.png"
      />
      <CommunityFacilitiesSection />
      <ContactBlock />
    </main>
  );
}
