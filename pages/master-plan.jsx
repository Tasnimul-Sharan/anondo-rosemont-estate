import Head from "next/head";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";
import { MainMasterPlanSection } from "@/components/AnondoRosemont/MainMasterPlanSection";
import MasterPlanPage from "@/components/AnondoRosemont/MasterPlanPage";

export default function MasterPlanRoute() {
  const meta = {
    title: "Master Plan | Anondo Rosemont Estate",
    description:
      "Explore the 807 bigha Anondo Rosemont Estate master plan with villa zones, wide avenues, elevated plots, green spaces, lake, park, and estate infrastructure.",
    url: "https://anondocityscapers.com/master-plan",
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
        eyebrow="Master Plan"
        title="807 Bigha Planned Estate"
        copy="A disciplined estate plan shaped around villa zones, generous road networks, landscaped open spaces, community facilities, and long-term infrastructure."
      />
      <MainMasterPlanSection />
      {/* <MasterPlanPage /> */}
    </main>
  );
}
