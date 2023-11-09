import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axiosconfig";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoading(true);
		const getUser = async () => {
			try {
				const response = await instance.get("/users/currentUser");
				const user = await response.data;

				setCurrentUser(user);
				setIsLoading(false);
			} catch (error) {
				setCurrentUser(null);
				/* navigate("/"); */
				setIsLoading(false);
			}
		};
		getUser();
	}, [navigate]);

	const addCurrentUser = (user) => {
		setCurrentUser(user);
	};

	const removeCurrentUser = () => {
		setCurrentUser(null);
		navigate("/");
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
