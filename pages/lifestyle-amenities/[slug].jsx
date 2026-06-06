import Head from "next/head";
import RosemontPageHero from "@/components/AnondoRosemont/RosemontPageHero";
import LifestyleAmenityDetailsPage from "@/components/AnondoRosemont/LifestyleAmenityDetailsPage";
import { lifestyleAmenities } from "@/data/lifestyleAmenities";

export async function getStaticPaths() {
  return {
    paths: lifestyleAmenities.map((item) => ({
      params: { slug: item.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const amenity = lifestyleAmenities.find((item) => item.slug === params.slug);

  return {
    props: {
      amenity,
      otherAmenities: lifestyleAmenities.filter(
        (item) => item.slug !== params.slug,
      ),
    },
  };
}

export default function LifestyleAmenityDetails({ amenity, otherAmenities }) {
  const metaTitle = `${amenity.title} | Lifestyle Amenities | Anondo Rosemont Estate`;
  const metaDescription = `${amenity.title} at Anondo Rosemont Estate. ${amenity.text}`;

  return (
    <main className="w-full overflow-hidden bg-[#f8f3ec] text-[#241818]">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={amenity.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <RosemontPageHero
        eyebrow={amenity.eyebrow}
        title={amenity.title}
        copy={amenity.text}
        image={amenity.image}
      />

      <LifestyleAmenityDetailsPage
        amenity={amenity}
        otherAmenities={otherAmenities}
      />
    </main>
  );
}
