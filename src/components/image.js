/* eslint-disable no-unused-vars */
import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import img from "../assets/images/newPix.png";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
	return (
		<div className="newtume">
			<img
				src="https://images.unsplash.com/photo-1585120040315-2241b774ad0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
				alt="A kitten"
			/>
			<div>
				<h1 style={{ color: "black" }}>SuperDuper</h1>
				<p style={{ color: "black" }}>Vape Pen</p>
				<h2>Ultimate User Experience</h2>
				<p>From The First To Last Puff,Immerce Yourself In The Unknown</p>
			</div>
		</div>
	);
};

export default Image;

// "@react-icons/all-files": "^4.1.0",
// "@types/react-icons": "^3.0.0",
// "eslint-loader": "^3.0.4",
// "gatsby": "^2.20.24",
// "gatsby-image": "^2.2.39",
// "gatsby-plugin-manifest": "^2.2.39",
// "gatsby-plugin-offline": "^3.0.32",
// "gatsby-plugin-react-helmet": "^3.1.21",
// "gatsby-plugin-typescript": "^2.1.26",
// "normalize.css": "^8.0.1",
// "prop-types": "^15.7.2",
// "react": "^16.13.1",
// "react-dom": "^16.12.0",
// "react-helmet": "^5.2.1",
// "gatsby-plugin-image": "^1.14.0",
// "gatsby-source-filesystem": "^2.11.1",
// "gatsby-plugin-sharp": "^2.14.4",
// "gatsby-transformer-sharp": "^2.12.1"
