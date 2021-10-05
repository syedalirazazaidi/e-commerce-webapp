import { Link } from "gatsby";
import React from "react";
import { FaAlignJustify } from "@react-icons/all-files/fa/FaAlignJustify";

const Navbar = () => {
	const [show, setShow] = React.useState(false);
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/" style={{ fontFamily: "serif", color: "white" }}>
						SuperDuper
					</Link>
					<button className="nav-btn" onClick={() => setShow(!show)}>
						<FaAlignJustify />
					</button>
				</div>
				<div className={show ? "nav-links show-links" : "nav-links"}>
					<Link
						to="/superduper"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						Why SuperDuper
					</Link>
					<Link
						to="/newArrival"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						New Arrival
					</Link>
					<Link
						to="/superDuperCommunity"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						SuperDuper Community
					</Link>
					<Link
						to="/perfectFlavor"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						Perfect Flavour
					</Link>
					<Link
						to="/gallery"
						className="nav-link"
						activeClassName="active-link"
						onClick={() => setShow(false)}
					>
						Gallery
					</Link>
					<div className="nav-link contact-link">
						<button className="btn">Login</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
