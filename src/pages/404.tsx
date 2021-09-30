/* eslint-disable no-unused-vars */
import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
	<Layout>
		<main className="error-page">
			<section>
				<h1>404</h1>
				<h3>page not found</h3>
			</section>
		</main>
		{/* <SEO title="404: Not found" /> */}
		{/* <h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
	</Layout>
);

export default NotFoundPage;
