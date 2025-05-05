import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="Buy" />
        <meta property="fc:frame:button:2" content="Sell" />
        <meta property="fc:frame:button:3" content="Watch" />
        <meta property="fc:frame:button:4" content="Unwatch" />
        <meta property="fc:frame:image" content="/image.png" />
        <meta property="fc:frame:post_url" content="/api/webhook" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}