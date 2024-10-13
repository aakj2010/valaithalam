import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Valaithalam - Web & Mobile Development</title>
      <meta
        name="description"
        content="Valaithalam offers professional web design, web development, mobile app development, and SEO services. Get your website and mobile app developed today!"
      />
      <meta
        name="keywords"
        content="web development, mobile apps, SEO, web hosting, graphic design"
      />
      <meta name="author" content="Valaithalam" />

      {/* Open Graph Tags (for social sharing) */}
      <meta
        property="og:title"
        content="Valaithalam - Web & Mobile Development"
      />
      <meta
        property="og:description"
        content="Valaithalam offers professional web design, web development, mobile app development, and SEO services."
      />
      <meta
        property="og:image"
        content="http://localhost:3000/images/valaithalam-logo.svg"
      />
      <meta property="og:url" content="http://localhost:3000" />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta
        name="twitter:title"
        content="Valaithalam - Web & Mobile Development"
      />
      <meta
        name="twitter:description"
        content="Professional web design, development, mobile apps, and SEO services."
      />
      <meta
        name="twitter:image"
        content="http://localhost:3000/images/valaithalam-logo.svg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Preload Logo Image */}
      <link rel="preload" href="/images/valaithalam-logo.svg" as="image" />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
