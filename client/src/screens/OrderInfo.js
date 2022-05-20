import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { formatPrice } from "../helpers/FormatPrice";

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
		<div style={{ overflowX: "hidden", margin: "0 10%" }}>
			{loading && <Loader />}
			{error && <Error error="Failed to load order details" />}
			{order && (
				<div>
					<div className="row d-flex justify-content-between">
						<div className="col-md-5 card">
							<h2>Item In you order</h2>
							<hr />
							{order.orderItems.map((item) => (
								<div className="orderitem" key={item.id}>
									<img
										className="img img-fluid small-img"
										src={item.image}
										alt="product"
									/>
									<h1 className="text-primary mt-3">
										<i>{item.name}</i>
									</h1>
									<h1 className="text-secondary d-flex justify-content-between">
										<div>Quantity:</div>
										<i className="text-primary">{item.quantity}</i>
									</h1>
									<h1 className="text-secondary d-flex justify-content-between">
										<div>
											Price:{" "}
											<i className="text-dark">
												{formatPrice(item.price)}&nbsp;x{item.quantity} ={" "}
											</i>
										</div>
										<i className="text-primary">
											{formatPrice(item.price * item.quantity)}
										</i>
									</h1>
									<hr />
								</div>
							))}
						</div>
						<div
							style={{ textAlign: "left" }}
							className="col-md-5 card text-left"
						>
							<hr />
							<h2>Order Details</h2>
							<hr />
							<h3 className="text-left text-secondary">
								Order Id: <i className="text-dark">{order._id}</i>
							</h3>
							<h3 className="text-left text-secondary">
								Total Amount:{" "}
								<i className="text-dark">{formatPrice(order.orderAmount)}</i>
							</h3>
							<h3 className="text-left text-secondary">
								Date of Order:{" "}
								<i className="text-dark">{order.createdAt.substring(0, 10)}</i>
							</h3>
							<h3 className="text-left text-secondary">
								Transaction Id:{" "}
								<i className="text-dark">{order.transactionId}</i>
							</h3>
							{order.isDelivered ? (
								<h3 className="text-left text-secondary">
									Status: <i className="text-dark">Delivered</i>
								</h3>
							) : (
								<h3 className="text-left text-secondary">
									Status: <i className="text-dark">Order in process</i>
								</h3>
							)}
							<hr />
							<div>
								<h2>Shipping Details</h2>
								<hr />
								<h1 className="text-secondary">
									Address:{" "}
									<i>
										<strong className="text-dark">
											{order.shippingAddress.address}
										</strong>
									</i>
								</h1>
								<h1 className="text-secondary">
									City:{" "}
									<i>
										<strong className="text-dark">
											{order.shippingAddress.city}
										</strong>
									</i>
								</h1>
								<h1 className="text-secondary">
									Country:{" "}
									<i>
										<strong className="text-dark">
											{order.shippingAddress.country}
										</strong>
									</i>
								</h1>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="row mt-5 justify-content-center">
				<div className="col-md-10">
					<h2 className="text-center mt-3">Replacement Criteria</h2>
					<hr />
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
