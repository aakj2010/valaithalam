import { ThemeProvider } from "@/components/context/theme-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <link
          rel="preload"
          href="/images/hero-banner-background-pattern.svg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/hero-banner-background-pattern-dark.svg"
          as="image"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
