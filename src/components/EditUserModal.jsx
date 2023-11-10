import { StyledButton } from "../styles/Button.styled";
import { useState } from "react";
import { StyledEditUserModal, StyledSmallModal } from "../styles/Modal.styled";
import instance from "../axiosconfig";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../context/users";

const EditUserModal = ({ setShowEditModal, selectedItem }) => {
	const navigate = useNavigate();
	const { setUsers } = useContext(UsersContext);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(
		`Choose role for ${selectedItem.title}: `
	);
	const [isEdited, setIsEdited] = useState(false);
	const [selectedOption, setSelectedOption] = useState(selectedItem.role);

	const EditItem = async () => {
		setIsEdited(false);
		setIsLoading(true);

		try {
			await instance.patch(`/users/${selectedItem.id}`, {
				role: selectedOption,
			});
			const response = await instance.get("/users");
			const allUsers = await response.data;

			setUsers(allUsers);

			setMessage(`Edit successful!`);
			setIsLoading(false);
			setIsEdited(true);
		} catch (error) {
			if (error.message === "Request failed with status code 401") {
				setMessage(
					"You have been logged out and will be redirected to login page"
				);

				return setTimeout(() => navigate("/"), 3000);
			}

			setMessage("Something went wrong, try again later");
			setIsLoading(false);
			setIsEdited(true);
		}
	};

	return (
		<StyledEditUserModal>
			<div>
				<p>{message}</p>
				<div>
					{!isEdited && (
						<>
							<label>
								Admin
								<input
									type="radio"
									value="admin"
									name="role"
									checked={selectedOption === "admin"}
									onChange={() => setSelectedOption("admin")}
								/>
							</label>
							<label>
								User
								<input
									type="radio"
									value="user"
									name="role"
									checked={selectedOption === "user"}
									onChange={() => setSelectedOption("user")}
								/>
							</label>
						</>
					)}
					{isEdited ? (
						<StyledButton onClick={() => setShowEditModal(false)}>
							Close
						</StyledButton>
					) : (
						<StyledButton onClick={EditItem} disabled={isLoading}>
							{isLoading ? "Loading..." : "Update"}
						</StyledButton>
					)}
				</div>
				<button
					className="close-button"
					onClick={() => setShowEditModal(false)}
				>
					X
				</button>
			</div>
		</StyledEditUserModal>
	);
};

export default EditUserModal;
