import UsersTable from "../components/UsersTable";
import mockUsers from "../MockData/mockUsers.json";
import { StyledManageUsers } from "../styles/Container.styled";

const ManageUsersPage = () => {
	const roleUsers = mockUsers.filter((user) => user.role === "user");
	const roleAdmin = mockUsers.filter((user) => user.role === "admin");
	const titles = [
		"id",
		"Name",
		"Email",
		"Added By",
		"Updated By",
		"Created",
		"Updated",
	];

	return (
		<StyledManageUsers>
			<h2>Manage users</h2>

			<div>
				<h5>Admin Users</h5>
				<UsersTable users={roleAdmin} titles={titles} />
			</div>

			<div>
				<h5>User Users</h5>
				<UsersTable users={roleUsers} titles={titles} />
			</div>
		</StyledManageUsers>
	);
};

export default ManageUsersPage;
