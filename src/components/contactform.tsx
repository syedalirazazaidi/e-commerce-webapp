import React from "react";
import Layout from "./layout";
import { FaRegUser } from "@react-icons/all-files/fa/FaRegUser";
import { FaMicrophoneAlt } from "@react-icons/all-files/fa/FaMicrophoneAlt";
import { FaMailBulk } from "@react-icons/all-files/fa/FaMailBulk";
const Contact: React.FC = () => {
	return (
		<>
			<div className="contact-form">
				<p style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}>
					BUY HAPPY.BE HAPPY
				</p>
				<p className="paragraph-contact">
					We re here to answer any questions you may have. Simply pop us a
					message on our instant chat,and let us assist you in your wonderous
					vaep journey
				</p>
				<div className="form-container">
					<form>
						<div className="input-name">
							<FaRegUser className="user-icon " />
							<input
								type="text"
								placeholder="First Name"
								name="name"
								id="name"
								className="fname"
							/>
							<span>
								<FaRegUser className="user-icon " />
								<input
									type="text"
									placeholder="Last Name"
									name="name"
									id="name"
									className="fname"
								/>
							</span>
						</div>
						<div className="input-name">
							<FaMicrophoneAlt className="user-icon " />
							<input
								type="text"
								placeholder="Phone"
								name="phone"
								id="phone"
								className="p-name"
								required
							/>
						</div>
						<div className="input-name">
							<FaMailBulk className="user-icon " />
							<input
								type="text"
								placeholder="Email"
								name="email"
								id="email"
								className="p-name"
								required
							/>
						</div>
						<div className="input-name">
							<textarea
								name="message"
								id="message"
								placeholder="Message"
								className="textarea-message"
							></textarea>{" "}
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
