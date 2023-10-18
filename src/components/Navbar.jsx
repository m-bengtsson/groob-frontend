import { View } from "../styles/Global.styled";
import { StyledNavbar, Logo } from "../styles/Navbar.styled";
import NavIcons from "./NavIcons";

const Navbar = () => {
	return (
		<StyledNavbar>
         <Logo>GROOB</Logo>
         <View >
            <p>Women</p>
            <p>Men</p>
            <p>Accessories</p>
         </View>
         <NavIcons />
		</StyledNavbar>
	);
}

export default Navbar;
