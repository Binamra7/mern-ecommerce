export const registerNewUserReducer = (state = {}, action) => {
	switch (action.type) {
		case "USER_REGISTER_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "USER_REGISTER_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
			};
		case "USER_REGISTER_FAIL":
			return {
				...state,
				loading: false,
				error: "User already exists",
			};
		default:
			return state;
	}
};
export const loginReducer = (state = {}, action) => {
	switch (action.type) {
		case "USER_LOGIN_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "USER_LOGIN_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
				error: false,
			};
		case "USER_LOGIN_FAIL":
			return {
				...state,
				loading: false,
				error: "Invalid Credentials",
			};
		case "USER_LOGOUT":
			return {
				...state,
			};

		default:
			return state;
	}
};
export const updateReducer = (state = {}, action) => {
	switch (action.type) {
		case "USER_UPDATE_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "USER_UPDATE_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
			};
		case "USER_UPDATE_FAIL":
			return {
				...state,
				loading: false,
				error: "Something went wrong",
			};
		default:
			return state;
	}
};
export const getAllUsersReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case "GET_ALL_USERS_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "GET_ALL_USERS_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
				users: action.payload,
			};
		case "GET_ALL_USERS_FAILED":
			return {
				...state,
				loading: false,
				error: "Something went wrong",
			};
		default:
			return state;
	}
};
export const deleteUserReducer = (state = {}, action) => {
	switch (action.type) {
		case "DELETE_USER_REQUEST":
			return {
				...state,
				loading: true,
				error: false,
			};
		case "DELETE_USER_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
				error: false,
				users: action.payload,
			};
		case "DELETE_USER_FAILED":
			return {
				...state,
				loading: false,
				error: "Something went wrong",
			};
		default:
			return state;
	}
};
