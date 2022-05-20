import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../actions/orderActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Orders() {
	const orderstate = useSelector((state) => state.getOrdersByUserIdReducer);
	const { orders, loading, error } = orderstate;
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem("currentUser")) {
			dispatch(getOrdersByUserId());
		} else {
			window.location.href = "/login";
		}
	}, [dispatch]);
	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<h2 className="text-center mb-3">My Order List</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Order ID</th>
								<th>Amount</th>
								<th>Date</th>
								<th>Transaction ID</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{loading && <Loader />}
							{error && <Error error="Order could not be processed" />}
							{orders &&
								orders.map((order, i) => {
									return (
										<tr
											className="cursor-pointer"
											key={i}
											onClick={() =>
												(window.location = `/orderinfo/${order._id}`)
											}
										>
											<td>{order._id}</td>
											<td>{order.orderAmount}</td>
											<td>{order.createdAt.substring(0, 10)}</td>
											<td>{order.transactionId}</td>
											<td>
												{order.isDelivered ? (
													<p>Delivered</p>
												) : (
													<p>Order in process</p>
												)}
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Orders;
