import { StyledNotFound } from "../styles/NotFound.styled";
import notFoundImg from "../assets/not-found.jpg";
import { LargeButton } from "../styles/Button.styled";
import { Link } from "react-router-dom";

const NoRoute = () => {
	return (
		<StyledNotFound>
			<div>
				<h1>OOPS, 404!</h1>
				<h3>We can't seem to find this page</h3>
				<Link to="/">
					<LargeButton>Return to Home</LargeButton>
				</Link>
			</div>
			<img src={notFoundImg} />
		</StyledNotFound>
	);
};

export default NoRoute;
