import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import FullStar from "../assets/images/full-star.png";
import EmptyStar from "../assets/images/empty-star.png";
import { formatPrice } from "../helpers/FormatPrice";

const Product = ({ product }) => {
	return (
		<div className="product-box">
			<Link
				style={{ textDecoration: "none" }}
				to={`product/${product._id}`}
				className="text-left "
			>
				{/* <div className="product-box"> */}
				<div className="text-center">
					<img src={product.image} className="img-fluid" alt="Product" />
				</div>
				<h1>{product.name}</h1>
				<h1 className="price">Price: {formatPrice(product.price)}</h1>
				<Rating
					fractions={2}
					className="stars"
					initialRating={product.rating}
					emptySymbol={
						<img
							style={{ width: "30px", color: "black" }}
							alt="stars empty"
							src={EmptyStar}
							className="icon"
						/>
					}
					fullSymbol={
						<img
							style={{ width: "30px" }}
							alt="stars full"
							src={FullStar}
							className="icon"
						/>
					}
					readonly
				/>
				{/* </div> */}
			</Link>
		</div>
	);
};

export default Product;
