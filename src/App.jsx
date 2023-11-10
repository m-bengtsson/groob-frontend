import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { LoginPage } from "./pages/LoginPage";
import { GlobalStyle } from "./styles/Global.styled";
import { SignupPage } from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import { CurrentUserContext } from "./context/currentUser";
import AdminPage from "./pages/AdminPage";
import ManageUsersPage from "./pages/ManageUsersPage";
import ManageItemsPage from "./pages/ManageItemsPage";
import AdminTemplate from "./pageTemplate/AdminTemplate";
import UserTemplate from "./pageTemplate/UserTemplate";
import PublicTemplate from "./pageTemplate/PublicTemplate";
import NoRoute from "./pages/NoRoute";
import Reset from "./pages/Reset";
import AddItemPage from "./pages/AddItemPage";

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
            <Route path="/manage-items/add-item" element={<AddItemPage />} />
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
            <Route path="reset" element={<Reset />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>
        )}

        <Route path="*" element={<NoRoute />} />
      </Routes>
    </div>
  );
}

export default App;
