import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Helmet>
      <title>HomePage</title>
      <meta
        property="og:title"
        content="Product Hunt – The best new products in tech."
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="https://api.url2png.com/v6/P5329C1FA0ECB6/790272390317dc724643b1ca88f5da6e/png/?url=https://www.producthunt.com/"
      />
      <meta
        property="og:deschttps://local-ogp.firebaseapp.com/site/zVFBfE25WIIIb0eIC8Pyription"
        content="Product Hunt is a curation of the best new products, every day. Discover the latest mobile apps, websites, and technology products that everyone&#x27;s talking about."
      />
      <meta property="og:url" content="https://www.producthunt.com/" />
    </Helmet>
  )
}
