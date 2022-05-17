import {
	productReducer,
	getProductByIdReducer,
} from "./reducers/productReducer";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
	productReducer,
	getProductByIdReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
	finalReducer,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
