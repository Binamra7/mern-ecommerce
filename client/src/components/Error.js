import React from "react";

const Error = ({ error }) => {
	return (
		<div
			className="alert alert-danger mt-3 text-center m-auto"
			style={{
				width: "50%",
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
