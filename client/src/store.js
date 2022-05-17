import {
	productReducer,
	getProductByIdReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { registerNewUserReducer, loginReducer } from "./reducers/userReducers";

const finalReducer = combineReducers({
	productReducer: productReducer,
	getProductByIdReducer: getProductByIdReducer,
	cartReducer: cartReducer,
	registerNewUserReducer: registerNewUserReducer,
	loginReducer: loginReducer,
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
