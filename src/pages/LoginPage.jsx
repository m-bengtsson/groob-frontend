import { Login } from "../components/Login";
import photo from "../assets/square-large-photo.jpg";
import {
	AuthPhotoWrapper,
	StyledLoginSignupWrapper,
} from "../styles/Container.styled";
import { useState } from "react";
import RequestPassword from "../components/RequestPassword";

export const LoginPage = () => {
	const [showRequestPassword, setShowRequestPassword] = useState(false);

	return (
		<AuthPhotoWrapper>
			<img src={photo} />
			<StyledLoginSignupWrapper>
				{!showRequestPassword && (
					<Login setShowRequestPassword={setShowRequestPassword} />
				)}
				{showRequestPassword && (
					<RequestPassword setShowRequestPassword={setShowRequestPassword} />
				)}
			</StyledLoginSignupWrapper>
		</AuthPhotoWrapper>
	);
};
