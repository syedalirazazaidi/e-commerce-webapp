/* eslint-disable no-unused-vars */
// Storefront access token:f5d0896637b35dbf6ce23d4d360b4f14
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Contact from "../components/contactform"
import Client from "shopify-buy"

import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AllProducts from "../components/allProducts"
import PagesOne from "../components/pagesOne"
import PageTwo from "../components/pagesTwo"
// require("dotenv").config()
const client = Client.buildClient({
  domain: "demo-ecoerce.myshopify.com",
  storefrontAccessToken: "f5d0896637b35dbf6ce23d4d360b4f14",
})
const IndexPage = ({ data }) => {
  const [checkoutSession, setCheckoutSession] = React.useState()

  React.useEffect(() => {
    return (async () => {
      const session = await client.checkout.create()
      console.log("session = ", session)
      setCheckoutSession(session)
      localStorage.setItem("checkoutid", session.id)
    })()
  }, [])
  return (
    <div>
      <Layout>
        <PagesOne />
        <PageTwo />
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
                <button
                  className="btn1"
                  onClick={async () => {
                    const session = await client.checkout.addLineItems(
                      checkoutSession.id,
                      [
                        {
                          variantId: node.variants[0].id.split("__")[2],
                          quantity: 2,
                        },
                      ]
                    )
                    setCheckoutSession(session)

                    console.log("Test = ", session)
                  }}
                >
                  Add To Cart
                </button>
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
