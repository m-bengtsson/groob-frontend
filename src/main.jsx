import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CurrentUserProvider from "./context/currentUser.jsx";
import ItemsContextProvider from "./context/items.jsx";
import UsersContextProvider from "./context/users.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<CurrentUserProvider>
				<UsersContextProvider>
					<ItemsContextProvider>
						<App />
					</ItemsContextProvider>
				</UsersContextProvider>
			</CurrentUserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
