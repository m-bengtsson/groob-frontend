import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { GlobalStyle } from "./styles/Global.styled";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { CurrentUserContext } from "./context/currentUser";
import HomePage from "./pages/HomePage";

function App() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("CURRENT USER: ", currentUser);
  return (
    <div>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={currentUser ? <HomePage /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
