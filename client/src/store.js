import {
	productReducer,
	getProductByIdReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
	productReducer,
	getProductByIdReducer,
	cartReducer: cartReducer,
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
