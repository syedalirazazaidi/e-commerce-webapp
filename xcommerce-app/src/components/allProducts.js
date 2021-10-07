import React from "react"
import { graphql } from "gatsby"

export default function AllProducts({ data }) {
  console.log(data, "ppppp}}")
  return <div style={{ color: "red" }}>hi dear</div>
}

export const query = graphql`
  {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          variants {
            price
          }
        }
      }
    }
  }
`
