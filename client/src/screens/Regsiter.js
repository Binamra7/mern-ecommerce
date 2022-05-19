import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";

const Register = () => {
	const dispatch = useDispatch();
	const registerReducerState = useSelector(
		(state) => state.registerNewUserReducer
	);
	const { error, loading, success } = registerReducerState;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cpassword, setCpassword] = useState("");

	const handleRegister = (e) => {
		e.preventDefault();
		if (password !== cpassword) {
			alert("Password does not match");
			return;
		}
		const user = {
			name: name,
			email: email,
			password: password,
		};
		dispatch(registerNewUser(user));
	};

	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-md-5 p-3" style={{ marginTop: "100px" }}>
					<div className="div">
						<h2 className="text-center m-3">Register</h2>
						{error && <Error error="Email is already registered" />}
						{success && <Success success="User registered successfully" />}
						{loading ? (
							<Loader />
						) : (
							<>
								<form onSubmit={handleRegister}>
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
										Register
									</button>
								</form>
							</>
						)}
						<h1 className="text-center mt-3">
							Already have an account?{" "}
							<Link to="/login">Click here to login</Link>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
