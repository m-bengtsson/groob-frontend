import { Signup } from "../components/Signup";
import photo from "../assets/square-large-photo.jpg";
import { AuthPhotoWrapper } from "../styles/Container.styled";

export const SignupPage = () => {
	return (
		<AuthPhotoWrapper>
			<img src={photo} />
			<Signup />
		</AuthPhotoWrapper>
	);
};
