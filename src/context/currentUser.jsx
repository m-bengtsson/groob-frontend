import { createContext, useEffect, useState } from "react";
import axios from "axios";
import instance from "../axiosconfig";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const getUser = async () => {
			try {
				const respAccess = await instance.get("/users/currentUser");

				const user = await respAccess.data;
				setCurrentUser(user);
			} catch (error) {
				//todo: handle this better
				console.log("You are not logged in");
			}
		};
		getUser();
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
	};

	return (
		<CurrentUserContext.Provider value={value}>
			{children}
		</CurrentUserContext.Provider>
	);
};
export default CurrentUserProvider;
