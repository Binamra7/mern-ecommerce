const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/products", (_, res) => {
	Product.find()
		.then((products) => {
			res.json(products || []);
		})
		.catch((err) => {
			res.send(err);
		});
});

router.post("/getProductById", (req, res) => {
	Product.find({ _id: req.body.productId }, (err, product) => {
		if (!err) {
			res.send(product[0]);
		} else {
			return res.status(400).json({ message: "Something went wrong" });
		}
	});
});
router.post("/products/addreview", async (req, res) => {
	const { productid, review, currentUser } = req.body;
	const product = await Product.findById({ _id: productid });

	const Review = {
		userId: currentUser._id,
		name: currentUser.name,
		comment: review.comment,
		rating: review.rating,
	};

	product.reviews.push(Review);
	let rating =
		product.reviews.reduce((acc, x) => acc + x.rating, 0) /
		product.reviews.length;
	product.rating = Number(rating);

	product.save((err) => {
		if (err) {
			return res.status(400).json({ message: "Could not add review" });
		}
		return res.status(200).json({ message: "Review added successfully" });
	});
});
router.post("/deleteproduct", (req, res) => {
	Product.findByIdAndDelete(req.body.productId, (err) => {
		if (!err) {
			res.send("Product deleted successfully");
		} else {
			return res.status(400).json({ message: "Failed to delete product" });
		}
	});
});
module.exports = router;
