import Document, { Head, Main, NextScript } from 'next/document';
import { Colors, Device } from '../common/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style global jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700');
            @media ${Device.mobileS} {
              html {
                font-size: 0.8rem;
              }
            }
            body {
              font-family: 'Source Sans Pro', sans-serif;
              font-weight: 400;
            }
            body,
            a {
              color: ${Colors.darkSlateGray};
            }
            a {
              text-decoration: none;
            }
            h1,
            h2,
            h3 {
              font-weight: 600;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
