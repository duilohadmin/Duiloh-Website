import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import builder from "@builder.io/react";
builder.canTrack = false;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#181818"
        startPosition={0.7}
        stopDelayMs={0}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}
