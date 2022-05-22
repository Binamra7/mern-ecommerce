import axios from "axios";

export const registerNewUser = (user) => (dispatch) => {
	dispatch({ type: "USER_REGISTER_REQUEST" });

	axios
		.post("https://sleekstore.herokuapp.com/api/user/register", user)
		.then((res) => {
			dispatch({ type: "USER_REGISTER_SUCCESS" });
			dispatch(loginUser(user));
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "USER_REGISTER_FAIL", payload: err });
		});
};

export const loginUser = (user) => (dispatch) => {
	dispatch({ type: "USER_LOGIN_REQUEST" });

	axios
		.post("https://sleekstore.herokuapp.com/api/user/login", user)
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

export const updateUser = (userId, updatedUser) => (dispatch) => {
	dispatch({ type: "USER_UPDATE_REQUEST" });

	axios
		.put("https://sleekstore.herokuapp.com/api/user", { updatedUser, userId })
		.then((res) => {
			dispatch({ type: "USER_UPDATE_SUCCESS", payload: res.data });
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "USER_UPDATE_FAIL", payload: err });
		});
};

export const getAllUsers = () => (dispatch) => {
	dispatch({ type: "GET_ALL_USERS_REQUEST" });

	axios
		.get("https://sleekstore.herokuapp.com/api/user/users")
		.then((res) => {
			dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: res.data });
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "GET_USERS_ALL_FAILED", payload: err });
		});
};

export const getUserById = () => (dispatch, getState) => {
	const userId = getState().loginReducer.currentUser._id;
	dispatch({ type: "GET_USER_BY_ID_REQUEST" });
	axios
		.get(`https://sleekstore.herokuapp.com/api/user/${userId}`)
		.then((res) => {
			dispatch({ type: "GET_USER_BY_ID_SUCCESS", payload: res.data });
			console.log(res.data, typeof res.data);
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "GET_USER_BY_ID_FAILED", payload: err });
		});
};

export const deleteUser = (userId) => (dispatch) => {
	dispatch({ type: "DELETE_USER_REQUEST" });

	axios
		.delete(`https://sleekstore.herokuapp.com/api/user/${userId}`)
		.then((res) => {
			dispatch({ type: "DELETE_USER_SUCCESS", payload: res.data });
			alert("User deleted successfully");
			window.location.reload();
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: "DELETE_USER_FAILED", payload: err });
		});
};
