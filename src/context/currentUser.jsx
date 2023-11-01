import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const getUser = async () => {
			const accesstoken = localStorage.getItem("accesstoken");

			try {
				const respUser = await axios({
					method: "get",
					url: "http://localhost:8080/api/users/currentUser",
					withCredentials: true,
					headers: { Authorization: accesstoken },
				});

				const user = await respUser.data;

				setCurrentUser(user);
			} catch (error) {
				setCurrentUser(null);
			}
		};

		getUser();
	}, []);

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
