import axios from "axios";

const getAllProducts = () => (dispatch) => {
	dispatch({ type: "PRODUCTS_LOADING" });
	axios
		.get("/api/products")
		.then((res) => {
			dispatch({
				type: "PRODUCTS_FETCHED",
				payload: res.data,
			});
			return res;
		})
		.catch((err) => {
			dispatch({
				type: "PRODUCTS_FETCH_ERROR",
				payload: err,
			});
		});
};

export const getProductById = (productId) => (dispatch) => {
	dispatch({ type: "SINGLE_PRODUCT_LOADING" });
	axios
		.get(`/api/products/${productId}`)
		.then((res) => {
			dispatch({
				type: "SINGLE_PRODUCT_FETCHED",
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: "SINGLE_PRODUCT_FETCH_ERROR",
				payload: err,
			});
		});
};

export const addProductReview = (review, productid) => (dispatch, getState) => {
	dispatch({ type: "ADD_PRODUCT_REVIEW_REQUEST" });
	const currentUser = getState().loginReducer.currentUser;
	axios
		.post("/api/products/review", {
			review,
			productid,
			currentUser,
		})
		.then((res) => {
			dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS", payload: res.data });
			window.location.reload();
		})
		.catch((err) => {
			dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED", payload: err });
		});
};

export const filterProducts = (searchKey, sort, category) => (dispatch) => {
	let filteredProducts = [];
	dispatch({ type: "PRODUCTS_LOADING" });
	axios
		.get("/api/products")
		.then((res) => {
			filteredProducts = res.data;
			if (sort !== "popular") {
				const sortItems = (items) => {
					console.log("res.data items: ", items);
					if (sort === "htl") {
						filteredProducts = items.sort((a, b) => {
							return -a.price + b.price;
						});
					} else if (sort === "lth") {
						filteredProducts = items.sort((a, b) => {
							return a.price - b.price;
						});
					} else {
						filteredProducts = items.sort((a, b) => {
							return -a.rating + b.rating;
						});
					}
				};
				sortItems(res.data);
			}
			if (searchKey) {
				filteredProducts = res.data.filter((product) => {
					return (
						product.description.toLowerCase().includes(searchKey) ||
						product.name.toLowerCase().includes(searchKey) ||
						product.category.toLowerCase().includes(searchKey)
					);
				});
			}
			if (category !== "all") {
				filteredProducts = res.data.filter((product) => {
					return (
						product.category.toLowerCase().includes(category) ||
						product.description.toLowerCase().includes(category)
					);
				});
			}
			dispatch({ type: "PRODUCTS_FETCHED", payload: filteredProducts });
		})
		.catch((err) => {
			console.error(err.message);
			dispatch({ type: "PRODUCTS_FETCH_ERROR" });
		});
};

export const deleteProduct = (productId) => (dispatch) => {
	dispatch({ type: "DELETE_PRODUCT_REQUEST" });
	axios
		.delete(`/api/products/${productId}`)
		.then((res) => {
			dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data });
			alert("Product deleted successfully");
			window.location.reload();
		})
		.catch((err) => {
			dispatch({ type: "DELETE_PRODUCT_FAILED", payload: err });
		});
};

export const addNewProduct = (product) => (dispatch) => {
	dispatch({ type: "ADD_NEW_PRODUCT_REQUEST" });
	axios
		.post("/api/products", product)
		.then((res) => {
			dispatch({ type: "ADD_NEW_PRODUCT_SUCCESS", payload: res.data });
			window.location.reload();
			// alert("Product added successfully");
		})
		.catch((err) => {
			dispatch({ type: "ADD_NEW_PRODUCT_FAILED", payload: err });
		});
};

export default getAllProducts;
