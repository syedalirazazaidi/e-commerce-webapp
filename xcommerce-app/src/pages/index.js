/* eslint-disable no-unused-vars */
// Storefront access token:f5d0896637b35dbf6ce23d4d360b4f14
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contactform"

import { StaticImage } from "gatsby-plugin-image"
import AllProducts from "../components/allProducts"

import { graphql } from "gatsby"
const IndexPage = ({ data }) => {
  return (
    <div>
      <Layout>
        {/* <main className="page">
          <header className="hero">
            <StaticImage
              src="../asset/images/Background smoke.png"
              alt="perfume"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            ></StaticImage>
          </header>
        </main> */}
        {/* <AllProducts /> */}
        <div className="grid-render">
          {data.allShopifyProduct.edges.map(({ node }) => (
            <div>
              <div>Name: {node.title}</div>
              <div>
                <img width="100px" src={node.images[0].originalSrc} />
              </div>
              <div
                style={{ color: "white", margin: "5px", marginLeft: "55px" }}
              >
                <h3>SuperDuper</h3>
                <div>{node.title}</div>
              </div>
              <div className="renderbtn">
                <button className="btn1">Add To Cart</button>
                <button className="btn2">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <Contact />
      </Layout>
    </div>
  )
}
export default IndexPage

export const query = graphql`
  {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          images {
            originalSrc
          }
          variants {
            price
          }
        }
      }
    }
  }
`
