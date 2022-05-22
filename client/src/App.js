import "./App.css";
import Navbar from "./components/Navbar";
//eslint-disable-next-line
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./screens/Homescreen";
import ProductDescription from "./screens/ProductDescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Regsiter";
import Login from "./screens/Login";
import Order from "./screens/Orders";
import OrderInfo from "./screens/OrderInfo";
import Profile from "./screens/Profile";
import Admin from "./screens/Admin";
import UsersList from "./screens/UsersList";
import ProductsList from "./screens/ProductsList";
import AddNewProduct from "./screens/AddNewProduct";
import OrdersList from "./screens/OrdersList";
import Offers from "./screens/Offers";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homescreen />} />
					<Route path="/offers" element={<Offers />} />
					<Route path="/product/:id" element={<ProductDescription />} />
					<Route path="/cart" element={<CartScreen />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/orders" element={<Order />} />
					<Route path="/orderinfo/:orderid" element={<OrderInfo />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/admin" element={<Admin />}>
						<Route path="/admin/userslist" element={<UsersList />} />
						<Route path="/admin/productslist" element={<ProductsList />} />
						<Route path="/admin/addnewproduct" element={<AddNewProduct />} />
						<Route path="/admin/orderslist" element={<OrdersList />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
