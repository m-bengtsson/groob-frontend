import { useContext, useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";
import { SmallButton } from "../styles/Button.styled";
import { StyledManageUsers } from "../styles/Container.styled";
import AddUserModal from "../components/AddUserModal";
import { UsersContext } from "../context/users";
import instance from "../axiosconfig";

const ManageUsersPage = () => {
	const { users, setUsers, errorMessage, setErrorMessage } =
		useContext(UsersContext);
	const [showAddUser, setShowAddUser] = useState(false);

	const titles = [
		"id",
		"Name",
		"Email",
		"Added By",
		"Updated By",
		"Created",
		"Updated",
	];

	useEffect(() => {
		if (users.length === 0) {
			const getUsers = async () => {
				try {
					const response = await instance.get("/users");
					const allUsers = await response.data;

					setUsers(allUsers);
				} catch (error) {
					if (error.response.status === 404) {
						setErrorMessage("Oh no! We could not fetch the items :'(");
					}
				}
			};
			getUsers();
		}
	}, [users, setUsers, setErrorMessage]);

	const roleUser = users?.filter((user) => user.role === "user");
	const roleAdmin = users?.filter((user) => user.role === "admin");

	if (!users) {
		return <div>Loading...</div>;
	}

	return (
		<StyledManageUsers>
			<h2>Manage users</h2>

			<div>
				<div className={"title-btn-container"}>
					<h5>Admin Users</h5>
					<SmallButton onClick={() => setShowAddUser(true)}>
						+ Add User
					</SmallButton>
				</div>
				{errorMessage && <p>{errorMessage}</p>}
				<CustomTable data={roleAdmin} titles={titles} />
			</div>

			<div>
				<h5>User Users</h5>
				{errorMessage && <p>{errorMessage}</p>}
				<CustomTable data={roleUser} titles={titles} />
			</div>
			{showAddUser && (
				<AddUserModal
					setShowAddUser={setShowAddUser}
					onClick={() => setShowAddUser(true)}
				/>
			)}
		</StyledManageUsers>
	);
};

export default ManageUsersPage;
