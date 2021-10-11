import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import backgroundImg from "../asset/images/Background smoke.png"
import mainImg from "../asset/images/About vedio.png"
import backImg from "../asset/images/background shape.png"
import aboutSmoke from "../asset/images/About smoke.png"
import { FaRegPlayCircle } from "@react-icons/all-files/fa/FaRegPlayCircle"
function PagesOne() {
  return (
    <div>
      <img
        src={backgroundImg}
        alt="backgroundImg"
        style={{
          width: "90%",
          height: "90%",
          alignContent: "center",
          position: "relative",
        }}
      />
      <div
        style={{
          alignItem: "center",
          display: "flex",
          justifyContent: "space-around",
          position: "absolute",
          right: 0,
          top: "10rem",
          left: "70px",
          bottom: "80px",
        }}
      >
        <div>
          <h1>SUPERDUPER</h1>
          <h3>Vape Pen</h3>
          <p style={{ color: "white" }}>Ultimate USer Experience</p>
          <p style={{ color: "white" }}>
            From the first tp last Puff yourself in the unknown
          </p>
          <div>
            <button
              style={{
                padding: "10px",
                margin: "5px",
                borderRadius: "15px",
                backgroundColor: " #c94b4b",
                color: "#fff",
                border: "none",
              }}
            >
              Learn More{" "}
            </button>
            <button
              style={{
                padding: "8px",
                margin: "5px",
                borderRadius: "15px",
                background: "transparent",
                color: "#ffff",
                border: "1px solid #ffff",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div style={{ marginRight: "20px" }}>
          <div style={{ position: "relative" }}>
            <StaticImage
              src="../asset/images/Vape Pen Website images/Green Vape pen Header.png"
              alt="perfume"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fixed"
            />
          </div>
          <div style={{ position: "absolute", top: "24px" }}>
            <StaticImage
              src="../asset/images/Vape Pen Website images/Orange Vape pen Header.png"
              alt="perfume"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-380px",
        }}
      >
        <div>
          <img
            src={backImg}
            alt="backImg"
            style={{
              width: "440px",
              height: "180px",
              position: "absolute",
              bottom: "-850px",
            }}
          />
          <img
            src={mainImg}
            alt="mainImg"
            style={{ width: "850px", height: "740px", position: "relative" }}
          />
          <div>
            <FaRegPlayCircle
              style={{
                color: "white",
                width: "75px",
                height: "75px",
                position: "absolute",
                left: "440px",
                bottom: "-650px",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <img
              src={aboutSmoke}
              alt="mainImg"
              style={{ width: "500px", height: "600px" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-770px",
            }}
          >
            <h1>PUT THAT IN YOUR VAPE AND SMOKE IT.</h1>
            <p
              style={{
                color: "white",
                marginRight: "40px",
                alignItems: "center",
                width: "480px",
                letterSpacing: "1px",
              }}
            >
              the newest concept in electronic disposable vapes :extracted
              directly from local single-source plants,we provide the highest
              quality strains for the true cannabis enthusiast.do you dare to
              explore
            </p>
            <button
              style={{ color: "black", borderRadius: "30px", padding: "10px" }}
            >
              Learn More About us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PagesOne
