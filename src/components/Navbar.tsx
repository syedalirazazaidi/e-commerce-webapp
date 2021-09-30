import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/superduper">Why SuperDuper</Link>
				</li>

				<li>
					<Link to="/newArrival">New Arrivals</Link>
				</li>
				<li>
					<Link to="/superDuperCommunity">SuperDuper Community</Link>
				</li>
				<li>
					<Link to="/perfectFlavor">Perfect Flavour</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery</Link>
				</li>
				<li>
					<Link to="/storyOfSimon">Story Of Simon</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
