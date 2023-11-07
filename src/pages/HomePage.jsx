import largeImage from "../assets/folks-in-a-field.jpg";
import { UserHomeContainer } from "../styles/UserHome.styled";
import { useContext } from "react";
import { ItemsContext } from "../context/items";
import ItemCard from "../components/ItemCard";

const HomePage = () => {
  const { items, errorMessage } = useContext(ItemsContext);

  return (
    <UserHomeContainer>
      <img className="image" src={largeImage} />
      {errorMessage && <p>{errorMessage}</p>}
      <div className="cards-wrapper">
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </UserHomeContainer>
  );
};

export default HomePage;
