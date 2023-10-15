import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Button, LargeButton } from "../components/Button.styled";
import { GlobalStyle } from "../components/Global.styled";

function App() {
	return (
		<div>
			<GlobalStyle />
			<Button>
				<Link to="/signup">Signup</Link>
			</Button>
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
