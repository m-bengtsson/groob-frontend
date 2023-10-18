import { View } from "../styles/Global.styled";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";

const NavIcons = () => {
  return (
    <View>
      <VscAccount size={22} />
      <HiOutlineHeart size={22} />
      <HiOutlineShoppingBag size={22} />
    </View>
  );
};

export default NavIcons;
