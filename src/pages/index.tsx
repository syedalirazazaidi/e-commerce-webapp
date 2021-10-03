/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";

// import logo from "../assets/images/newpix.png";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Contact from "../components/contactform";

// import logo from "../assets/images/SupperDupper.png";
import { StaticImage } from "gatsby-plugin-image";
const IndexPage: React.FC = () => {
	return (
		<div>
			<Layout>
				<main className="page">
					<header className="hero">
						<StaticImage
							src="../assets/images/newPix.png"
							alt="perfume"
							placeholder="tracedSVG"
							layout="fullWidth"
						></StaticImage>
					</header>
				</main>
				{/* <Image /> */}
				{/* <img className="img-mainlayout" src={logo} alt="my perfume" /> */}
				<Contact />
			</Layout>
		</div>
	);
};
export default IndexPage;
