import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const UserTemplate = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default UserTemplate;
