import largeImage from "../assets/folks-in-a-field.jpg";
import { UserHomeContainer } from "../styles/UserHome.styled";
import instance from "../axiosconfig";
import { useEffect } from "react";
import { useContext } from "react";
import { ItemsContext } from "../context/items";

const HomePage = () => {
  const { items } = useContext(ItemsContext);
  /*   useEffect(() => {
    const getItems = async () => {
      try {
        const response = await instance.get("/items");
        console.log("RESP: ", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []); */

  return (
    <UserHomeContainer>
      <img className="image" src={largeImage} />
      {items?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </UserHomeContainer>
  );
};

export default HomePage;
