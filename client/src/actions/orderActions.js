import axios from "axios";

export const placeOrder = (token, subTotal) => (dispatch, getState) => {
	const currentUser = getState().loginReducer.currentUser;
	const cartItems_before = getState().cartReducer.cartItems;
	const cartItems = new Array(0);
	for (let i = 0; i < cartItems_before.length; i++) {
		let item = {
			name: cartItems_before[i].name,
			quantity: cartItems_before[i].quantity,
			_id: cartItems_before[i]._id,
			price: cartItems_before[i].price,
		};
		cartItems.push(item);
	}

	dispatch({ type: "PLACE_ORDER_REQUEST" });
	axios
		.post("http://localhost:5000/api/orders/placeorder", {
			token,
			subTotal,
			currentUser,
			cartItems,
		})
		.then((res) => {
			dispatch({ type: "PLACE_ORDER_SUCCESS" });
			console.log(res);
		})
		.catch((err) => {
			dispatch({ type: "PLACE_ORDER_FAILED" });
			console.error(err);
		});
};
export const getOrdersByUserId = () => (dispatch, getState) => {
	const userid = getState().loginReducer.currentUser._id;
	dispatch({ type: "GET_ORDERSBYUSERID_REQUEST" });

	axios
		.post("http://localhost:5000/api/orders/getordersbyuserid", {
			userId: userid,
		})
		.then((res) => {
			dispatch({ type: "GET_ORDERSBYUSERID_SUCCESS", payload: res.data });
			console.log(res.data);
		})
		.catch((err) => {
			dispatch({ type: "GET_ORDERSBYUSERID_FAILED", payload: err });
		});
};
export const getOrderById = (orderid) => (dispatch, getState) => {
	dispatch({ type: "GET_ORDERBYID_REQUEST" });

	axios
		.post("http://localhost:5000/api/orders/getorderbyid", { orderid })
		.then((res) => {
			dispatch({ type: "GET_ORDERBYID_SUCCESS", payload: res.data });
			console.log(res.data);
		})
		.catch((err) => {
			dispatch({ type: "GET_ORDERBYID_FAILED", payload: err });
		});
};

export const getAllOrders = () => (dispatch) => {
	dispatch({ type: "GET_ALL_ORDERS_REQUEST" });

	axios
		.get("/api/orders/getallorders")
		.then((res) => {
			dispatch({ type: "GET_ALL_ORDERS_SUCCESS", payload: res.data });
			console.log("res.data", res.data);
		})
		.catch((err) => {
			dispatch({ type: "GET_ALL_ORDERS_FAILED", payload: err });
		});
};
