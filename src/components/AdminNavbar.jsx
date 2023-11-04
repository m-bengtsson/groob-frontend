import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext } from "react";
import axios from "axios";
import { View } from "../styles/Global.styled";
import { StyledNavbar, Logo } from "../styles/Navbar.styled";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../context/currentUser";

const AdminNavbar = () => {
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
				<Link to="manage-users">
					<View>
						<p>Users</p>
						<IoSettingsOutline size={22} />
					</View>
				</Link>
				<Link to="manage-items">
					<View>
						<p>Items</p>
						<IoSettingsOutline size={22} />
					</View>
				</Link>
			</View>
			<p onClick={handleLogout}>Logout</p>
			<VscAccount size={22} />
		</StyledNavbar>
	);
};

export default AdminNavbar;
