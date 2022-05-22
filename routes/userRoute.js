const router = require("express").Router();
const User = require("../models/userModel");

router.post("/register", (req, res) => {
	User.find({ email: req.body.email }, (err, user) => {
		if (user.length > 0) {
			res.send("Email Already Exists");
		} else {
			const newUser = new User({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			});
			newUser.save((err) => {
				if (err) {
					return res.status(400).json({
						error: "Something went wrong",
					});
				}
				return res.send("User registered successfully");
			});
		}
	});
});

router.post("/login", (req, res) => {
	User.find(
		{ email: req.body.email, password: req.body.password },
		(err, user) => {
			if (user.length > 0) {
				const USER = {
					name: user[0].name,
					email: user[0].email,
					_id: user[0]._id,
				};

				res.send(USER);
			} else {
				return res
					.status(400)
					.json({ message: "Email or Password is incorrect" });
			}
		}
	);
});

router.put("/", (req, res) => {
	const { userid, updatedUser } = req.body;
	User.findByIdAndUpdate(
		{ _id: userid },
		{
			name: updatedUser.name,
			email: updatedUser.email,
			password: updatedUser.password,
		},
		(err) => {
			if (err) {
				return res.status(400).json({ message: "Something went wrong" });
			}
			return res.send("User updated successfully");
		}
	);
});
router.get("/users", (_, res) => {
	User.find({}, (err, users) => {
		if (err) {
			return res.status(400).json({ message: "Something went wrong" });
		}
		return res.send(users);
	});
});

router.get("/:userId", (req, res) => {
	User.find({ _id: req.params.userId }, (err, user) => {
		if (err) {
			return res.status(400).json({ message: "Something went wrong" });
		}
		if (user[0].adminAccess) {
			return res.send(true);
		} else {
			return res.send(false);
		}
	});
});

router.delete("/:userId", (req, res) => {
	User.findByIdAndDelete(req.params.userId, (err) => {
		if (!err) {
			return res.send("User deleted successfully");
		} else {
			return res.status(400).json({ message: "Could not delete user" });
		}
	});
});

module.exports = router;
