import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import FullStar from "../assets/images/full-star.png";
import EmptyStar from "../assets/images/empty-star.png";

const Product = ({ product }) => {
	return (
		<div>
			<Link style={{ textDecoration: "none" }} to={`product/${product._id}`}>
				<img src={product.image} className="img-fluid" alt="Product" />
				<h1>{product.name}</h1>
				<Rating
					initialRating={product.rating}
					emptySymbol={
						<img
							style={{ width: "30px", color: "black" }}
							alt="stars empty"
							src={EmptyStar}
							// src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png"
							className="icon"
						/>
					}
					fullSymbol={
						<img
							style={{ width: "30px" }}
							alt="stars full"
							src={FullStar}
							// src="http://dreyescat.github.io/react-rating/assets/images/star-full.png"
							className="icon"
						/>
					}
					readonly
				/>
				<h1>Price: {product.price}</h1>
			</Link>
		</div>
	);
};

export default Product;
