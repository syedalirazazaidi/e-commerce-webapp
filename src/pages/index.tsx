/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Contact from "../components/contactform";

const IndexPage: React.FC = () => {
	return (
		<div>
			<Layout>
				<Contact />
			</Layout>
		</div>
	);
};
export default IndexPage;
