import { useContext } from "react";
import { CurrentUserContext } from "../context/currentUser";
import axios from "axios";

const HomePage = () => {
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
		<div>
			HomePage
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default HomePage;
