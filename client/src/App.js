import "./App.css";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./screens/Homescreen";
import ProductDescription from "./screens/ProductDescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Regsiter";
import Login from "./screens/Login";
import Order from "./screens/Orders";
import OrderInfo from "./screens/OrderInfo";

function App() {
	return (
		<div className="App">
			<div className={bootstrap}></div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homescreen />} />
					<Route path="/product/:id" element={<ProductDescription />} />
					<Route path="/cart" element={<CartScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/orders" element={<Order />} />
					<Route path="/orderinfo/:orderid" element={<OrderInfo />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
