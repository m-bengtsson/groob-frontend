import { StyledFooter } from "../styles/Footer.styled";
import leftPhoto from "../assets/dudettes-with-trash.jpg";
import rightPhoto from "../assets/accessories.jpg";

export const Footer = () => {
	return (
		<StyledFooter>
			<img src={leftPhoto} />
			<img src={rightPhoto} />
		</StyledFooter>
	);
};
