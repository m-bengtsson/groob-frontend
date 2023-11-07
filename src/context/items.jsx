import { createContext, useEffect, useState } from "react";
import instance from "../axiosconfig";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await instance.get("/items");
        const items = response.data;
        setItems(items);
      } catch (error) {
        if (error.response.status === 404) {
          setErrorMessage("Oh no! We could not fetch the items :'(");
        }
      }
    };
    getItems();
  }, []);

  const value = {
    items,
    errorMessage,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
export default ItemsContextProvider;
