import { LargeButton } from "../styles/Button.styled";
import { StyledLoginSignupWrapper } from "../styles/Container.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";
import axios from "axios";
import { CurrentUserContext } from "../context/currentUser";
import { useContext, useState } from "react";

const validEmail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Login = () => {
	const { addCurrentUser } = useContext(CurrentUserContext);
	const [showRequestPassword, setShowRequestPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();
		const { email, password } = e.target;
		const requestBody = { email: email.value, password: password.value };

		if (!email.value || !password.value) {
			return setMessage("All fields required");
		}

		if (!validEmail.test(email.value)) {
			return setMessage("Please enter a valid email address");
		}

		try {
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
			setMessage(error.response.data);
			console.log(error);
		}
	};

	const handlePassword = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage("");
		const { email } = e.target;

		if (!email.value) {
			setIsLoading(false);
			return setMessage("All fields required");
		}

		try {
			const response = await axios.post(
				"http://localhost:8080/api/identity/requestResetPassword",
				{
					email: email.value,
				}
			);

			setMessage(`${response.data}`);
			setIsLoading(false);
		} catch (error) {
			setMessage(
				"Something went wrong when trying to send an email, try again later"
			);
			setIsLoading(false);
		}
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
					{message && <p>{message}</p>}
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
					{message && <p>{message}</p>}
					<LargeButton type="submit" disabled={isLoading}>
						{isLoading ? "Loading..." : "Send Request"}
					</LargeButton>
				</form>
			)}
		</StyledLoginSignupWrapper>
	);
};
