import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../actions/orderActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { formatPrice } from "../helpers/Formatter";

function Orders() {
	const orderstate = useSelector((state) => state.getOrdersByUserIdReducer);
	const { orders, loading, error } = orderstate;
	const dispatch = useDispatch();
	useEffect(() => {
		document.title = "My Orders | SleekStore";
		if (localStorage.getItem("currentUser")) {
			dispatch(getOrdersByUserId());
		} else {
			window.location.href = "/login";
		}
		// console.log("orders: ", orders);
	}, [dispatch]);
	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-md-9">
					<h2 className="text-center my-2">My Order List</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>S.N</th>
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
											key={order._id}
											onClick={() =>
												(window.location = `/orderinfo/${order._id}`)
											}
										>
											<td>{i + 1}</td>
											<td>{order._id}</td>
											<td>
												<i>{formatPrice(order.orderAmount)}</i>
											</td>
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
