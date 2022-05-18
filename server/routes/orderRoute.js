const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SK);
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
	const { token, subTotal, currentUser, cartItems } = req.body;
	const customer = await stripe.customers.create({
		email: token.email,
		source: token.id,
	});
	const payment = await stripe.charges.create(
		{
			amount: subTotal * 100,
			currency: "USD",
			customer: customer.id,
			receipt_email: token.email,
		},
		{
			idempotencyKey: uuidv4(),
		}
	);
	if (payment) {
		res.send("Payment Successful");
		const order = new Order({
			userId: currentUser._id,
			name: currentUser.name,
			email: currentUser.email,
			orderItems: cartItems,
			shippingAddress: {
				address: token.card.address_line1,
				city: token.card.address_city,
				postalCode: token.card.address_zip,
				country: token.card.address_country,
			},
			orderAmount: subTotal,
			transactionId: payment.source.id,
			isDelivered: false,
		});
		await order.save((error) => {
			if (error) {
				console.log(error);
				return res.status(400).json({ message: "Something went wrong" });
			} else {
				res.send("Order placed Successfully");
			}
		});
	} else {
		res.send("Payment failed");
		return res.status(400).json({ message: "Payment Failed" });
	}
});

module.exports = router;
