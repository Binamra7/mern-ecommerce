import React, { useState } from "react";

export default function Filter() {
	const [searchKey, setSearchKey] = useState("");
	const [sort, setSort] = useState("popular");
	const [category, setCategory] = useState("all");

	return (
		<div className="">
			<div className="row justify-content-center">
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
						<option value="clothing">Clothing</option>
						<option value="electronics">Electoronics</option>
					</select>
				</div>
				<div className="col-md-2 mt-4 ml-2">
					<button className="btn btn-dark">Search</button>
				</div>
			</div>
		</div>
	);
}