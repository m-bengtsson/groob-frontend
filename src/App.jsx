import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginPage } from "./pages/LoginPage";
import { GlobalStyle } from "./styles/Global.styled";
import HomePage from "./pages/HomePage";
import { CurrentUserContext } from "./context/currentUser";
import AdminPage from "./pages/AdminPage";
import ManageUsersPage from "./pages/ManageUsersPage";
import ManageItemsPage from "./pages/ManageItemsPage";
import AdminTemplate from "./pageTemplate/AdminTemplate";
import UserTemplate from "./pageTemplate/UserTemplate";
import PublicTemplate from "./pageTemplate/PublicTemplate";

function App() {
	const { currentUser, isLoading } = useContext(CurrentUserContext);
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<GlobalStyle />
			<Routes>
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

				{!currentUser && (
					<Route path="/" element={<PublicTemplate />}>
						<Route path="/" element={<LoginPage />} />
					</Route>
				)}
			</Routes>
		</div>
	);
}

export default App;
