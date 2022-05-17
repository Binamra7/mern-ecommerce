import {
	productReducer,
	getProductByIdReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { registerNewUserReducer } from "./reducers/userReducers";

const finalReducer = combineReducers({
	productReducer: productReducer,
	getProductByIdReducer: getProductByIdReducer,
	cartReducer: cartReducer,
	registerNewUserReducer: registerNewUserReducer,
});

const cartItems =
	JSON.parse(localStorage.getItem("cartItems")) ||
	localStorage.getItem("cartItems") ||
	[];

const initialState = {
	cartReducer: { cartItems: cartItems },
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
	finalReducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
