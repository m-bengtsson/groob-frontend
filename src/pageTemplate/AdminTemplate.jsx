import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

export const AdminTemplate = () => {
	return (
		<>
			<AdminNavbar />
			<Outlet />
		</>
	);
};

export default AdminTemplate;
