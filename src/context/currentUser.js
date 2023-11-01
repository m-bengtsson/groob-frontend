import { createContext, useEffect, useState } from "react";

const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	/* useEffect(() => {
		const savedUser = JSON.parse(localStorage.getItem("accesstoken")) || [];
		setCurrentUser(savedUser);
	}, []); */

	const addCurrentUser = (user) => {
		setCurrentUser(user);
	};

	const value = {
		currentUser,
		addCurrentUser,
	};

	return (
		<CurrentUserContext.Provider value={value}>
			{children}
		</CurrentUserContext.Provider>
	);
};
