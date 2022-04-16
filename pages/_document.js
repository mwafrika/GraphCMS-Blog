import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head> 
         <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/ujuzi/image/upload/v1650090483/portfolio_images/home_zk39i5.png"
          />
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
