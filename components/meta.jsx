import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/meta/favicon-16x16.png"
      />
      <link rel="manifest" href="/meta/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/meta/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/meta/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/meta/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta
        name="description"
        content={`Website for the PEN Peer Leaders`}
      />
      <meta property="og:image" content={"/meta/og_image.png"} />
    </Head>
  );
}
