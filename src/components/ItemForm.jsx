import { StyledInput } from "../styles/Input.styled";
import { StyledInputLabel } from "../styles/Input.styled";
import { StyledButton } from "../styles/Button.styled";
import { StyledItemForm } from "../styles/Container.styled";

const ItemForm = ({ handleSubmit, handleInputChange }) => {
  return (
    <StyledItemForm id="item-form" onSubmit={handleSubmit}>
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
        <textarea
          rows={8}
          cols={10}
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
    </StyledItemForm>
  );
};

export default ItemForm;
