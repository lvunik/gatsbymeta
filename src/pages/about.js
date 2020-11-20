import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Link to="/">Home</Link>
      <h1>Dog</h1>
    </div>
  )
}

export default About
