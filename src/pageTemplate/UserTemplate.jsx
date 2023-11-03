import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const UserTemplate = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default UserTemplate;
