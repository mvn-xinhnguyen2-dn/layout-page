import "../styles/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <div className="root-app">
        <Head>
          <title>
            Abstrak - React Agency and React Template + RTL Preview -
            ThemeForest
          </title>
          <meta
            name="description"
            content="&lt;h2&gt;$10 Only for This Week Offer. The regular price is $24. Don’t miss this offer. Buy Now&..."
          />
          <link rel="icon" href="https://new.axilthemes.com/demo/react/abstrak/favicon.ico" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
}
