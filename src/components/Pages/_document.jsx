import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>{"Derek's Portfolio"}</title>
      <meta name="description" content="This portfolio is my presentation card! Welcome!" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
