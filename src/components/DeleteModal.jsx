import { StyledButton } from "../styles/Button.styled";
import { useState } from "react";
import { StyledAddUser } from "../styles/Container.styled";
import instance from "../axiosconfig";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/users";

const DeleteModal = ({ setShowDeleteModal, selectedItem }) => {
	const navigate = useNavigate();
	const { setUsers } = useContext(UsersContext);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(
		`Are you sure you want to delete ${selectedItem.title}?`
	);
	const [isDeleted, setIsDeleted] = useState(false);

	const DeleteItem = async () => {
		setIsDeleted(false);
		setIsLoading(true);
		setUsers;
		setMessage(`Are you sure you want to delete ${selectedItem.title}?`);

		try {
			await instance.delete(`/users/${selectedItem.id}`);
			const response = await instance.get("/users");
			const allUsers = await response.data;

			setUsers(allUsers);
			setMessage(`Delete successful!`);
			setIsLoading(false);
			setIsDeleted(true);
		} catch (error) {
			if (error.message === "Request failed with status code 401") {
				setMessage(
					"You have been logged out and will be redirected to login page"
				);

				return setTimeout(() => navigate("/login"), 3000);
			}

			setMessage("Something went wrong, try again later");
			setIsLoading(false);
			setIsDeleted(true);
		}
	};

	return (
		<StyledAddUser>
			<p>{message}</p>

			{isDeleted ? (
				<StyledButton onClick={() => setShowDeleteModal(false)}>
					Close
				</StyledButton>
			) : (
				<StyledButton onClick={DeleteItem} disabled={isLoading}>
					{isLoading ? "Loading..." : "Delete"}
				</StyledButton>
			)}
			<button
				className="close-button"
				onClick={() => setShowDeleteModal(false)}
			>
				X
			</button>
		</StyledAddUser>
	);
};

export default DeleteModal;
