import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();

  return <div>Item details</div>;
};

export default ItemDetails;
