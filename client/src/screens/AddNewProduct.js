import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

const AddNewProduct = () => {
	const dispatch = useDispatch();
	const addproductstate = useSelector((state) => state.addNewProductReducer);
	const { loading, error, success } = addproductstate;
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productStock, setProductStock] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productImage, setProductImage] = useState("");
	const [productCategory, setProductCateogry] = useState("");

	const addNewProductHandler = (e) => {
		e.preventDefault();
		const product = {
			name: productName,
			price: Number(productPrice),
			countInStock: parseInt(productStock),
			category: productCategory,
			description: productDescription,
			image: productImage,
		};
		console.log(product);
		dispatch(addNewProduct(product));
	};

	return (
		<div>
			<h2 className="text-center">Add New Product</h2>
			{loading && <Loader />}
			{error && <Error error="Could not add product. Please try again" />}
			{success && <Success success="Product added successfully" />}
			<form onSubmit={addNewProductHandler}>
				<input
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Product Name"
				/>
				<input
					value={productPrice}
					onChange={(e) => setProductPrice(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Product Price"
				/>
				<input
					value={productStock}
					onChange={(e) => setProductStock(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Count in Stock"
				/>
				<input
					value={productCategory}
					onChange={(e) => setProductCateogry(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Product Category"
				/>
				<input
					value={productDescription}
					onChange={(e) => setProductDescription(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Product Description"
				/>
				<input
					value={productImage}
					onChange={(e) => setProductImage(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Product Image URL"
				/>
				<button value="submit" className="btn btn-primary mt-3">
					Add product
				</button>
			</form>
		</div>
	);
};

export default AddNewProduct;
