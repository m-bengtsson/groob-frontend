import { Link, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
	return (
		<div>
			<Link to="/signup">Signup</Link>
			<br />
			<Link to="/login">Log in</Link>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
