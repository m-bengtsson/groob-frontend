import { useContext } from "react";
import axios from "axios";
import { View } from "../styles/Global.styled";
import { StyledNavbar, Logo } from "../styles/Navbar.styled";
import NavIcons from "./NavIcons";
import { CurrentUserContext } from "../context/currentUser";
import { Link } from "react-router-dom";

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
			//todo: handle this error
			console.log(error);
		}
	};

	return (
		<StyledNavbar>
			<Link to="/">
				<Logo>GROOB</Logo>
			</Link>
			<View>
				<p>Women</p>
				<p>Men</p>
				<p>Accessories</p>
			</View>
			{currentUser && <p onClick={handleLogout}>Logout</p>}
			<NavIcons />
		</StyledNavbar>
	);
};

export default Navbar;
