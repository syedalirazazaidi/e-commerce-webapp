/* eslint-disable no-unused-vars */
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
  return (
    <div>
      <StaticImage
        src="../asset/images/newPix.png"
        alt="perfume"
        placeholder="tracedSVG"
        layout="fullWidth"
        className="image-css"
      ></StaticImage>
    </div>
  )
}

export default Image
