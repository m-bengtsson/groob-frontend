import { LargeButton } from "../src/styles/Button.styled";
import { StyledLoginSignupWrapper } from "../src/styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../src/styles/Input.styled";

export const Signup = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password, rePassword } = e.target;

		//Check if password and rePassword is the same, here or in backend?
		//fetch /signup with credentials
		//redirect
		//error handling

		console.log(
			"EMAIL, PASSWORD, REPASSWORD",
			email.value,
			password.value,
			rePassword.value
		);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<StyledLoginSignupWrapper>
					<StyledInputLabel>
						Email
						<StyledInput name="email" type="email" placeholder="Email" />
					</StyledInputLabel>

					<StyledInputLabel>
						Password
						<StyledInput
							name="password"
							type="password"
							placeholder="Password"
						/>
					</StyledInputLabel>

					<StyledInputLabel>
						Repeat Password
						<StyledInput
							name="rePassword"
							type="password"
							placeholder="Password"
						/>
					</StyledInputLabel>

					<p>
						Already have an account? <b>Log in here.</b>
					</p>

					<LargeButton type="submit">Sign in</LargeButton>
				</StyledLoginSignupWrapper>
			</form>
		</div>
	);
};
