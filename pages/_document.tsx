import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link rel="icon" href="/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico"/>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;