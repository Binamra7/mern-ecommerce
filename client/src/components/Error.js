import React from "react";

const Error = ({ error }) => {
	return (
		<div
			className="alert alert-danger mt-3 text-center ml-auto"
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h1 className="text-center p-4">{error}</h1>
		</div>
	);
};
export default Error;
