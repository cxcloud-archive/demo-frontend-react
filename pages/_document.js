import Document, { Head, Main, NextScript } from 'next/document';
import { Colors } from '../common/theme';

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
            @media only screen and (max-width: 425px) {
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
          <script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
