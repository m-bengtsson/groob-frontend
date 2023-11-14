import axios from "axios";
import { useState } from "react";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";
import ErrorMessage from "./ErrorMessage";
import { LargeButton } from "../styles/Button.styled";
import { validateEmail } from "../../functions/validate";

const RequestPassword = ({ setShowRequestPassword }) => {
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handlePassword = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		const email = e.target.email.value;

		if (!validateEmail(email)) {
			setIsLoading(false);
			return setErrorMessage("Please enter a valid email address");
		}

		try {
			const response = await axios.post(
				"http://localhost:8080/api/identity/requestResetPassword",
				{
					email,
				}
			);

			setMessage(`${response.data}`);
			setIsLoading(false);
		} catch (error) {
			setErrorMessage(
				"Something went wrong when trying to send an email, try again later"
			);
			setIsLoading(false);
		}
	};
	return (
		<>
			<h1>Request Password</h1>
			<form onSubmit={handlePassword}>
				<StyledInputLabel>
					<p>Email</p>
					<StyledInput name="email" type="email" placeholder="Email" />
				</StyledInputLabel>
				<p onClick={() => setShowRequestPassword(false)}>
					<b>Cancel request</b>
				</p>
				{errorMessage && <ErrorMessage message={errorMessage} />}
				{message && <p>{message}</p>}
				<LargeButton type="submit" disabled={isLoading}>
					{isLoading ? "Loading..." : "Send Request"}
				</LargeButton>
			</form>
		</>
	);
};

export default RequestPassword;
