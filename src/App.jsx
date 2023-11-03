import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { GlobalStyle } from "./styles/Global.styled";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { CurrentUserContext } from "./context/currentUser";
import AdminPage from "./pages/AdminPage";
import ManageUsersPage from "./pages/ManagaUsersPage";
import ManageItemsPage from "./pages/ManageItemsPage";

function App() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("CURRENT USER: ", currentUser);
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/manage-users" element={<ManageUsersPage />} />
        <Route path="/admin/manage-items" element={<ManageItemsPage />} />
        <Route path="/" element={currentUser ? <HomePage /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
