import axios from "axios";

export const registerNewUser = (user) => (dispatch) => {
	dispatch({ type: "USER_REGISTER_REQUEST" });

	axios
		.post("http://localhost:5000/api/user/register", user)
		.then((res) => {
			dispatch({ type: "USER_REGISTER_SUCCESS" });
			dispatch(loginUser(user));
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

export const updateUser = (userid, updatedUser) => (dispatch) => {
	dispatch({ type: "USER_UPDATE_REQUEST" });

	axios
		.post("http://localhost:5000/api/user/update", { updatedUser, userid })
		.then((res) => {
			dispatch({ type: "USER_UPDATE_SUCCESS" });
			console.log(res);
			// window.location.reload();
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "USER_UPDATE_FAIL", payload: err });
		});
};
export const getAllUsers = () => (dispatch) => {
	dispatch({ type: "GET_ALL_USERS_REQUEST" });

	axios
		.get("http://localhost:5000/api/user/getallusers")
		.then((res) => {
			dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: res.data });
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "GET_USERS_ALL_FAILED", payload: err });
		});
};
export const deleteUser = (userid) => (dispatch) => {
	dispatch({ type: "DELETE_USER_REQUEST" });

	axios
		.post("http://localhost:5000/api/user/deleteuser", { userid })
		.then((res) => {
			dispatch({ type: "DELETE_USER_SUCCESS", payload: res.data });
			console.log(res);
			alert("User deleted successfully");
			window.location.reload();
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "DELETE_USER_FAILED", payload: err });
		});
};
