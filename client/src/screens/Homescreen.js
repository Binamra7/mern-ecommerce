import React, { useEffect } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import getAllProducts from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

export default function Homescreen() {
	const dispatch = useDispatch();
	const getAllProductsState = useSelector((state) => state.productReducer);
	const { loading, products, error } = getAllProductsState;
	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	return (
		<div>
			<Filter />
			<div className="row justify-content-center">
				{loading ? (
					<Loader />
				) : error ? (
					<Error error="Something went wrong..." />
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
