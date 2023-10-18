import { Login } from "../components/Login";
import photo from "../assets/square-large-photo.jpg";
import { AuthPhotoWrapper } from "../styles/Container.styled";

export const LoginPage = () => {
	return (
		<AuthPhotoWrapper>
			<img src={photo} />
			<Login />
		</AuthPhotoWrapper>
	);
};
