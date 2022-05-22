import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";
import { formatPrice } from "../helpers/Formatter";

const CartScreen = () => {
	useEffect(() => {
		if (localStorage.getItem("currentUser")) {
			document.title = "My Cart | SleekStore";
		} else {
			window.location.href = "/login";
		}
	});
	const dispatch = useDispatch();
	const cartreducerstate = useSelector((state) => state.cartReducer);
	const { cartItems } = cartreducerstate;

	let subTotal = cartItems.reduce(
		(acc = 0, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-md-8 card text-center">
					<h2 className="text-center my-2">My Cart</h2>
					<table className="table table-striped">
						<thead>
							<tr>
								<th>S.N</th>
								<th>Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total Price</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{cartItems.map((item, i) => {
								return (
									<>
										<tr>
											<td>{i + 1}</td>
											<td>{item.name}</td>
											<td>
												<i>{formatPrice(item.price)}</i>
											</td>
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
											<td>
												<i>{formatPrice(item.quantity * item.price)}</i>
											</td>
											<td>
												<i
													className="fa fa-trash text-danger text-center "
													onClick={() => dispatch(deleteFromCart(item))}
												></i>
											</td>
										</tr>
									</>
								);
							})}
						</tbody>
					</table>
					<hr />
					<h2 className="text-center">
						<i>
							Sub Total:&nbsp;
							{formatPrice(subTotal)}
						</i>
					</h2>
					<hr />
					<Checkout amount={subTotal} />
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
