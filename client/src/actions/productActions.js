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
		.post("/api/getProductById", { productId })
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

export default getAllProducts;
