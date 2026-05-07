// "use client";

import { CommunityFacilitiesSection } from "@/components/AnondoRosemont/CommunityFacilitiesSection";
import { ContactBlock } from "@/components/AnondoRosemont/ContactBlock";
import { ContentSections } from "@/components/AnondoRosemont/ContentSections";
import FeaturedVillas from "@/components/AnondoRosemont/FeaturedVillas";
import { FeatureGrid } from "@/components/AnondoRosemont/FeatureGrid";
import { Header } from "@/components/AnondoRosemont/Header";
// import { FeaturedVillas } from "@/components/AnondoRosemont/FeaturedVillas";
import HeroLuxury from "@/components/AnondoRosemont/HeroLuxury";
import { HomeHero } from "@/components/AnondoRosemont/HomeHero";
import InvestmentOpportunity from "@/components/AnondoRosemont/InvestmentOpportunity";
import { LifestyleAmenities } from "@/components/AnondoRosemont/lifestyleAmenities";
import LifestyleExperience from "@/components/AnondoRosemont/LifestyleExperience";
import { MainMasterPlanSection } from "@/components/AnondoRosemont/MainMasterPlanSection";
import MasterplanHighlight from "@/components/AnondoRosemont/MasterplanHighlight";
import MasterPlanPage from "@/components/AnondoRosemont/MasterPlanPage";
import { MetricGrid } from "@/components/AnondoRosemont/MetricGrid";
import NrbOpportunity from "@/components/AnondoRosemont/NrbOpportunity";
import ResidentialComponentsPage from "@/components/AnondoRosemont/ResidentialComponentsPage";
import { SecurityInfrastructure } from "@/components/AnondoRosemont/SecurityInfrastructure";
import SustainableLiving from "@/components/AnondoRosemont/SustainableLiving";

export default function RosemontEstate() {
  return (
    <div className="bg-white text-gray-900">
      {/* <Header /> */}
      <HeroLuxury />
      <MasterplanHighlight />
      <LifestyleExperience />
      <FeaturedVillas />
      {/* <HomeHero /> */}
      {/* <FeatureGrid items={homeHighlights} dark /> */}
      {/* <MetricGrid metrics={masterPlanMetrics} /> */}
      <MainMasterPlanSection />
      <LifestyleAmenities />
      <CommunityFacilitiesSection />
      <SustainableLiving />
      <ResidentialComponentsPage />
      <NrbOpportunity />
      <SecurityInfrastructure />
      <InvestmentOpportunity />
      {/* <MasterPlanPage /> */}
      <ContactBlock />
      <ContentSections />
    </div>
  );
}
