import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.css";
import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

const MAINTENANCE_MODE = true;

function UnderDevelopmentPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <Head>
        <title>Anondo Rosemont Estate | Website Under Development</title>
        <meta
          name="description"
          content="The Anondo Rosemont Estate website is currently under development. Please visit us again soon."
        />
        <meta name="theme-color" content="#380a0a" />
      </Head>

      <main className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-secondary px-5 py-24 text-center text-white sm:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(56,10,10,0.72)_0%,rgba(56,10,10,1)_100%)]" />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <span className="mx-auto mb-8 block h-px w-20 bg-white/70 sm:w-28" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-sm sm:tracking-[0.32em]">
            Something exceptional is taking shape
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Anondo Rosemont Estate Website is Under Development
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            We are thoughtfully preparing a refined digital experience. Please
            visit us again soon.
          </p>
          <span className="mx-auto mt-9 block h-px w-20 bg-white/70 sm:w-28" />
        </motion.div>
      </main>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  useLenis();

  if (MAINTENANCE_MODE) {
    return <UnderDevelopmentPage />;
  }

  return (
    // <Layout>
      <Component {...pageProps} />
    //   <Analytics />
    // </Layout>
  );
}

export default MyApp;
