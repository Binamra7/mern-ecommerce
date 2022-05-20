import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Login = () => {
	const dispatch = useDispatch();
	const loginReducerState = useSelector((state) => state.loginReducer);
	const { error, loading, success } = loginReducerState;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();

		const user = {
			email: email,
			password: password,
		};
		dispatch(loginUser(user));
	};

	useEffect(() => {
		if (localStorage.getItem("currentUser")) {
			window.location.href = "/";
		}
		window.document.title = "SleekStore | Login";
	}, []);

	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-md-4 p-3" style={{ marginTop: "20px" }}>
					<div className="div">
						<h2 className="text-center m-3">
							Login &nbsp;<i class="fa fa-sign-in" aria-hidden="true"></i>
						</h2>
						<div className="text-center">
							{success && <Loader />}
							{loading && <Loader />}
						</div>
						{/* {success && <Success success="User logged in successfully" />} */}

						{error && <Error error="Invalid email or password" />}
						{!loading && (
							<>
								<form onSubmit={handleLogin}>
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

									<button
										type="submit"
										className="btn btn-primary btn-block mt-3 login-btn m-auto"
									>
										Login
									</button>
								</form>
							</>
						)}
						<h1 className="text-center mt-4">
							Don't have an account?{" "}
							<Link to="/register">Click here to register</Link>
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
