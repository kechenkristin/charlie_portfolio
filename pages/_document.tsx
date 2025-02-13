import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/charlie.jpg"
          />
          <link
            rel="icon"
            type="image/jpeg"
            sizes="32x32"
            href="/static/favicon/charlie-32.jpeg"
          />
          <link
            rel="icon"
            type="image/jpeg"
            sizes="16x16"
            href="/static/favicon/charlie-16.jpeg"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
