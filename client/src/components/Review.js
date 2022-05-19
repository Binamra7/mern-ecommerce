import React, { useState } from "react";
import Rating from "react-rating";
import FullStar from "../assets/images/full-star.png";
import EmptyStar from "../assets/images/empty-star.png";
import { useDispatch } from "react-redux";
import { addProductReview } from "../actions/productActions";

function Review({ product }) {
	const dispatch = useDispatch();

	const [rating, setRating] = useState(5);
	const [comment, setComment] = useState("");

	const reviewHandler = () => {
		if (!localStorage.getItem("currentUser")) {
			window.location.href = "/login";
			return;
		}
		const currentUser = JSON.parse(localStorage.getItem("currentUser"));
		let hasReview = false;
		for (let i = 0; i < product.reviews.length; i++) {
			if (product.reviews[i].userId === currentUser._id) {
				hasReview = true;
			}
		}
		if (hasReview) {
			return alert("You have already reviewed this product");
		} else {
			const review = {
				rating: rating,
				comment: comment,
			};
			dispatch(addProductReview(review, product._id));
		}
	};

	return (
		<div>
			<h2>Give your review</h2>
			<Rating
				onChange={(e) => {
					setRating(e);
				}}
				initialRating={rating}
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
			/>
			<input
				type="text"
				className="form-control mt-3"
				value={comment}
				onChange={(e) => {
					setComment(e.target.value);
				}}
				placeholder="Add your comment"
			/>
			<button onClick={reviewHandler} className="btn btn-primary mt-3">
				Submit Review
			</button>
			<h2 className="mt-3">Latest Reviews</h2>
			{product.reviews &&
				product.reviews.map((review, i) => {
					return (
						<div key={i} className="text-left">
							<Rating
								onChange={(e) => {
									setRating(e);
								}}
								initialRating={review.rating}
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
							<p>{review.comment}</p>
							<p>By: {review.name}</p>
							<hr />
						</div>
					);
				})}
		</div>
	);
}

export default Review;
