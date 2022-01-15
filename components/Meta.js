import Head from "next/head";
import Link from "next/link";

export default function Meta() {
  return (
    <Head>
      <title>Eric Murrell</title>
      <meta name="description" content="Web Developer Portfolio" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content="/fb-preview.jpg" />
      <meta property="og:title" content="Eric Murrell" />
      <meta property="og:description" content="Web Developer" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@emurrelldev" />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/kgYHFXBk/twitter-meta.jpg"
      />
      <meta name="twitter:title" content="Eric Murrell - Web Developer" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Play:wght@400;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
  );
}
