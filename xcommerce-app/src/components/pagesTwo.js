import React from "react"

import { StaticImage } from "gatsby-plugin-image"
function PageTwo() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#fff" }}>
        customize you pen. customize your lifestyle.
      </h1>
      <h4 style={{ textAlign: "center", color: "#fff" }}>
        {" "}
        it's time to decide which form of perfection you desire.in just three
        simple steps
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <StaticImage
            src="../asset/images/Vape Pen Website images/ENGINEERING FEATURES image_1.png"
            alt="perfume"
            placeholder="tracedSVG"
            layout="fixed"
            style={{ margin: "30px " }}
          />{" "}
        </div>
        <div>
          <StaticImage
            src="../asset/images/Vape Pen Website images/ENGINEERING FEATURES image_2.png"
            alt="perfume"
            placeholder="tracedSVG"
            layout="fixed"
            style={{ margin: "30px " }}
          />
        </div>
      </div>
      <h1 style={{ textAlign: "center", color: "#fff", margin: "40px" }}>
        STEP 1 :CHO0SE YOUR OIL
      </h1>
    </div>
  )
}

export default PageTwo
