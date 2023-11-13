import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { View } from "../styles/Global.styled";
import { StyledNavbar, Logo } from "../styles/Navbar.styled";
import NavIcons from "./NavIcons";
import { CurrentUserContext } from "../context/currentUser";
import SearchForm from "./SearchForm";

const Navbar = () => {
	const { removeCurrentUser, currentUser } = useContext(CurrentUserContext);
	const [showSearch, setShowSearch] = useState(false);

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
			<View className={"icons-search"}>
				{showSearch && <SearchForm />}
				<NavIcons setShowSearch={setShowSearch} showSearch={showSearch} />
				{currentUser && <p onClick={handleLogout}>Logout</p>}
			</View>
		</StyledNavbar>
	);
};

export default Navbar;
