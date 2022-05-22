const bodyParser = require("body-parser");
const { config } = require("dotenv");
const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();
const cors = require("cors");
const path = require("path");

//use cors
app.use(cors());

//config dotenv
config({
	path: ".env",
});
app.use(bodyParser.json());

app.use(express.json());

const dbConnection = require("./db");

const PORT = process.env.PORT || 4000;

const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api/products", productRoute);
app.use("/api/user", userRoute);
app.use("/api/orders", orderRoute);

if (process.env.NODE_ENV === "production") {
	app.use("/", express.static(path.resolve(__dirname, "../client/build")));
	app.get("*", (_, res) => {
		res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
	});
}

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
