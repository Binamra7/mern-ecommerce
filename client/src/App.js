import "./App.css";
import Navbar from "./components/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./screens/Homescreen";
import ProductDescription from "./screens/ProductDescription";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div className={bootstrap}></div>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homescreen />} />
					<Route path="/product/:id" element={<ProductDescription />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
