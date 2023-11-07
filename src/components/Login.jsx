import { LargeButton } from "../styles/Button.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";
import axios from "axios";
import { CurrentUserContext } from "../context/currentUser";
import { useContext, useState } from "react";

export const Login = () => {
	const { addCurrentUser } = useContext(CurrentUserContext);
	const [showRequestPassword, setShowRequestPassword] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		const { email, password } = e.target;

		try {
			const requestBody = { email: email.value, password: password.value };

			const resp = await axios.post(
				"http://localhost:8080/api/identity/login",
				requestBody,
				{ withCredentials: true }
			);

			if (resp.status === 200) {
				const accesstoken = resp.headers.authorization;

				localStorage.setItem("accesstoken", accesstoken);

				const respUser = await axios({
					method: "get",
					url: "http://localhost:8080/api/users/currentUser",
					headers: { Authorization: accesstoken },
				});

				const user = await respUser.data;
				await addCurrentUser(user);
			}
		} catch (error) {
			//todo: handle this error
			console.log(error);
		}
	};

	const handlePassword = (e) => {
		e.preventDefault();
		const { email } = e.target;
		console.log("REQUEST PASSWORD EMAIL: ", email.value);
	};

	return (
		<StyledLoginSignupWrapper>
			<h1>{showRequestPassword ? "Request Password" : "Login"}</h1>
			{!showRequestPassword && (
				<form onSubmit={handleLogin}>
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
					<p onClick={() => setShowRequestPassword(true)}>
						<b>Forgot Password?</b>
					</p>

					<LargeButton type="submit">Log in</LargeButton>
				</form>
			)}
			{showRequestPassword && (
				<form onSubmit={handlePassword}>
					<StyledInputLabel>
						<p>Email</p>
						<StyledInput name="email" type="email" placeholder="Email" />
					</StyledInputLabel>
					<p onClick={() => setShowRequestPassword(false)}>
						<b>Cancel request</b>
					</p>
					<LargeButton type="submit">Send Request</LargeButton>
				</form>
			)}
		</StyledLoginSignupWrapper>
	);
};
