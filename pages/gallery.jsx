import fs from "fs/promises";
import path from "path";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import GallarySection from "@/components/AnondoRosemont/GallarySection";

const galleryDir = path.join(process.cwd(), "public", "gallary");
const imageFilePattern = /\.(jpe?g|png|webp|avif)$/i;

function getImageTitle(index) {
  return `Rosemont Gallery ${String(index + 1).padStart(2, "0")}`;
}

export async function getStaticProps() {
  let files = [];

  try {
    const dirents = await fs.readdir(galleryDir, { withFileTypes: true });

    files = dirents
      .filter((dirent) => dirent.isFile() && imageFilePattern.test(dirent.name))
      .map((dirent) => dirent.name)
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      );
  } catch {
    files = [];
  }

  const images = files.map((file, index) => ({
    src: `/gallary/${encodeURIComponent(file)}`,
    title: getImageTitle(index),
  }));

  return {
    props: {
      images,
    },
  };
}

export default function RosemontGalleryPage({ images }) {
  const meta = {
    title: "Gallery | Anondo Rosemont Estate",
    description:
      "Explore Anondo Rosemont Estate gallery images featuring villa concepts, estate lifestyle visuals, and planned community spaces.",
    keywords:
      "Anondo Rosemont Estate gallery, Rosemont Estate photos, villa gallery Bangladesh, Purbachal estate gallery",
    author: "Anondo Rosemont Estate",
    url: "https://anondocityscapers.com/anondo-rosemont-estate/gallery",
    image: "https://anondocityscapers.com/og/anondo-rosemont-estate-og.jpg",
  };

  return (
    <main className="w-full overflow-hidden">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:site_name" content="Anondo Rosemont Estate" />
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
          title: "Rosemont Gallery",
          backgroundImage: images?.[0]?.src || "/10 katha villa/MAHI Final.jpeg",
        }}
      />
      <GallarySection images={images} />
    </main>
  );
}
