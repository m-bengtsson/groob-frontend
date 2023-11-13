import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../axiosconfig";
import { LargeButton, SmallButton } from "../styles/Button.styled";
import {
  ItemDetailsContainer,
  ItemNotFound,
  StyledDropdownContainer,
} from "../styles/Container.styled";
import defaultImage from "../assets/default-image.jpg";

const ItemDetails = () => {
  const { id } = useParams();
  const [fetchedItem, setItem] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [lowInStock, setLowInStock] = useState(false);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await instance.get(`items/${id}`);
        const item = await response.data;
        setItem(item);
        if (item.numberOfItems <= 3) {
          setLowInStock(true);
        }
      } catch (error) {
        setErrorMessage("We could not find what you are looking for");
      }
    };
    getItem();
  }, [id]);

  if (errorMessage) {
    return (
      <ItemNotFound>
        <p>{errorMessage}</p>
        <Link to={"/"}>
          <LargeButton>Back to Home</LargeButton>
        </Link>
      </ItemNotFound>
    );
  }

  return (
    <ItemDetailsContainer>
      <div className="image-wrapper large-container">
        <img className="image" src={defaultImage} />
      </div>
      <div className="details-wrapper large-container">
        <div>
          <h3>{fetchedItem?.title}</h3>
          <p>1700 sek</p>
        </div>
        <StyledDropdownContainer>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="XS">XS</option>
            <option value="S">S {lowInStock && " (Low in stock)"}</option>
            <option value="M">M {lowInStock && " (Low in stock)"}</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL {lowInStock && " (Low in stock)"}</option>
          </select>
          {lowInStock && <p>Low in stock</p>}
          <LargeButton className="buy-button">ADD TO BAG</LargeButton>
        </StyledDropdownContainer>
        <div className="description-container">
          <h5>Description</h5>
          <p>{fetchedItem?.description}</p>
        </div>
      </div>
    </ItemDetailsContainer>
  );
};

export default ItemDetails;
