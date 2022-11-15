import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TestComponent from './component/TestComponent';
import Head from 'next/head';
import * as React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  // export default function App() {
  // return <div>Hello</div>;
  <Head>
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
  </Head>
  return <Component {...pageProps} />;
  // return <TestComponent />;
}



