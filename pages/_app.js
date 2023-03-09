import "../index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>{Component.title || "josh keller"}</title>
        <meta
          name="description"
          content={Component.description || "josh keller"}
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
