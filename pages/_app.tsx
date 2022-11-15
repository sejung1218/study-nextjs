import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
