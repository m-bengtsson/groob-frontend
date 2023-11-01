import { useContext } from "react";
import { CurrentUserContext } from "../context/currentUser";

const HomePage = () => {
  const { removeCurrentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    removeCurrentUser();
  };

  return (
    <div>
      HomePage
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
