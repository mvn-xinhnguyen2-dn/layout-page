import "../styles/styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { FaMoon, FaLightbulb } from "react-icons/fa";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const onSwichTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <>
      <div
        className={`root-app ${isDarkTheme == true ? "active-dark-theme" : ""}`}
      >
        <Head>
          <title>
            Abstrak - React Agency and React Template + RTL Preview -
            ThemeForest
          </title>
          <meta
            name="description"
            content="&lt;h2&gt;$10 Only for This Week Offer. The regular price is $24. Don’t miss this offer. Buy Now&..."
          />
          <link
            rel="icon"
            href="https://new.axilthemes.com/demo/react/abstrak/favicon.ico"
          />
        </Head>
        <div className="swicher-theme" onClick={() => onSwichTheme()}>
          {isDarkTheme == false ? (
            <div className="btn btn-swicher-theme dark-color">
              <FaMoon />
            </div>
          ) : (
            <div className="btn btn-swicher-theme white-color">
              <FaLightbulb />
            </div>
          )}
        </div>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
}
