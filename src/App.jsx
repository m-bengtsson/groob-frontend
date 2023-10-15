import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { StyledButton, LargeButton } from "../components/Button.styled";
import { GlobalStyle } from "../components/Global.styled";

function App() {
	return (
		<div>
			<GlobalStyle />
			<StyledButton>
				<Link to="/signup">Signup</Link>
			</StyledButton>
			<br />
			<LargeButton>
				<Link to="/login">Log in</Link>
			</LargeButton>

			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
