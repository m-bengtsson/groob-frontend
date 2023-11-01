import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();

/* useEffect(() => {
	const savedUser = JSON.parse(localStorage.getItem("accesstoken")) || [];
	setCurrentUser(savedUser);
}, []); */
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
