import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const accesstoken = localStorage.getItem("accesstoken");

      try {
        const respAccess = await axios({
          method: "get",
          url: "http://localhost:8080/api/users/currentUser",
          withCredentials: false,
          headers: { Authorization: accesstoken },
        });

        const user = await respAccess.data;
        setCurrentUser(user);
      } catch (error) {
        if (error.code === "ERR_BAD_REQUEST") {
          try {
            const respRefresh = await axios({
              method: "get",
              url: "http://localhost:8080/api/users/currentUser",
              withCredentials: true,
            });

            const user = await respRefresh.data;
            const accesstoken = respRefresh.headers.authorization;

            setCurrentUser(user);
            localStorage.setItem("accesstoken", accesstoken);
            return;
          } catch (error) {
            setCurrentUser(null);
          }
        }
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
export default CurrentUserProvider;
