import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import { updateUser } from "../actions/userActions";

function Profile() {
	const dispatch = useDispatch();
	const loginstate = useSelector((state) => state.loginReducer);
	const currentUser = loginstate.currentUser;
	const updateuserstate = useSelector((state) => state.updateReducer);
	const { error, loading, success } = updateuserstate;
	const registerReducerState = useSelector((state) => state.registerReducer);

	const [name, setName] = useState(currentUser.name);
	const [email, setEmail] = useState(currentUser.email);
	const [password, setPassword] = useState("");
	const [cpassword, setCpassword] = useState("");

	function update() {
		if (password !== cpassword) {
			alert("Password does not match");
			return;
		}
		const updatedUser = {
			name: name,
			email: email,
			password: password,
		};
		dispatch(updateUser(currentUser._id, updatedUser));
	}

	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-md-5 p-3" style={{ marginTop: "100px" }}>
					<div className="div">
						<h2 className="text-center m-3">Register</h2>
						{success && <Success success="User registered successfully" />}
						{loading ? (
							<Loader />
						) : (
							<>
								<form onSubmit={update}>
									<input
										required
										type="text"
										className="form-control"
										placeholder="Name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
									<input
										required
										type="email"
										className="form-control"
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>

									<input
										required
										type="password"
										className="form-control"
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>

									<input
										required
										type="password"
										className="form-control"
										placeholder="Confirm Password"
										value={cpassword}
										onChange={(e) => setCpassword(e.target.value)}
									/>
									<button
										type="submit"
										className="btn btn-primary btn-block mt-3"
									>
										Update
									</button>
								</form>
							</>
						)}
						{error && <Error error="Email is already registered" />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
