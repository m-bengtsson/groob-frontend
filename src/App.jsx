import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignupPage } from "./pages/SignupPage";
import { StyledButton, LargeButton } from "./styles/Button.styled";
import { GlobalStyle } from "./styles/Global.styled";

function App() {
	return (
		<div>
			<GlobalStyle />

			<Link to="/signup">
				<StyledButton>Signup</StyledButton>
			</Link>
			<Link to="/login">
				<LargeButton>Log in</LargeButton>
			</Link>

			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
		</div>
	);
}

export default App;
