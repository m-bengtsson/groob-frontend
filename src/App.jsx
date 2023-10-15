import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { StyledButton, LargeButton } from "./styles/Button.styled";
import { GlobalStyle } from "./styles/Global.styled";

function App() {
	return (
		<div>
			<GlobalStyle />

			<Link to="/signup">
				<StyledButton>Signup</StyledButton>
			</Link>

			<br />

			<Link to="/login">
				<LargeButton>Log in</LargeButton>
			</Link>

			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
