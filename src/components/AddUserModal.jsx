import { StyledButton } from "../styles/Button.styled";
import { useState } from "react";
import { StyledInput } from "../styles/Input.styled";
import { StyledSmallModal } from "../styles/Container.styled";
import instance from "../axiosconfig";
import { useNavigate } from "react-router-dom";

const AddUserModal = ({ setShowAddUser }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");

	const addUser = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage("");

		const email = e.target.email.value;
		try {
			await instance.post("/identity/invite", { email });

			setMessage(`An email has been sent to ${email}`);
			setIsLoading(false);
		} catch (error) {
			if (error.message === "Request failed with status code 401") {
				setMessage(
					"You have been logged out and will be redirected to login page"
				);

				return setTimeout(() => navigate("/login"), 3000);
			}

			setMessage(
				"Something went wrong when trying to send an email, try again later"
			);
			setIsLoading(false);
		}
	};

	return (
		<StyledSmallModal>
			<form onSubmit={addUser}>
				<label>
					<StyledInput type="email" name="email" placeholder="Email" />
				</label>
				<StyledButton type="submit" disabled={isLoading}>
					{isLoading ? "Loading..." : "Add"}
				</StyledButton>
			</form>
			{message && <p>{message}</p>}

			<button className="close-button" onClick={() => setShowAddUser(false)}>
				X
			</button>
		</StyledSmallModal>
	);
};

export default AddUserModal;
