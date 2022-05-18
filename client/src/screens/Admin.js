import React from "react";
import { Link, Outlet } from "react-router-dom";
// import UsersList from "./UsersList";
// import ProductsList from "./ProductsList";
// import AddNewProduct from "./AddNewProduct";
// import OrdersList from "./OrdersList";

function Admin() {
	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-10">
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
					{/* <Routes>
						<Route path="/admin/userslist" element={<UsersList />} />
						<Route path="/admin/productslist" element={<ProductsList />} />
						<Route path="/admin/addnewproduct" element={<AddNewProduct />} />
						<Route path="/admin/orderslist" element={<OrdersList />} />
					</Routes> */}
				</div>
			</div>
		</div>
	);
}

export default Admin;
