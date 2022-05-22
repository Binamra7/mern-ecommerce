import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";
import "./NavbarStyles.css";
import SleekStoreLogo from "../assets/images/sleekstore-logo.png";

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
					<img
						className="img logo"
						src={SleekStoreLogo}
						alt="sleekstore logo"
					/>
					{/* <h2>SleekStore &nbsp;</h2> */}
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
						className="navbar-nav d-flex align-items-center justify-content-center"
						style={{ marginLeft: "auto", marginRight: "15%" }}
					>
						<li>
							<a className="text-decoration-none" href="/offers">
								Returns and Offers
							</a>
						</li>
						{currentUser ? (
							<div className="dropdown m-3">
								<button
									style={{ backgroundColor: "rgba(0,0,0,0)", color: "white" }}
									className="btn btn-dark user-btn"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									{currentUser.name}&nbsp;&nbsp;
									<i className="fa-solid fa-user"></i>
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
										<i className="fa fa-sign-out" aria-hidden="true"></i>
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
						<li className="nav-item my-3 d-flex align-items-center">
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
