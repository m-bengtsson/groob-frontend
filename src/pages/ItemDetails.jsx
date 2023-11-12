import { useParams } from "react-router-dom";
import { useEffect } from "react";
import instance from "../axiosconfig";

const ItemDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await instance.get(`items/${id}`);
        const item = response.data;
        console.log("ITEM: ", item);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    getItems();
  }, [id]);
  return <div>Item details</div>;
};

export default ItemDetails;
