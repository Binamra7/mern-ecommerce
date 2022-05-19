import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productReducer } from "../reducers/productReducer";
import getAllProducts, { deleteProduct } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

function ProductsList() {
	const dispatch = useDispatch();
	const getallproductsstate = useSelector((state) => state.productReducer);
	const { products, loading, error } = getallproductsstate;
	useEffect(() => {
		document.title = "Users List";
		dispatch(getAllProducts());
	}, []);

	return (
		<div>
			<h2>Products List</h2>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Stock</th>
						<th>Product ID</th>
						<th>Delete Product</th>
					</tr>
				</thead>
				<tbody>
					{loading && <Loader />}
					{error && <Error error="Could not load products" />}
					{products &&
						products.map((product) => {
							return (
								<tr key={product._id}>
									<td>{product.name}</td>
									<td>{product.price}</td>
									<td>{product.countInStock}</td>
									<td>{product._id}</td>
									<td>
										<i
											onClick={() => dispatch(deleteProduct(product._id))}
											className="fa fa-trash"
										></i>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}

export default ProductsList;
