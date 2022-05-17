import axios from "axios";

export const registerNewUser = (user) => (dispatch) => {
	dispatch({ type: "USER_REGISTER_REQUEST" });

	axios
		.post("http://localhost:5000/api/user/register", user)
		.then((res) => {
			dispatch({ type: "USER_REGISTER_SUCCESS" });
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "USER_REGISTER_FAIL", payload: err });
		});
};
export const loginUser = (user) => (dispatch) => {
	dispatch({ type: "USER_LOGIN_REQUEST" });

	axios
		.post("http://localhost:5000/api/user/login", user)
		.then((res) => {
			dispatch({ type: "USER_LOGIN_SUCCESS" });
			localStorage.setItem("currentUser", JSON.stringify(res.data));
			window.location.href = "/";
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "USER_LOGIN_FAIL", payload: err });
		});
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("currentUser");
	localStorage.removeItem("cartItems");
	dispatch({ type: "USER_LOGOUT" });
	window.location.href = "/login";
};
