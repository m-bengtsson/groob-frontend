import { Link } from "react-router-dom";
import { LargeButton } from "../styles/Button.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";

export const Signup = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password, rePassword } = e.target;

		console.log(
			"EMAIL, PASSWORD, REPASSWORD",
			email.value,
			password.value,
			rePassword.value
		);
	};

	return (
		<StyledLoginSignupWrapper>
			<h1>Sign up</h1>
			<form onSubmit={handleSubmit}>
				<StyledInputLabel>
					<p>Email</p>
					<StyledInput name="email" type="email" placeholder="Email" />
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
					<Link to="/">
						<b>Log in here.</b>
					</Link>
				</p>

				<LargeButton type="submit">Sign up</LargeButton>
			</form>
		</StyledLoginSignupWrapper>
	);
};
