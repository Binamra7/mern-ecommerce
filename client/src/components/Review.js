import React, { useState } from "react";
import Rating from "react-rating";
import FullStar from "../assets/images/full-star.png";
import EmptyStar from "../assets/images/empty-star.png";
import { useDispatch, useSelector } from 'react-redux';
import { addProductReview } from '../store/actions/productActions';

function Review({product}) {
    const dispatch = useDispatch();

	const [rating, setRating] = useState(5);
	const [comment, setComment] = useState("");

    const reviewHandler = () => {
        const review = {
            rating: rating,
            comment:Comment,
        }
        dispatch(addProductReview(review,product._id));
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
		</div>
	);
}

export default Review;
