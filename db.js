const mongoose = require("mongoose");

const mongo_URI =
	process.env.MONGODB_URI ||
	"mongodb+srv://Binamra:binamra7@cluster0.hc11s.mongodb.net/mern-ecommerce";

mongoose.connect(mongo_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const dbConnect = mongoose.connection;

dbConnect.on("error", () => {
	console.log("error connecting to db");
});

dbConnect.on("connected", () => {
	console.log("Connected to mongoDB");
});

module.exports = dbConnect;
