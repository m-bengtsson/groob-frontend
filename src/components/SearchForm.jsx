import { useContext, useState } from "react";
import { ItemsContext } from "../context/items";
import axios from "axios";
import { SmallStyledInput, StyledInputLabel } from "../styles/Input.styled";

const SearchForm = () => {
	const { setItems } = useContext(ItemsContext);
	const [errorMessage, setErrorMessage] = useState("");

	const searchItem = async (e) => {
		e.preventDefault();
		setErrorMessage("");

		let searchedItem = e.target.item.value;
		searchedItem = searchedItem.split(" ").join("_");

		try {
			const response = await axios.get(
				`http://localhost:8080/api/items?title=${searchedItem}`
			);

			if (response.data.length === 0) {
				return setErrorMessage(`No matches for "${searchedItem}"`);
			}

			setItems(response.data);
		} catch (error) {
			return setErrorMessage("Something went wrong, please try again later");
		}
	};

	return (
		<form onSubmit={searchItem}>
			<StyledInputLabel>
				<p className="error">{errorMessage}</p>
				<SmallStyledInput
					type="text"
					name="item"
					placeholder="Search item..."
				/>
			</StyledInputLabel>
		</form>
	);
};

export default SearchForm;
