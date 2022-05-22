import {
	productReducer,
	getProductByIdReducer,
	addProductReviewReducer,
	deleteProductReducer,
	addNewProductReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	registerNewUserReducer,
	loginReducer,
	updateReducer,
	getAllUsersReducer,
	deleteUserReducer,
	getUserByIdReducer,
} from "./reducers/userReducers";
import { placeOrderReducer } from "./reducers/orderReducer";
import {
	getOrdersByUserIdReducer,
	getOrderByIdReducer,
	getAllOrdersReducer,
} from "./reducers/orderReducer";

const finalReducer = combineReducers({
	productReducer: productReducer,
	getProductByIdReducer: getProductByIdReducer,
	cartReducer: cartReducer,
	registerNewUserReducer: registerNewUserReducer,
	loginReducer: loginReducer,
	placeOrderReducer: placeOrderReducer,
	getOrdersByUserIdReducer: getOrdersByUserIdReducer,
	getOrderByIdReducer: getOrderByIdReducer,
	addProductReviewReducer: addProductReviewReducer,
	updateReducer: updateReducer,
	getAllUsersReducer: getAllUsersReducer,
	deleteUserReducer: deleteUserReducer,
	deleteProductReducer: deleteProductReducer,
	addNewProductReducer: addNewProductReducer,
	getAllOrdersReducer: getAllOrdersReducer,
	getUserByIdReducer: getUserByIdReducer,
});

const cartItems =
	JSON.parse(localStorage.getItem("cartItems")) ||
	localStorage.getItem("cartItems") ||
	[];

const currentUser =
	JSON.parse(localStorage.getItem("currentUser")) ||
	localStorage.getItem("currentUser") ||
	null;

const initialState = {
	cartReducer: { cartItems: cartItems },
	loginReducer: { currentUser: currentUser },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
