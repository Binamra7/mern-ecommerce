import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";
export default function Checkout({ amount }) {
	const dispatch = useDispatch();
	const tokenHandler = (token) => {
		console.log(token);
		dispatch(placeOrder(token, amount));
	};

	return (
		<div>
			<StripeCheckout
				token={tokenHandler}
				amount={amount * 100}
				shippingAddress
				billingAddress
				currency="USD"
				stripeKey="pk_test_51L0btjD7y6aHzyHtwMocItRoGRKatOhgAYiks6xMvq76uQxPbPqYHL4YLZtb2MeYgyo8GxJsC6pff19sDZhPkevo00b1GGQmVk"
			>
				<button className="btn btn-dark">Pay Now</button>
			</StripeCheckout>
		</div>
	);
}
