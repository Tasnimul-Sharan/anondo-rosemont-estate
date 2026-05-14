"use client";

import { useRouter } from "next/router";
import Head from "next/head";
import { RiLoader2Fill } from "react-icons/ri";
import HeroSection from "@/components/HeroSection";
import { blogDetailsData } from "@/data/blogsDetailsData";
import BlogDetails from "@/components/BlogDetails";

export default function BlogDetailsDataPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-[#4a0a0a]">
        <RiLoader2Fill className="h-6 w-6 animate-spin" />
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  const { blogDetails } = blogDetailsData;
  const blog = blogDetails.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f3ec] px-5 text-center">
        <p className="text-xl font-medium text-[#4a0a0a]">
          Blog detail not found.
        </p>
      </div>
    );
  }

  const siteUrl = "https://anondorosemontestate.com";
  const meta = {
    title: blog.blogPost.title + " | Anondo Rosemont Estate Journal",
    description:
      blog.blogPost.description ||
      "Read insights from Anondo Rosemont Estate about villa living, master planning, lifestyle, security, and investment value.",
    keywords: [
      "Anondo Rosemont Estate",
      "Rosemont Estate blog",
      "duplex villa Bangladesh",
      "Purbachal real estate",
      ...blog.blogPost.postTags,
    ].join(", "),
    author: blog.blogPost.author || "Anondo Rosemont Estate",
    url: siteUrl + "/blogs/" + slug,
    image: siteUrl + blog.blogPost.image,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content="Anondo Rosemont Estate" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <HeroSection
        hero={{
          title: blog.blogPost.title,
          subtitle: blog.blogPost.category || "Rosemont Journal",
          backgroundImage: blog.blogPost.image,
        }}
      />
      <BlogDetails blogsData={blog} />
    </div>
  );
}
