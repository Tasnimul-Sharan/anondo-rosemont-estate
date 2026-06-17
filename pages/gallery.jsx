import fs from "fs/promises";
import path from "path";
import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import GallarySection from "@/components/AnondoRosemont/GallarySection";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";

const galleryDir = path.join(process.cwd(), "public", "gallery");
const imageFilePattern = /\.(jpe?g|png|webp|avif)$/i;

const titledGalleryImages = [
  { file: "grand-entry-gate.jpg", title: "Grand Entry Gate" },
  { file: "masterplan.jpg", title: "Estate Master Plan" },
  { file: "80-feet-wide-road.jpg", title: "80 Feet Wide Road" },
  { file: "canel-lake.jpg", title: "Canal Lake Lifestyle View" },
  { file: "sports-complex.jpg", title: "Sports Complex" },
  { file: "sports-complex-details.jpg", title: "Sports Complex Details" },
  { file: "sports-playground.jpg", title: "Sports Playground" },
  { file: "community-farming-space.jpg", title: "Community Farming Space" },
  { file: "community-spaces.jpg", title: "Community Spaces" },
  { file: "club-house.png", title: "Clubhouse and Social Center" },
  { file: "anondo-rosemont-get-together.jpg", title: "Get Together Plaza" },
  { file: "fresco-plaza.jpg", title: "Fresco Plaza" },
  { file: "rosemont-fresco-plaza.jpg", title: "Rosemont Fresco Plaza" },
  { file: "rosemont-fresco-plaza-1.jpg", title: "Fresco Plaza Day View" },
  { file: "rosemont-fresco-plaza-2.jpg", title: "Fresco Plaza Evening View" },
  {
    file: "rosemont-fresco-plaza-interior.jpg",
    title: "Fresco Plaza Interior",
  },
  {
    file: "rosemont-fresco-plaza-interior-1.jpg",
    title: "Fresco Plaza Lounge",
  },
  { file: "rosemont-plaza.jpg", title: "Rosemont Plaza" },
];

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

  const availableFiles = new Set(files);
  const images = titledGalleryImages
    .filter((image) => availableFiles.has(image.file))
    .map((image) => ({
      src: `/gallery/${encodeURIComponent(image.file)}`,
      title: image.title,
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
    url: "https://www.anondorosemontestate.com/gallery",
    image:
      "https://www.anondorosemontestate.com/og/anondo-rosemont-estate-og.jpg",
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

      <RosemontPageHero
        eyebrow="Gallery"
        title="Rosemont Gallery"
        copy="Explore our gallery to see the beauty and lifestyle of Anondo Rosemont Estate."
      />
      

      <GallarySection images={images} />
    </main>
  );
}
