import "../styles/globals.css";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";
import Header from "@/components/Header";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

const montrealMedium = localFont({
  src: "../public/PPNeueMontreal-Medium.otf",
  variable: "--montreal",
});

function App({ Component, pageProps }) {
  return (
    <>

      <div
        className={`flex flex-col isolate min-h-full ${montrealMedium.className}`}
      >
        <Head>
          <title>Dago Artist</title>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇲🇬</text></svg>"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default App;
