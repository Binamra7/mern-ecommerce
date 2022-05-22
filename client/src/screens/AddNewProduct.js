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
		<div className="text-center new-product px-3">
			<h2 className="text-center">Add New Product</h2>
			{loading && <Loader />}
			{error && <Error error="Could not add product. Please try again" />}
			{success && <Success success="Product added successfully" />}
			<form onSubmit={addNewProductHandler}>
				<div>
					<label>Product Name:</label>
					<input
						value={productName}
						onChange={(e) => setProductName(e.target.value)}
						className="form-control"
						type="text"
						placeholder="Product Name"
					/>{" "}
				</div>
				<div>
					<label>Product Price:</label>
					<input
						value={productPrice}
						onChange={(e) => setProductPrice(e.target.value)}
						className="form-control"
						type="number"
						placeholder="Product Price"
					/>{" "}
				</div>
				<div>
					{" "}
					<label>Number of stocks:</label>
					<input
						value={productStock}
						onChange={(e) => setProductStock(e.target.value)}
						className="form-control"
						type="number"
						placeholder="Count in Stock"
					/>
				</div>
				<div>
					<label>Product Category:</label>
					<select
						className="form-select product-category"
						onChange={(e) => setProductCateogry(e.target.value)}
					>
						<option value="misc">Miscellaneous</option>
						<option value="fashion">Fashion</option>
						<option value="mobile phones">Smartphone</option>
						<option value="gaming">Gaming</option>
						<option value="watches">Watches</option>
						<option value="jewellery">Jewellery</option>
						<option value="laptop">Laptop</option>
					</select>{" "}
				</div>
				<div>
					<label>Product Description:</label>
					<input
						value={productDescription}
						onChange={(e) => setProductDescription(e.target.value)}
						className="form-control"
						type="text"
						placeholder="Product Description"
					/>{" "}
				</div>
				<div>
					<label>Product Image URL:</label>
					<input
						value={productImage}
						onChange={(e) => setProductImage(e.target.value)}
						className="form-control"
						type="text"
						placeholder="Product Image URL"
					/>
				</div>
				<button value="submit" className="btn btn-primary mt-3">
					Add product
				</button>
			</form>
		</div>
	);
};

export default AddNewProduct;
