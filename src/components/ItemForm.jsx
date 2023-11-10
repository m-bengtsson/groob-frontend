import { StyledInput } from "../styles/Input.styled";
import { StyledInputLabel } from "../styles/Input.styled";
import { StyledButton } from "../styles/Button.styled";

const ItemForm = ({ handleSubmit, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <StyledInputLabel>
        <p>Title</p>
        <StyledInput
          name="title"
          type="text"
          placeholder="Title"
          onChange={handleInputChange}
        />
      </StyledInputLabel>
      <StyledInputLabel>
        <p>Description</p>
        <StyledInput
          name="description"
          type="text"
          placeholder="description"
          onChange={handleInputChange}
        />
      </StyledInputLabel>
      <StyledInputLabel>
        <p>Items in stock</p>
        <StyledInput
          name="itemsInStock"
          type="number"
          placeholder="Number of items"
          onChange={handleInputChange}
        />
      </StyledInputLabel>
      <StyledButton>Upload Image</StyledButton>
      <button type="submit">Add item</button>
    </form>
  );
};

export default ItemForm;
