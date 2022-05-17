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

module.exports = router;
