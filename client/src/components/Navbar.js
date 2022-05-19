import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function Navbar() {
	const cartReducer = useSelector((state) => state.cartReducer);
	const dispatch = useDispatch();
	const { cartItems } = cartReducer;

	const currentUser = JSON.parse(localStorage.getItem("currentUser") || null);
	return (
		<div>
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="/">
					SleekShops
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
					<span className="navbar-toggler-icon">
						<i className="fas fa-bars" style={{ color: "white" }}></i>
					</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div
						className="navbar-nav"
						style={{ marginLeft: "auto", marginRight: "20px" }}
					>
						{currentUser ? (
							<div className="dropdown">
								<button
									style={{ backgroundColor: "rgba(0,0,0,0)" }}
									className="btn btn-dark"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									{currentUser.name}&nbsp;
									<i class="fa-solid fa-user"></i>
								</button>
								<div
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton"
								>
									<a className="dropdown-item" href="/profile">
										Profile
									</a>
									<a className="dropdown-item" href="/orders">
										Orders
									</a>
									<button
										onClick={() => {
											dispatch(logoutUser());
										}}
										className="dropdown-item"
									>
										Logout
									</button>
								</div>
							</div>
						) : (
							<li className="nav-item">
								<a className="nav-link" href="/login">
									Login
								</a>
							</li>
						)}
						<li className="nav-item">
							<a className="nav-link" href="/cart">
								<i className="fas fa-shopping-cart"></i>
								{cartItems.length}
							</a>
						</li>
					</div>
				</div>
			</nav>
		</div>
	);
}
