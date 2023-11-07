import { useContext, useState } from "react";
import CustomTable from "../components/CustomTable";
import { SmallButton } from "../styles/Button.styled";
import { StyledManageUsers } from "../styles/Container.styled";
import AddUserModal from "../components/AddUserModal";
import { UsersContext } from "../context/users";

const ManageUsersPage = () => {
	const { users } = useContext(UsersContext);
	const [showAddUser, setShowAddUser] = useState(false);

	console.log("USERS", users);
	const titles = [
		"id",
		"Name",
		"Email",
		"Added By",
		"Updated By",
		"Created",
		"Updated",
	];

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

				<CustomTable data={roleAdmin} titles={titles} />
			</div>

			<div>
				<h5>User Users</h5>
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
