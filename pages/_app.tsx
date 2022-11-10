import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TestComponent from './component/TestComponent';

export default function App({ Component, pageProps }: AppProps) {
  // export default function App() {
  // return <div>Hello</div>;
  return <Component {...pageProps} />;
  // return <TestComponent />;
}
