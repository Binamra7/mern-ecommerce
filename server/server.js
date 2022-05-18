const bodyParser = require("body-parser");
const { config } = require("dotenv");
const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();
const cors = require("cors");

//use cors
app.use(cors());

//config dotenv
config({
	path: ".env",
});
app.use(bodyParser.json());

app.use(express.json());

const dbConnection = require("./db");

app.get("/", (_, res) => {
	res.send("hello asdfasdfasdf");
});

const PORT = process.env.PORT || 4000;

const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api", productRoute);
app.use("/api/user", userRoute);
app.use("/api/orders", orderRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
