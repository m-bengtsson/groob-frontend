import { createContext, useEffect, useState } from "react";
import instance from "../axiosconfig";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await instance.get("/items");
        const items = await response.data;
        setItems(items);
      } catch (error) {
        // todo: göra något här
        console.log(error);
      }
    };
    getItems();
  }, []);

  /*  const addItem = (item) => {
    setItems(prev);
  }; */

  const value = {
    items,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
export default ItemsContextProvider;
