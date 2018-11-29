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
            body {
              margin: 0;
              font-family: Helvetica, Geneva, Tahoma, sans-serif;
            }
            body,
            a {
              color: ${Colors.darkSlateGray};
            }
            a {
              text-decoration: none;
            }
            p {
              font-weight: 300;
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
