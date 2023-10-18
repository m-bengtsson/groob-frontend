import { View } from "../styles/Global.styled";
import { StyledNavbar, Logo } from "../styles/Navbar.styled";

const Navbar = () => {
	return (
		<StyledNavbar>
         <Logo>GROOB</Logo>
         <View >
            <p>Women</p>
            <p>Men</p>
            <p>Accessories</p>
         </View>
         <View>
            <p>icons</p>
         </View>
		</StyledNavbar>
	);
}

export default Navbar;
