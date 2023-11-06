import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

const AdminTemplate = () => {
	return (
		<>
			<AdminNavbar />
			<Outlet />
		</>
	);
};

export default AdminTemplate;
