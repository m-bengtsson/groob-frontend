import { SmallStyledInput, StyledInputLabel } from "../styles/Input.styled";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
	const navigate = useNavigate();

	const searchItem = async (e) => {
		e.preventDefault();

		let searchedItem = e.target.item.value;
		searchedItem = searchedItem.split(" ").join("_");

		navigate(`/?search=${searchedItem}`);
	};

	return (
		<form onSubmit={searchItem}>
			<StyledInputLabel>
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
