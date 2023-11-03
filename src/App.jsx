import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { LoginPage } from "./pages/LoginPage";
import { GlobalStyle } from "./styles/Global.styled";
import HomePage from "./pages/HomePage";
import { CurrentUserContext } from "./context/currentUser";
import AdminPage from "./pages/AdminPage";
import ManageUsersPage from "./pages/ManagaUsersPage";
import ManageItemsPage from "./pages/ManageItemsPage";
import AdminTemplate from "./pageTemplate/AdminTemplate";
import UserTemplate from "./pageTemplate/UserTemplate";
import PublicTemplate from "./pageTemplate/PublicTemplate";

function App() {
	const { currentUser } = useContext(CurrentUserContext);
	console.log("CURRENT USER: ", currentUser);
	return (
		<div>
			<GlobalStyle />
			<Routes>
				{!currentUser && (
					<Route path="/" element={<PublicTemplate />}>
						<Route path="/" element={<LoginPage />} />
					</Route>
				)}

				{currentUser && currentUser.role === "admin" && (
					<Route path="/" element={<AdminTemplate />}>
						<Route path="/" element={<AdminPage />} />
						<Route path="manage-users" element={<ManageUsersPage />} />
						<Route path="manage-items" element={<ManageItemsPage />} />
					</Route>
				)}

				{currentUser && currentUser.role === "user" && (
					<Route path="/" element={<UserTemplate />}>
						<Route path="/" element={<HomePage />} />
					</Route>
				)}
			</Routes>
		</div>
	);
}

export default App;
