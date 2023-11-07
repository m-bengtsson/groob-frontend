import largeImage from "../assets/folks-in-a-field.jpg";
import { UserHomeContainer } from "../styles/UserHome.styled";

const HomePage = () => {
  return (
    <UserHomeContainer>
      <img className="image" src={largeImage} />
    </UserHomeContainer>
  );
};

export default HomePage;
