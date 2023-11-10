import { StyledButton } from "../styles/Button.styled";
import { useState } from "react";
import { StyledInput } from "../styles/Input.styled";
import { StyledSmallModal } from "../styles/Container.styled";
import instance from "../axiosconfig";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import { validateEmail } from "../../functions/validate";

const AddUserModal = ({ setShowAddUser }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const addUser = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		setMessage("");
		const email = e.target.email.value;

		if (!email) {
			setIsLoading(false);
			return setErrorMessage("All fields required");
		}

		if (!validateEmail(email)) {
			setIsLoading(false);
			return setErrorMessage("Please enter a valid email address");
		}

		try {
			await instance.post("/identity/invite", { email });

			setMessage(`An email has been sent to ${email}`);
			setIsLoading(false);
		} catch (error) {
			if (error.message === "Request failed with status code 401") {
				setErrorMessage(
					"You have been logged out and will be redirected to login page"
				);

				return setTimeout(() => navigate("/"), 3000);
			}

			setErrorMessage(`${error.response.data}`);
			setIsLoading(false);
		}
	};

	return (
		<StyledSmallModal>
			<div>
				<form onSubmit={addUser}>
					<label>
						<StyledInput type="email" name="email" placeholder="Email" />
					</label>
					<StyledButton type="submit" disabled={isLoading}>
						{isLoading ? "Loading..." : "Add"}
					</StyledButton>
				</form>

				<button className="close-button" onClick={() => setShowAddUser(false)}>
					X
				</button>
				{errorMessage && <ErrorMessage message={errorMessage} />}
				{message && <p>{message}</p>}
			</div>
		</StyledSmallModal>
	);
};

export default AddUserModal;
