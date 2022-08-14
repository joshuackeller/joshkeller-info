import "../index.css";
import Head from "next/head";
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";
import { frontendConfig } from "../config/frontendConfig";

if (typeof window !== "undefined") {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

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
      <SuperTokensWrapper>
        <Component {...pageProps} />
      </SuperTokensWrapper>
    </div>
  );
}

export default MyApp;
