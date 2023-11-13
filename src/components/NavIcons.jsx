import { View } from "../styles/Global.styled";
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineSearch } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const NavIcons = ({ setShowSearch, showSearch }) => {
	return (
		<View>
			{showSearch ? (
				<IoCloseOutline size={28} onClick={() => setShowSearch(!showSearch)} />
			) : (
				<HiOutlineSearch size={22} onClick={() => setShowSearch(!showSearch)} />
			)}
			<VscAccount size={22} />
			<HiOutlineHeart size={22} />
			<HiOutlineShoppingBag size={22} />
		</View>
	);
};

export default NavIcons;
