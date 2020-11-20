import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const About = () => {
  return (
    <Helmet>
      <title>About</title>
      <meta property="og:title" content="About - Appiwat" />
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

export default About
