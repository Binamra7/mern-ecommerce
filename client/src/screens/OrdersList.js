import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderActions";
import { getAllOrdersReducer } from "../reducers/orderReducer";
import Loader from "../components/Loader";
import Error from "../components/Error";

function OrdersList() {
	const dispatch = useDispatch();
	const getallordersstate = useSelector((state) => state.getAllOrdersReducer);
	const { orders, loading, error } = getallordersstate;
	useEffect(() => {
		document.title = "Orders List";
		dispatch(getAllOrders());
	}, []);

	return (
		<div>
			<h2>Orders List</h2>
			{loading && <Loader />}
			{error && <Error error="Cannot load orders list" />}
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Order ID</th>
						<th>Username</th>
						<th>Email</th>
						<th>Amount</th>
						<th>Order Data</th>
						<th>Transaction Id</th>
					</tr>
				</thead>
				<tbody>
					{orders &&
						orders.map((order) => {
							return (
								<tr
									onClick={() => {
										window.location.href = `/orderinfo/${order._id}`;
									}}
									key={order._id}
								>
									<td>{order._id}</td>
									<td>{order.name}</td>
									<td>{order.email}</td>
									<td>{order.orderAmount}</td>
									<td>{order.createdAt}</td>
									<td>{order.transactionId}</td>
									{/* <td>
										<i
											// onClick={() => dispatch(deleteUser(user._id))}
											className="fa fa-trash"
										></i>
									</td> */}
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}

export default OrdersList;
