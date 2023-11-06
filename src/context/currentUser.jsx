import { createContext, useEffect, useState } from "react";
import instance from "../axiosconfig";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const getUser = async () => {
			const response = await instance.get("/users/currentUser");
			const user = await response.data;
			setCurrentUser(user);
			setIsLoading(false);
		};

		getUser();
		setIsLoading(false);
	}, []);

	const addCurrentUser = (user) => {
		setCurrentUser(user);
	};

	const removeCurrentUser = () => {
		setCurrentUser(null);
		localStorage.removeItem("accesstoken");
	};

	const value = {
		currentUser,
		addCurrentUser,
		removeCurrentUser,
		isLoading,
	};

	return (
		<CurrentUserContext.Provider value={value}>
			{children}
		</CurrentUserContext.Provider>
	);
};
export default CurrentUserProvider;
