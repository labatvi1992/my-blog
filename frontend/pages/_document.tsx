import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* eslint-disable-next-line */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
          <link href="/css/nucleo-icons.css" rel="stylesheet" />
          <link href="/css/nucleo-svg.css" rel="stylesheet" />
          <link href="/css/aos.css" rel="stylesheet" />
          <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
          <script
            src="https://kit.fontawesome.com/42d5adcbca.js"
            crossOrigin="anonymous"
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="/js/core/popper.min.js"
            type="text/javascript"
            async
          ></script>
          <script
            src="/js/core/bootstrap.min.js"
            type="text/javascript"
            async
          ></script>
          <script src="/js/plugins/perfect-scrollbar.min.js" async></script>
          <script src="/js/plugins/countup.min.js" async></script>
          <script src="/js/plugins/parallax.min.js" async></script>
          <script src="/js/plugins/typedjs.js" async></script>
          <script
            src="/js/soft-design-system.min.js?v=1.0.9"
            type="text/javascript"
            async
          ></script>
          <script src="/js/plugins/aos.js" async></script>
          <script src="/js/plugins/swiper-bundle.min.js" async></script>
          <script src="/js/custom.js" type="text/javascript" async></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
