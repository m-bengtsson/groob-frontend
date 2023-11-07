import { createContext, useEffect, useState } from "react";
import instance from "../axiosconfig";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		if (users.length === 0) {
			const getUsers = async () => {
				try {
					const response = await instance.get("/users");
					const allUsers = response.data;

					setUsers(allUsers);
				} catch (error) {
					console.log(error);
				}
			};
			getUsers();
		}
		return;
	}, [users.length]);

	const value = {
		users,
	};

	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};
export default UsersContextProvider;
