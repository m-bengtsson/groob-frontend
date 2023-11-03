import { Link } from "react-router-dom";
import { View } from "../styles/Global.styled";
import { useContext } from "react";
import { CurrentUserContext } from "../context/currentUser";
import axios from "axios";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";

const NavIcons = () => {
  const { removeCurrentUser, currentUser } = useContext(CurrentUserContext);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/identity/logout",
        {
          id: currentUser.id,
        },
        { withCredentials: true }
      );

      removeCurrentUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      {currentUser ? (
        <p onClick={handleLogout}>Logout</p>
      ) : (
        <Link to="/login">
          <p>Login</p>
        </Link>
      )}

      <VscAccount size={22} />
      <HiOutlineHeart size={22} />
      <HiOutlineShoppingBag size={22} />
    </View>
  );
};

export default NavIcons;
