import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CurrentUserProvider from "./context/currentUser.jsx";
import ItemsContextProvider from "./context/items.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider>
        <ItemsContextProvider>
          <App />
        </ItemsContextProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
