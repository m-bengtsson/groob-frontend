import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { LargeButton } from "../styles/Button.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";
import { validatePassword } from "../../functions/validate";
import ErrorMessage from "./ErrorMessage";

export const Signup = () => {
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();
	const signupToken = searchParams.get("token_key");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, password, rePassword } = e.target;
		setErrorMessage("");

		if (!name.value || !password.value || !rePassword.value) {
			return setErrorMessage("All fields required");
		}

		if (!validatePassword(password.value)) {
			return setErrorMessage("Password too weak");
		}

		if (password.value !== rePassword.value) {
			return setErrorMessage("Passwords do not match");
		}

		const body = {
			name: name.value,
			password: password.value,
			repeatPassword: rePassword.value,
		};

		try {
			const response = await axios.post("/identity/register", body, {
				headers: { Authorization: signupToken },
			});
			if (response.status === 200) {
				navigate("/login");
			}
		} catch (error) {
			setErrorMessage(error.response.data);
		}
	};

	return (
		<StyledLoginSignupWrapper>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit}>
				<StyledInputLabel>
					<p>Name</p>
					<StyledInput name="name" type="text" placeholder="Name" />
				</StyledInputLabel>

				<StyledInputLabel>
					<p>Password</p>
					<StyledInput name="password" type="password" placeholder="Password" />
				</StyledInputLabel>

				<StyledInputLabel>
					<p>Repeat Password</p>
					<StyledInput
						name="rePassword"
						type="password"
						placeholder="Password"
					/>
				</StyledInputLabel>
				<p>
					Already have an account?{" "}
					<Link to="/login">
						<b>Log in here.</b>
					</Link>
				</p>
				{errorMessage && <ErrorMessage message={errorMessage} />}
				<LargeButton type="submit">Sign up</LargeButton>
			</form>
		</StyledLoginSignupWrapper>
	);
};
