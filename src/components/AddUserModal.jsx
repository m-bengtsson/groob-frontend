import { StyledButton } from "../styles/Button.styled";
import { useState } from "react";
import { StyledInput } from "../styles/Input.styled";
import { StyledSmallModal } from "../styles/Container.styled";
import instance from "../axiosconfig";
import { useNavigate } from "react-router-dom";

const validEmail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AddUserModal = ({ setShowAddUser }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");

	const addUser = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage("");
		const email = e.target.email.value;

		if (!email) {
			setIsLoading(false);
			return setMessage("All fields required");
		}

		if (!validEmail.test(email.value)) {
			setIsLoading(false);
			return setMessage("Please enter a valid email address");
		}

		try {
			await instance.post("/identity/invite", { email });

			setMessage(`An email has been sent to ${email}`);
			setIsLoading(false);
		} catch (error) {
			if (error.message === "Request failed with status code 401") {
				setMessage(
					"You have been logged out and will be redirected to login page"
				);

				return setTimeout(() => navigate("/"), 3000);
			}

			setMessage(`${error.message}`);
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
