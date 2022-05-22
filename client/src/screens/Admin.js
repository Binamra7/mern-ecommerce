import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Admin() {
	const dispatch = useDispatch();
	const userstate = useSelector((state) => state.getUserByIdReducer);

	const { isAdmin, loading, error } = userstate;
	// eslint-disable-next-line
	const [value, setValue] = useState("initial");

	useEffect(() => {
		const currentUser = localStorage.getItem("currentUser");
		if (!currentUser) {
			window.location.href = "/login";
		}
		dispatch(getUserById());
		document.title = "Admin | SleekStore";
		console.log(value);
	}, [value, dispatch]);

	return (
		<div>
			<div className="row justify-content-center mt-2">
				<div className="text-center">
					{loading && <Loader />}
					{error && <Error error="User could not be processed" />}
					{!isAdmin && !loading && (
						<Error error="You are not authorized to view this page" />
					)}
				</div>
				{isAdmin && (
					<div className="col-md-10 text-center">
						<ul className="admin p-2">
							<li>
								<Link style={{ color: "black" }} to="/admin/userslist">
									Users List
								</Link>
							</li>
							<li>
								<Link style={{ color: "black" }} to="/admin/productslist">
									Products List
								</Link>
							</li>
							<li>
								<Link style={{ color: "black" }} to="/admin/addnewproduct">
									Add new product
								</Link>
							</li>
							<li>
								<Link style={{ color: "black" }} to="/admin/orderslist">
									Orders List
								</Link>
							</li>
						</ul>
						<Outlet />
					</div>
				)}
			</div>
		</div>
	);
}

export default Admin;
