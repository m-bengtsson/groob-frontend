import { useContext, useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";
import { SmallButton } from "../styles/Button.styled";
import { StyledManagePage } from "../styles/Container.styled";
import AddUserModal from "../components/AddUserModal";
import { UsersContext } from "../context/users";
import instance from "../axiosconfig";
import DeleteModal from "../components/DeleteModal";
import EditUserModal from "../components/EditUserModal";

const ManageUsersPage = () => {
	const { users, setUsers, errorMessage, setErrorMessage } =
		useContext(UsersContext);
	const [showAddUser, setShowAddUser] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState();
	const [showEditModal, setShowEditModal] = useState(false);

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

	const editUser = (item) => {
		if (item.name) {
			setSelectedItem({ title: item.name, id: item.id, role: item.role });
			setShowEditModal(true);
		} else if (item.title) {
			setSelectedItem({ title: item.title, id: item.id });
			setShowEditModal(true);
		}
	};

	const deleteUser = (item) => {
		if (item.name) {
			setSelectedItem({ title: item.name, id: item.id });
			setShowDeleteModal(true);
		} else if (item.title) {
			setSelectedItem({ title: item.title, id: item.id });
			setShowDeleteModal(true);
		}
	};

	const roleUser = users?.filter((user) => user.role === "user");
	const roleAdmin = users?.filter((user) => user.role === "admin");

	if (!users) {
		return <div>Loading...</div>;
	}

	return (
		<StyledManagePage>
			<h2>Manage users</h2>

			<div>
				<div className={"title-btn-container"}>
					<h5>Role: Admin</h5>
					<SmallButton onClick={() => setShowAddUser(true)}>
						+ Add User
					</SmallButton>
				</div>
				{errorMessage && <p>{errorMessage}</p>}
				<CustomTable
					data={roleAdmin}
					titles={titles}
					editHandler={editUser}
					deleteHandler={deleteUser}
				/>
			</div>

			<div>
				<h5>Role: User</h5>
				{errorMessage && <p>{errorMessage}</p>}
				<CustomTable
					data={roleUser}
					titles={titles}
					editHandler={editUser}
					deleteHandler={deleteUser}
				/>
			</div>
			{showAddUser && (
				<AddUserModal
					setShowAddUser={setShowAddUser}
					onClick={() => setShowAddUser(true)}
				/>
			)}
			{showDeleteModal && (
				<DeleteModal
					setShowDeleteModal={setShowDeleteModal}
					selectedItem={selectedItem}
					dataType={"users"}
				/>
			)}
			{showEditModal && (
				<EditUserModal
					setShowEditModal={setShowEditModal}
					selectedItem={selectedItem}
				/>
			)}
		</StyledManagePage>
	);
};

export default ManageUsersPage;
