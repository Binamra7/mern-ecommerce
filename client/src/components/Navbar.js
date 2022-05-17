import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
	const cartReducer = useSelector((state) => state.cartReducer);
	const dispatch = useDispatch();
	const { cartItems } = cartReducer;
	return (
		<div>
			<nav className="navbar navbar-expand-lg ">
				<a className="navbar-brand" href="/">
					Sheyshop
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="/login">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/cart">
								<i className="fas fa-shopping-cart"></i>
								{cartItems.length}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
