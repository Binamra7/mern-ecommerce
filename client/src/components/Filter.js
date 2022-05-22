import React, { useState } from "react";
import { filterProducts } from "../actions/productActions";
import { useDispatch } from "react-redux";

export default function Filter() {
	const dispatch = useDispatch();
	const [searchKey, setSearchKey] = useState("");
	const [sort, setSort] = useState("popular");
	const [category, setCategory] = useState("all");

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(filterProducts(searchKey, sort, category));
	};

	return (
		<div className="mb-4">
			<div className="row justify-content-center align-items-center">
				<form className="search-form" onSubmit={handleSearch}>
					<div className="col-md-3 ml-2">
						<input
							id="search"
							value={searchKey}
							onChange={(e) => {
								setSearchKey(e.target.value);
								// dispatch(filterProducts(e.target.value, sort, category));
							}}
							type="text"
							placeholder="Search Products"
							className="form-control"
						/>
					</div>
					<div className="col-md-2 mt-2">
						<select
							value={sort}
							onChange={(e) => {
								setSort(e.target.value);
								dispatch(filterProducts(searchKey, e.target.value, category));
							}}
							className="form-select"
						>
							{/* <i class="fa-solid fa-circle-chevron-down"></i> */}
							<option value="popular">Popular</option>
							<option value="htl">High to Low</option>
							<option value="lth">Low to high</option>
							<option value="rating">Rating</option>
						</select>
					</div>

					<div className="col-md-2 mt-2">
						<select
							value={category}
							onChange={(e) => {
								setCategory(e.target.value);
								dispatch(filterProducts(searchKey, sort, e.target.value));
							}}
							className="form-select"
						>
							<option value="all">All</option>
							<option value="fashion">Fashion</option>
							<option value="gaming">Gaming</option>
							<option value="mobiles">Smartphone</option>
							<option value="laptop">Laptops</option>
							<option value="jewellery">Jewellery</option>
							<option value="watch">Watches</option>
							{/* <option value="misc">Miscellaneous</option> */}
						</select>
					</div>
					<div className="col-md-2 mt-2">
						<button
							value="submit"
							className="btn border border-dark btn-dark text-light"
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
