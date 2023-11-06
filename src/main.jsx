import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CurrentUserProvider from "./context/currentUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<CurrentUserProvider>
				<App />
			</CurrentUserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
