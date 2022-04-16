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
          content="https://res.cloudinary.com/ujuzi/image/upload/v1650092446/portfolio_images/FireShot_Capture_008_-_CMS_Blog_-_blog-with-cms.vercel.app_w3pkph.png"
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
