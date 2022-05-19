import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

function UsersList() {
	const dispatch = useDispatch();
	const getallusersstate = useSelector((state) => state.getAllUsersReducer);
	const { users, loading, error } = getallusersstate;
	useEffect(() => {
		document.title = "Users List";
		dispatch(getAllUsers());
	}, [dispatch]);

	return (
		<div>
			<h2>Users List</h2>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>User ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Delete User</th>
					</tr>
				</thead>
				<tbody>
					{loading && <Loader />}
					{error && <Error error="Could not fetch users list" />}
					{users &&
						users.map((user) => {
							return (
								<tr key={user._id}>
									<td>{user._id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>
										<i
											onClick={() => dispatch(deleteUser(user._id))}
											className="fa fa-trash"
										></i>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
}

export default UsersList;
