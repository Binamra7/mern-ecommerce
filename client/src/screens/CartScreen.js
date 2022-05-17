// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, /*deleteFromCart*/ } from "../actions/cartActions";

const CartScreen = () => {
	const dispatch = useDispatch();
	const cartreducerstate = useSelector((state) => state.cartReducer);
	const { cartItems } = cartreducerstate;

	let subTotal = cartItems.reduce(
		(acc = 0, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<div>
			<div className="row mt-3 justify-content-center">
				<div className="col-md-8 card text-center">
					<h1 className="text-center m-5">My Cart</h1>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total Price</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((item) => {
								return (
									<>
										<tr>
											<td>{item.name}</td>
											<td>{item.price}</td>
											<td>
												<select
													value={item.quantity}
													onChange={(e) => {
														dispatch(addToCart(item, e.target.value));
													}}
												>
													{[...Array(item.countInStock).keys()].map(
														(value, index) => {
															return (
																<option key={index} value={index + 1}>
																	{index + 1}
																</option>
															);
														}
													)}
												</select>
											</td>
											<td>{item.quantity * item.price}</td>
											<i
												className="fa fa-trash"
												onClick={() =>
													dispatch({ type: "DELETE_FROM_CART", payload: item })
												}
											></i>
										</tr>
									</>
								);
							})}
						</tbody>
					</table>
					<hr />
					<h2 className="text-center">Sub Total: {subTotal}</h2>
					<hr />
					<div className="text-center p-3">
						<button className="btn btn-primary p-2">Pay Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
