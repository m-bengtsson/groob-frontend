import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../axiosconfig";
import { SmallButton } from "../styles/Button.styled";

const ItemDetails = () => {
  const { id } = useParams();
  const [fethcedItem, setItem] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  // todo: loader

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await instance.get(`items/${id}`);
        const item = await response.data;
        setItem(item);
        console.log("ITEM: ", item);
      } catch (error) {
        setErrorMessage("We could not find what you are looking for");
      }
    };
    getItem();
  }, [id]);

  return (
    <div>
      <div>
        <div>Image</div>
      </div>
      <div>
        <h3>{fethcedItem?.title}</h3>
        <p>{fethcedItem?.description}</p>
        <SmallButton>Remind me</SmallButton>
        <SmallButton>Buy</SmallButton>
      </div>
    </div>
  );
};

export default ItemDetails;
