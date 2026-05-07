import HeroSection from "@/components/HeroSection";
import Head from "next/head";
import NoticePageSection from "@/components/BlogsPageSection";
import BlogsPageSection from "@/components/BlogsPageSection";
export default function NoticePage() {
  const meta = {
    title:
      "Blogs & Updates | Anondo Cityscapers – Latest Announcements and Project Updates in Bangladesh",
    description:
      "Stay updated with the latest blogs, announcements, project updates, and important information from Anondo Cityscapers. Get news about housing projects, plot and apartment ownership, booking updates, and official circulars.",
    keywords:
      "Anondo Cityscapers blog, housing project blogs Bangladesh, real estate updates Bangladesh, apartment booking blog, plot ownership blogs, housing society announcements, Anondo Cityscapers news",
    author: "Anondo Cityscapers",
    url: "https://anondocityscapers.com/blogs",
    image: "https://anondocityscapers.com/blogs/blogs-og.jpg",
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
          title: "Blogs & Updates",
          backgroundImage: "/blogs/blog-bg.jpeg",
        }}
      />
      <BlogsPageSection />
    </div>
  );
}
