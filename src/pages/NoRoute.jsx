import { useLocation } from "react-router-dom";

const NoRoute = () => {
	const location = useLocation();

	return (
		<>
			<p>Oh no, we couldnt find a route for {location.pathname}</p>
		</>
	);
};

export default NoRoute;
