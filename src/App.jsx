import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { GlobalStyle } from "./styles/Global.styled";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div>
			<GlobalStyle />
         <Navbar />
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignupPage />} />
			</Routes>
		</div>
	);
}

export default App;
