import { Link, useSearchParams } from "react-router-dom";
import { LargeButton, StyledButton } from "../styles/Button.styled";
import { StyledInputLabel, StyledInput } from "../styles/Input.styled";
import axios from "axios";
import { useState } from "react";
import photo from "../assets/square-large-photo.jpg";
import { AuthPhotoWrapper } from "../styles/Container.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";

import { validatePassword } from "../../functions/validate";
import ErrorMessage from "../components/ErrorMessage";

const Reset = () => {
	const [searchParams] = useSearchParams();
	const [errorMessage, setErrorMessage] = useState("");
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const token = searchParams.get("token_key");

	const changePassword = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");

		const password = e.target.password.value;
		const repeatPassword = e.target.repeatPassword.value;

		if (!password || !password) {
			setIsLoading(false);
			return setErrorMessage("All fields required");
		}

		if (!validatePassword(password)) {
			setIsLoading(false);
			return setErrorMessage("Password too weak");
		}

		if (password !== repeatPassword) {
			setIsLoading(false);
			return setErrorMessage("Passwords do not match");
		}

		try {
			await axios.patch(
				"/identity/changePassword",
				{ password, repeatPassword },
				{
					headers: {
						Authorization: token,
					},
				}
			);
			setMessage(
				"You're password has been successfully changed, go to login page"
			);
			e.target.reset();
			setIsLoading(false);
		} catch (error) {
			setMessage(error.response.data);
			setIsLoading(false);
		}
	};
	return (
		<AuthPhotoWrapper>
			<img src={photo} />
			<StyledLoginSignupWrapper>
				<form onSubmit={changePassword}>
					<StyledInputLabel>
						<p>New Password</p>
						<StyledInput
							name="password"
							type="password"
							placeholder="Password"
						/>
					</StyledInputLabel>
					<StyledInputLabel>
						<p>Repeat Password</p>
						<StyledInput
							name="repeatPassword"
							type="password"
							placeholder="Password"
						/>
					</StyledInputLabel>
					{message && <p>{message}</p>}
					{errorMessage && <ErrorMessage message={errorMessage} />}
					<LargeButton type="submit" disabled={isLoading}>
						{isLoading ? "Loading..." : "Change Password"}
					</LargeButton>
				</form>
				<Link to="/login">
					<StyledButton disabled={isLoading}>To Login</StyledButton>
				</Link>
			</StyledLoginSignupWrapper>
		</AuthPhotoWrapper>
	);
};

export default Reset;
