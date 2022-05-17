const bodyParser = require("body-parser");
const { config } = require("dotenv");
const express = require("express");
const app = express();

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

app.use("/api", productRoute);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
