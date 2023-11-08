import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { LargeButton, StyledButton } from "../styles/Button.styled";
import { StyledInputLabel, StyledInput } from "../styles/Input.styled";
import axios from "axios";
import { useState } from "react";
import photo from "../assets/square-large-photo.jpg";
import { AuthPhotoWrapper } from "../styles/Container.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";

const Reset = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const token = searchParams.get("token_key");

	const changePassword = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const password = e.target.password.value;
		const repeatPassword = e.target.repeatPassword.value;

		try {
			await axios.patch(
				"http://localhost:8080/api/identity/changePassword",
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
			navigate("/");
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

					<LargeButton type="submit" disabled={isLoading}>
						{isLoading ? "Loading..." : "Change Password"}
					</LargeButton>
				</form>
				<Link to="/">
					<StyledButton disabled={isLoading}>To Login</StyledButton>
				</Link>
			</StyledLoginSignupWrapper>
		</AuthPhotoWrapper>
	);
};

export default Reset;
