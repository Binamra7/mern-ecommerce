import axios from "axios";

export const registerNewUser = () => (dispatch) => {
	dispatch({ type: "USER_REGISTER_REQUEST" });

	axios
		.post("/api/users/register")
		.then((res) => {
			dispatch({ type: "USER_REGISTER_SUCCESS", payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: "USER_REGISTER_FAIL", payload: err.response.data });
		});
};
