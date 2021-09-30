import React from "react";

const Footer = () => {
	return (
		<footer className="page-footer">
			© {new Date().getFullYear()}, Built with
			{` `}
			<a href="https://www.github.com/syedalirazazaidi">Ali-Raza</a>
		</footer>
	);
};

export default Footer;
