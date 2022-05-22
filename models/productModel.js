const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		comment: {
			type: String,
			trim: true,
		},
		rating: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		image: {
			type: String,
			required: true,
			trim: true,
		},
		category: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
			trim: true,
		},
		countInStock: {
			type: Number,
			required: true,
			trim: true,
		},
		rating: {
			type: Number,
			required: true,
			trim: true,
		},
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;
