import axios from "axios";
import { SmallButton, StyledButton } from "../styles/Button.styled";
import { useState } from "react";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";
import { StyledAddUser } from "../styles/Container.styled";

const AddUserModal = ({ setShowAddUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");

	const addUser = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage("");

		const email = e.target.email.value;

		const accesstoken = localStorage.getItem("accesstoken");
		try {
			await axios({
				method: "post",
				url: "http://localhost:8080/api/identity/invite",
				withCredentials: false,
				headers: { Authorization: accesstoken },
				data: { email },
			});

			setMessage(`An email has been sent to ${email}`);
			setIsLoading(false);
		} catch (error) {
			if (error.code === "ERR_BAD_REQUEST") {
				try {
					const respRefresh = await axios({
						method: "get",
						url: "http://localhost:8080/api/users",
						withCredentials: true,
						data: { email },
					});

					const accesstoken = respRefresh.headers.authorization;
					localStorage.setItem("accesstoken", accesstoken);
					return;
				} catch (error) {
					setMessage(
						"Something went wrong when trying to send an email, try again later"
					);
					setIsLoading(false);
				}
			}
			setMessage(
				"Something went wrong when trying to send an email, try again later"
			);
			setIsLoading(false);
		}
	};

	return (
		<StyledAddUser>
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
		</StyledAddUser>
	);
};

export default AddUserModal;
