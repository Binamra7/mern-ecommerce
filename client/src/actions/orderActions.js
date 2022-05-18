import axios from "axios";

export const placeOrder = (token, subTotal) => (dispatch, getState) => {
	const currentUser = getState().loginReducer.currentUser;
	const cartItems_before = getState().cartReducer.cartItems;
	const cartItems = new Array();
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
