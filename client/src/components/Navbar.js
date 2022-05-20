import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import "./NavbarStyles.css";

export default function Navbar() {
	const cartReducer = useSelector((state) => state.cartReducer);
	const dispatch = useDispatch();
	const { cartItems } = cartReducer;

	const currentUser = JSON.parse(localStorage.getItem("currentUser") || null);
	return (
		<div>
			<nav
				style={{ backgroundColor: "#f8f8ff !important" }}
				className="navbar navbar-expand-lg p-4"
			>
				<a
					className="navbar-brand d-flex align-items-baseline"
					href="/"
					style={{ marginLeft: "10%" }}
				>
					<h2>SleekStore &nbsp;</h2>
					{/* <i className="fa fa-shopping-bag" aria-hidden="true"></i> */}
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
						<i className="fas fa-bars" style={{ color: "black" }}></i>
					</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div
						className="navbar-nav"
						style={{ marginLeft: "auto", marginRight: "15%" }}
					>
						{currentUser ? (
							<div className="dropdown">
								<button
									style={{ backgroundColor: "rgba(0,0,0,0)" }}
									className="btn btn-dark user-btn"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									{currentUser.name}&nbsp;&nbsp;
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
										My Orders
									</a>
									<button
										onClick={() => {
											dispatch(logoutUser());
										}}
										className="dropdown-item"
									>
										Logout &nbsp;&nbsp;
										<i class="fa fa-sign-out" aria-hidden="true"></i>
									</button>
								</div>
							</div>
						) : (
							<li className="nav-item">
								<a className="nav-link btn user-btn btn-dark" href="/login">
									Login / Register
								</a>
							</li>
						)}
						<li className="nav-item">
							<a className="nav-link cart-icon" href="/cart">
								<i className="fas fa-shopping-cart"></i>
								<span className="cart-qty">{cartItems.length}</span>
							</a>
						</li>
					</div>
				</div>
			</nav>
			<hr
				style={{
					color: "black",
					width: "80%",
					margin: "auto",
					marginBottom: "20px",
				}}
			/>
		</div>
	);
}
