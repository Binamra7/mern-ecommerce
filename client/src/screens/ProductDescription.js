import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const ProductDescription = () => {
	const productId = useParams().id;
	const [quantity, setQuantity] = useState(1);

	const getProductByIdState = useSelector(
		(state) => state.getProductByIdReducer
	);
	const { loading, product, error } = getProductByIdState;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProductById(productId));
	}, []);

	const addItemToCart = () => {
		dispatch(addToCart(product, quantity));
	};

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>Something went wrong</h1>
			) : (
				<div className="row mt-5">
					<div className="col-md-6">
						<div className="card p-2 m-2">
							<h1>{product.name}</h1>
							<img
								src={product.image}
								className="img-fluid m-3 big-img"
								alt="product"
							/>
							<p>{product.description}</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="m-2">
							<h1>Price: {product.price}</h1>
							<hr />
							<h1>Select Quantity</h1>
							<select
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
							>
								{[...Array(product.countInStock).keys()].map((value, index) => {
									return (
										<option key={index} value={index + 1}>
											{index + 1}
										</option>
									);
								})}
							</select>
							<hr />
							<button className="btn btn-dark" onClick={addItemToCart}>
								Add To Cart
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDescription;
