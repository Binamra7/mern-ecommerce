const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/", (_, res) => {
	Product.find()
		.then((products) => {
			res.json(products.slice(0).reverse() || []);
		})
		.catch((err) => {
			res.send(err);
		});
});

router.get("/:productId", (req, res) => {
	Product.find({ _id: req.params.productId }, (err, product) => {
		if (!err) {
			res.send(product[0]);
		} else {
			return res.status(400).json({ message: "Something went wrong" });
		}
	});
});
router.post("/review", async (req, res) => {
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
router.delete("/:productId", (req, res) => {
	Product.findByIdAndDelete(req.params.productId, (err) => {
		if (!err) {
			res.send("Product deleted successfully");
		} else {
			return res.status(400).json({ message: "Failed to delete product" });
		}
	});
});

router.post("/", (req, res) => {
	const product = new Product({
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
		image: req.body.image,
		category: req.body.category,
		countInStock: req.body.countInStock,
		rating: 5,
		reviews: [],
	});
	console.log("product", JSON.stringify(product, null, 2));
	product.save((err) => {
		if (err) {
			return res.status(400).json({ message: "Could not add product" });
		}
		return res.status(200).json({ message: "Product added successfully" });
	});
});

module.exports = router;
