import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
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
        <meta property="og:title" content="Build Your Website" />
        <meta
          property="og:description"
          content="Valaithalam offers professional web design, web development, mobile app development, and SEO services."
        />
        <meta
          property="og:image"
          content="https://valaithalam.in/images/valaithalam-logo.svg"
        />
        <meta property="og:url" content="https://valaithalam.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content="Build Your Website" />
        <meta
          name="twitter:description"
          content="Professional web design, development, mobile apps, and SEO services."
        />
        <meta
          name="twitter:image"
          content="https://valaithalam.in/images/valaithalam-logo.svg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href="https://valaithalam.in" />

        {/* Preload Logo Image */}
        <link
          rel="preload"
          href="https://valaithalam.in/images/valaithalam-logo.svg"
          as="image"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
