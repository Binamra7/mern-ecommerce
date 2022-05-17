import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import getAllProducts from "../actions/productActions";

export default function Homescreen() {
	const [product, setProduct] = useState([]);
	const dispatch = useDispatch();
	const getAllProductsState = useSelector((state) => state.productReducer);
	const { loading, products, error } = getAllProductsState;
	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<div>
			<div className="row justify-content-center">
				{loading ? (
					<h1>Loading...</h1>
				) : error ? (
					<h1>Something went wrong</h1>
				) : (
					products.length > 0 &&
					products.map((product) => {
						return (
							<div className="col-md-3 m-2 card p-2">
								<Product key={product._id} product={product} />
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}
