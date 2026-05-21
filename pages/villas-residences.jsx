import Head from "next/head";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";
import FeaturedVillas from "@/components/AnondoRosemont/FeaturedVillas";
import ResidentialComponentsPage from "@/components/AnondoRosemont/ResidentialComponentsPage";
import { ContactBlock } from "@/components/AnondoRosemont/ContactBlock";

export default function VillasResidencesRoute() {
  const meta = {
    title: "Villas & Residences | Anondo Rosemont Estate",
    description:
      "Explore 5 katha, 10 katha, and 20 katha duplex villa residences at Anondo Rosemont Estate.",
    url: "https://anondocityscapers.com/villas-residences",
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
        eyebrow="Villas & Residences"
        title="Three Distinct Villa Experiences"
        copy="Choose from 5 katha, 10 katha, and 20 katha villa formats, each planned for land ownership, architectural harmony, gardens, and estate living."
      />
      <FeaturedVillas />
      <ResidentialComponentsPage />
      <ContactBlock />
    </main>
  );
}
