import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../axiosconfig";
import { SmallButton } from "../styles/Button.styled";
import {
  ItemDetailsContainer,
  StyledDropdownContainer,
} from "../styles/Container.styled";

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
    <ItemDetailsContainer>
      <div className="image-wrapper large-container">
        <div className="image">Image</div>
      </div>
      <div className="details-wrapper large-container">
        <h3>{fethcedItem?.title}</h3>
        <StyledDropdownContainer>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </StyledDropdownContainer>
        <div className="item-buttons">
          <SmallButton>Remind me</SmallButton>
          <SmallButton>Buy</SmallButton>
        </div>
        <div className="description-container">
          <label>Description</label>
          <p>{fethcedItem?.description}</p>
        </div>
      </div>
    </ItemDetailsContainer>
  );
};

export default ItemDetails;
