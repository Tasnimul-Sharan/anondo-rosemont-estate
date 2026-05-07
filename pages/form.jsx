import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import AttachmentTable from "@/components/AttachmentTable";
export default function FormPage() {
  const meta = {
    title:
      "Application Form | Anondo Cityscapers – Apply for Residential Plot or Apartment Ownership in Bangladesh",
    description:
      "Submit your application to Anondo Cityscapers for residential plot or apartment ownership in Bangladesh. Download and upload required documents and begin your journey toward secure and modern living.",
    keywords:
      "Anondo Cityscapers application form, housing application Bangladesh, apartment booking form Bangladesh, plot ownership application, residential housing application, real estate application Bangladesh",
    author: "Anondo Cityscapers",
    url: "https://anondocityscapers.com/form",
    image: "https://anondocityscapers.com/og/application-og.jpg",
  };

  return (
    <div className="w-full relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
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
          title: "Application Form",
          backgroundImage: "/gallery/gallery-bg.jpeg",
        }}
      />
      <AttachmentTable />
    </div>
  );
}
