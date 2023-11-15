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
			<View className={"icons-search"}>
				<VscAccount size={22} />
				{currentUser && <p onClick={handleLogout}>Logout</p>}
				{!currentUser && (
					<Link to={"/login"}>
						<p>Login</p>
					</Link>
				)}
			</View>
		</StyledNavbar>
	);
};

export default AdminNavbar;
