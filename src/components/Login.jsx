import { Link } from "react-router-dom";
import { LargeButton } from "../styles/Button.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";

export const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = e.target;

		console.log("EMAIL, PASSWORD", email.value, password.value);
	};

	return (
		<StyledLoginSignupWrapper>
			<div>
				<form onSubmit={handleSubmit}>
					<StyledInputLabel>
						<p>Email</p>
						<StyledInput name="email" type="email" placeholder="Email" />
					</StyledInputLabel>

					<StyledInputLabel>
						<p>Password</p>
						<StyledInput
							name="password"
							type="password"
							placeholder="Password"
						/>
					</StyledInputLabel>
					<p>
						Don`t have an account?
						<Link to="/Signup">
							<b>Sign up here.</b>
						</Link>
					</p>

					<LargeButton type="submit">Log in</LargeButton>
				</form>
			</div>
		</StyledLoginSignupWrapper>
	);
};
