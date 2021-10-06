/* eslint-disable no-unused-vars */
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contactform"

import { StaticImage } from "gatsby-plugin-image"
const IndexPage: React.FC = () => {
  return (
    <div>
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../asset/images/Background smoke.png"
              alt="perfume"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            ></StaticImage>
          </header>
        </main>
        <Contact />
      </Layout>
    </div>
  )
}
export default IndexPage
