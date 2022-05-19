import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";
import Error from "../components/Error";
import Loader from "../components/Loader";

function OrderInfo() {
	const dispatch = useDispatch();
	const orderstate = useSelector((state) => state.getOrderByIdReducer);
	const { order, loading, error } = orderstate;
	const orderId = useParams().orderid;
	useEffect(() => {
		dispatch(getOrderById(orderId));
	}, [dispatch, orderId]);
	console.log("orderId", orderId);

	return (
		<div style={{ overflowX: "hidden" }}>
			{loading && <Loader />}
			{error && <Error error="Failed to load order details" />}
			{order && (
				<div>
					<div className="row m-5">
						<div className="col-md-5 card">
							<h2>Item In you order</h2>
							<hr />
							{order.orderItems.map((item) => (
								<div className="orderitem" key={item.id}>
									<h1>{item.name}</h1>
									<h1>Quantity: {item.quantity}</h1>
									<h1>
										Price: {item.price} x{item.quantity} :{" "}
										{item.price * item.quantity}
									</h1>
									<hr />
								</div>
							))}
						</div>
						<div
							style={{ textAlign: "left" }}
							className="col-md-5 card text-left"
						>
							<h2>Order Details</h2>
							<hr />
							<h3 className="text-left">Order Id: {order._id}</h3>
							<h3 className="text-left">Total Amount: {order.orderAmount}</h3>
							<h3 className="text-left">
								Date of Order: {order.createdAt.substring(0, 10)}
							</h3>
							<h3 className="text-left">
								Transaction Id: {order.transactionId}
							</h3>
							{order.isDelivered ? (
								<h3 className="text-left">Delivered</h3>
							) : (
								<h3 className="text-left">Order in process</h3>
							)}
							<hr />
							<div>
								<h2>Shipping Details</h2>
								<hr />
								<h1>
									Address: <strong>{order.shippingAddress.address}</strong>
								</h1>
								<h1>
									City: <strong>{order.shippingAddress.city}</strong>
								</h1>
								<h1>
									Country: <strong>{order.shippingAddress.country}</strong>
								</h1>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="row mt-5 justify-content-center">
				<div className="col-md-10">
					<h2>Replacement Criteria</h2>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
}

export default OrderInfo;
