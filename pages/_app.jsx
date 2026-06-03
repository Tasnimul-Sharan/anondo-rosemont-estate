import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/index.css";
import { useLenis } from "../Hooks/useLenis";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  useLenis();

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
