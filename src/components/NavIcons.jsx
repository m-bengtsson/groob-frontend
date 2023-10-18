import { useState } from "react";
import { Link } from "react-router-dom";
import { View } from "../styles/Global.styled";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";

const NavIcons = () => {
  const [buttonText, setButtonText] = useState("Signup");

  const toggleButtonText = () => {
    setButtonText(buttonText === "Signup" ? "Login" : "Signup");
  };
  return (
    <View>
      <Link to={buttonText === "Signup" ? "/signup" : "/login"}>
        <p onClick={toggleButtonText}>{buttonText}</p>
      </Link>
      <VscAccount size={22} />
      <HiOutlineHeart size={22} />
      <HiOutlineShoppingBag size={22} />
    </View>
  );
};

export default NavIcons;
