import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Helmet>
      <title>HomePage</title>
      <meta property="og:title" content="HomePage - Appiwat" />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="https://openthread.google.cn/images/ot-contrib-google.png"
      />
      <meta property="og:description" content="Best It Solution" />
      <meta property="og:url" content="https://www.appiwat.com/" />
    </Helmet>
  )
}
