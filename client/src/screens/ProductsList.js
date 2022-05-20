import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllProducts, { deleteProduct } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { formatPrice } from "../helpers/FormatPrice";

function ProductsList() {
	const dispatch = useDispatch();
	const getallproductsstate = useSelector((state) => state.productReducer);
	const { products, loading, error } = getallproductsstate;
	useEffect(() => {
		document.title = "Users List";
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<div>
			<h2 className="text-center mb-3">Products List</h2>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>S.N</th>
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
						products.map((product, index) => {
							return (
								<tr key={product._id}>
									<td>{index + 1}</td>
									<td>{product.name}</td>
									<td>
										<i>{formatPrice(product.price)}</i>
									</td>
									<td>{product.countInStock}</td>
									<td>{product._id}</td>
									<td className="text-center cursor-pointer">
										<i
											onClick={() => dispatch(deleteProduct(product._id))}
											className="fa fa-trash text-danger"
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
