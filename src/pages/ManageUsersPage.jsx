import { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import { SmallButton } from "../styles/Button.styled";
import { StyledManageUsers } from "../styles/Container.styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddUserModal from "../components/AddUserModal";

const ManageUsersPage = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState();
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
		const getUsers = async () => {
			const accesstoken = localStorage.getItem("accesstoken");

			try {
				const respAccess = await axios({
					method: "get",
					url: "http://localhost:8080/api/users/",
					withCredentials: false,
					headers: { Authorization: accesstoken },
				});

				const allUsers = await respAccess.data;
				setUsers(allUsers);
			} catch (error) {
				if (error.code === "ERR_BAD_REQUEST") {
					try {
						const respRefresh = await axios({
							method: "get",
							url: "http://localhost:8080/api/users",
							withCredentials: true,
						});

						const allUsers = await respRefresh.data;
						const accesstoken = respRefresh.headers.authorization;

						setUsers(allUsers);
						localStorage.setItem("accesstoken", accesstoken);
						return;
					} catch (error) {
						console.log("Not authorized, please login1");
					}
				}

				console.log("Not authorized, please login2");
			}
		};
		getUsers();
	}, []);

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
