import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
	const [users, setUsers] = useState();

	const value = {
		users,
		setUsers,
	};

	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};
export default UsersContextProvider;
