import CustomTable from "../components/CustomTable";
import mockUsers from "../MockData/mockUsers.json";
import { SmallButton } from "../styles/Button.styled";
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

	const addUserHandler = () => {
		console.log("ADD USER!");
	};
	return (
		<StyledManageUsers>
			<h2>Manage users</h2>

			<div>
				<div className={"title-btn-container"}>
					<h5>Admin Users</h5>
					<SmallButton onClick={addUserHandler}>+ Add User</SmallButton>
				</div>

				<CustomTable data={roleAdmin} titles={titles} />
			</div>

			<div>
				<h5>User Users</h5>
				<CustomTable data={roleUsers} titles={titles} />
			</div>
		</StyledManageUsers>
	);
};

export default ManageUsersPage;
