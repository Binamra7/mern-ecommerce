import React from "react";

const Success = ({ success }) => {
	return (
		<div
			className="alert alert-success mt-5 text-center ml-auto"
			style={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<h1 className="text-center p-4">{success}</h1>
		</div>
	);
};
export default Success;
