import { StyledAddItemPage } from "../styles/Container.styled";
import instance from "../axiosconfig";
import ItemForm from "../components/ItemForm";

const AddItemPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, itemsInStock } = e.target;

    const body = {
      title: title.value,
      description: description.value,
      numberOfItems: itemsInStock.value,
    };

    try {
      const response = await instance.post("/items", body);
      console.log("response: ", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>Add item</h2>
      <StyledAddItemPage>
        <ItemForm handleSubmit={handleSubmit} />
        <div>Item Overview</div>
      </StyledAddItemPage>
    </>
  );
};

export default AddItemPage;
