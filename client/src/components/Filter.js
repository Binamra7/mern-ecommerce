import React, { useState } from "react";
import { filterProducts } from "../actions/productActions";
import { useDispatch } from "react-redux";

export default function Filter() {
	const dispatch = useDispatch();
	const [searchKey, setSearchKey] = useState("");
	const [sort, setSort] = useState("popular");
	const [category, setCategory] = useState("all");

	return (
		<div className="">
			<div className="row justify-content-center">
				{/* <form
					className="form-control display-flex"
					
				> */}
				<div className="col-md-3 mt-2 ml-2">
					<input
						value={searchKey}
						onChange={(e) => setSearchKey(e.target.value)}
						type="text"
						placeholder="search porducts"
						className="form-control"
					/>
				</div>
				<div className="col-md-2 mt-4 ml-2">
					<select
						value={sort}
						onChange={(e) => setSort(e.target.value)}
						className="form-control"
					>
						<i class="fa-solid fa-circle-chevron-down">test</i>
						<option value="popular">Popular</option>
						<option value="htl">High to Low</option>
						<option value="lth">Low to high</option>
					</select>
				</div>

				<div className="col-md-2 mt-4 ml-2">
					<select
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						className="form-control"
					>
						<option value="games">Games</option>
						<option value="fashion">Fashion</option>
						<option value="mobiles">Mobiles</option>
					</select>
				</div>
				<div className="col-md-2 mt-4 ml-2">
					<button
						onClick={() => {
							dispatch(filterProducts(searchKey, sort, category));
						}}
						value="submit"
						className="btn btn-dark"
					>
						Search
					</button>
				</div>
				{/* </form> */}
			</div>
		</div>
	);
}
