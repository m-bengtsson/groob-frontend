import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const value = {
		users,
		setUsers,
		errorMessage,
		setErrorMessage,
	};

	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};
export default UsersContextProvider;
