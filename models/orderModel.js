const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		orderItems: [
			{
				name: { type: String, required: true },
				quantity: { type: Number, required: true },
				_id: { type: String, required: true },
				price: { type: Number, required: true },
				image: { type: String },
			},
		],
		shippingAddress: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: Number, required: true },
			country: { type: String, required: true },
		},
		orderAmount: { type: Number, required: true },
		transactionId: { type: String, required: true },
		isDelivered: { type: Boolean, required: true },
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
