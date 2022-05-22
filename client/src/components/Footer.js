import React from "react";

const Footer = () => {
	return (
		<div className="footer row bg-dark text-center text-light p-5">
			<h1 className="text-center text-light">
				Designed by{" "}
				<a
					className="text-decoration-none"
					href="https://www.github.com/binamra7"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i>Binamra</i>
				</a>
			</h1>
			<h1 className="text-center text-light">
				&copy; {new Date().getFullYear()}. All rights reserved.
			</h1>
		</div>
	);
};

export default Footer;
