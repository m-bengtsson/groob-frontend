import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicTemplate = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default PublicTemplate;
