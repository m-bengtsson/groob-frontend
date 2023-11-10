import { LargeButton } from "../styles/Button.styled";
import { StyledInput, StyledInputLabel } from "../styles/Input.styled";
import axios from "axios";
import { CurrentUserContext } from "../context/currentUser";
import { useContext } from "react";
import ErrorMessage from "./ErrorMessage";
import { useState } from "react";
import { validateEmail } from "../../functions/validate";

export const Login = ({ setShowRequestPassword }) => {
	const { addCurrentUser } = useContext(CurrentUserContext);
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		setIsLoading(true);

		const { email, password } = e.target;
		const requestBody = { email: email.value, password: password.value };

		if (!email.value || !password.value) {
			setIsLoading(false);
			return setErrorMessage("All fields required");
		}

		if (!validateEmail(email.value)) {
			setIsLoading(false);
			return setErrorMessage("Please enter a valid email address");
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
				setIsLoading(false);
				await addCurrentUser(user);
			}
		} catch (error) {
			if (error.message === "Network Error") {
				setIsLoading(false);
				return setErrorMessage(
					"Something went wrong when trying to log in, please try again later"
				);
			}
			setIsLoading(false);
			setErrorMessage(error.response.data);
		}
	};

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={handleLogin}>
				<StyledInputLabel>
					<p>Email</p>
					<StyledInput name="email" type="email" placeholder="Email" />
				</StyledInputLabel>
				<StyledInputLabel>
					<p>Password</p>
					<StyledInput name="password" type="password" placeholder="Password" />
				</StyledInputLabel>
				<p onClick={() => setShowRequestPassword(true)}>
					<b>Forgot Password?</b>
				</p>
				{errorMessage && <ErrorMessage message={errorMessage} />}
				<LargeButton type="submit" disabled={isLoading}>
					{isLoading ? "Loading..." : "Login"}
				</LargeButton>
			</form>
		</>
	);
};
