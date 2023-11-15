import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const value = {
    items,
    setItems,
    errorMessage,
    setErrorMessage,
  };

  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};
export default ItemsContextProvider;
