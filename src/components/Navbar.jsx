import { useContext } from "react";
import axios from "axios";
import { View } from "../styles/Global.styled";
import { StyledNavbar, Logo } from "../styles/Navbar.styled";
import NavIcons from "./NavIcons";
import { CurrentUserContext } from "../context/currentUser";

const Navbar = () => {
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
		<StyledNavbar>
			<Logo>GROOB</Logo>
			<View>
				<p>Women</p>
				<p>Men</p>
				<p>Accessories</p>
			</View>
			<button onClick={handleLogout}>Logout</button>
			<NavIcons />
		</StyledNavbar>
	);
};

export default Navbar;
