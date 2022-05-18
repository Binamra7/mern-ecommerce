import React from "react";

const Loader = () => {
	return (
		<div className="div mt-5">
			<div
				className="spinner-border mt-5"
				role="status"
				style={{ width: "150px", height: "150px" }}
			>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};
export default Loader;
