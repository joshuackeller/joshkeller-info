import "../index.css";
import Head from "next/head";
import localFont from "next/font/local";

const inktrap = localFont({
  src: [
    {
      path: "../public/fonts/whyte_inktrap/WhyteInktrap-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/whyte_inktrap/WhyteInktrap-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/whyte_inktrap/WhyteInktrap-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/whyte_inktrap/WhyteInktrap-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/whyte_inktrap/WhyteInktrap-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-inktrap",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inktrap.variable} font-sans`}>
      <Head>
        <title>{Component.title || "josh keller"}</title>
        <meta
          name="description"
          content={Component.description || "josh keller"}
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
