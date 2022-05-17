export const productReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case "PRODUCTS_LOADING":
			return {
				loading: true,
			};
		case "PRODUCTS_FETCHED":
			return {
				loading: false,
				products: action.payload,
			};
		case "PRODUCTS_FETCH_ERROR":
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export const getProductByIdReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case "SINGLE_PRODUCT_LOADING":
			return {
				loading: true,
			};
		case "SINGLE_PRODUCT_FETCHED":
			return {
				loading: false,
				product: action.payload,
			};
		case "SINGLE_PRODUCT_FETCH_ERROR":
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
