import Head from "next/head";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";
import LocationAdvantageSection from "@/components/AnondoRosemont/LocationAdvantageSection";
import { ContactBlock } from "@/components/AnondoRosemont/ContactBlock";
import VillaPremiumCTA from "@/components/AnondoRosemont/VillaPremiumCTA";

export default function LocationRoute() {
  const meta = {
    title: "Strategic Location | Anondo Rosemont Estate",
    description:
      "Learn about Anondo Rosemont Estate's strategic location in Ulukhola near Purbachal New Town, south of the Turag River.",
    url: "https://www.anondorosemontestate.com/location",
    image:
      "https://www.anondorosemontestate.com/og/anondo-rosemont-estate-og.jpg",
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
        eyebrow="Strategic Location"
        title="Ulukhola Near Purbachal"
        copy="A peaceful estate setting south of the Turag River with access to the Purbachal growth corridor and future urban connectivity."
      />
      <LocationAdvantageSection />
      <VillaPremiumCTA />
    </main>
  );
}
