export const placeOrderReducer = (state = {}, action) => {
	switch (action.type) {
		case "PLACE_ORDER_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "PLACE_ORDER_SUCCESS":
			return {
				...state,
				loading: false,
				success: true,
			};
		case "PLACE_ORDER_FAILED":
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
export const getOrdersByUserIdReducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_ORDERSBYUSERID_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "GET_ORDERSBYUSERID_SUCCESS":
			return {
				...state,
				loading: false,
				orders: action.payload,
			};
		case "GET_ORDERSBYUSERID_FAILED":
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
export const getOrderByIdReducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_ORDERBYID_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "GET_ORDERBYID_SUCCESS":
			return {
				...state,
				loading: false,
				order: action.payload,
			};
		case "GET_ORDERBYID_FAILED":
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};

export const getAllOrdersReducer = (state = {}, action) => {
	switch (action.type) {
		case "GET_ALL_ORDERS_REQUEST":
			return {
				...state,
				loading: true,
			};
		case "GET_ALL_ORDERS_SUCCESS":
			return {
				...state,
				loading: false,
				orders: action.payload,
			};
		case "GET_ALL_ORDERS_FAILED":
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
