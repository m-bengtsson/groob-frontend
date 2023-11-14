import largeImage from "../assets/folks-in-a-field.jpg";
import { UserHomeContainer } from "../styles/UserHome.styled";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../context/items";
import ItemCard from "../components/ItemCard";
import instance from "../axiosconfig";
import { CurrentUserContext } from "../context/currentUser";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
	const [searchParams] = useSearchParams();
	const searchedWord = searchParams.get("search");
	const [foundWord, setFoundWord] = useState("");
	const { items, setItems, errorMessage, setErrorMessage } =
		useContext(ItemsContext);
	const { currentUser } = useContext(CurrentUserContext);

	useEffect(() => {
		setErrorMessage("");
		setFoundWord("");

		if (searchParams.size !== 0) {
			const searchItem = async () => {
				setErrorMessage("");
				let url;
				if (currentUser) {
					url = `http://localhost:8080/api/items?title=${searchedWord}`;
				} else {
					url = `http://localhost:8080/api/items/public?title=${searchedWord}`;
				}
				try {
					const response = await instance.get(url);

					if (response.data.length === 0) {
						setFoundWord("");
						return setErrorMessage(`No matches for "${searchedWord}."`);
					}
					setFoundWord(searchedWord);
					setItems(response.data);
				} catch (error) {
					console.log(error);
					return setErrorMessage(
						"Something went wrong, please try again later"
					);
				}
			};
			searchItem();
		}

		if (searchParams.size === 0 || items.length === 0) {
			const getItems = async () => {
				try {
					if (!currentUser) {
						const response = await instance.get("/items/public");
						const items = response.data;
						setItems(items);
					}
					const response = await instance.get("/items");
					const items = response.data;
					setItems(items);
				} catch (error) {
					if (error.response.status === 404) {
						setErrorMessage("Oh no! We could not fetch the items :'(");
					}
				}
			};
			getItems();
		}
	}, [
		items.length,
		currentUser,
		setErrorMessage,
		searchParams,
		searchedWord,
		setItems,
	]);

	if (!items) {
		return <div>Loading...</div>;
	}

	return (
		<UserHomeContainer>
			{!foundWord && !searchedWord ? (
				<img className="image" src={largeImage} />
			) : (
				<p>Searched for {foundWord}</p>
			)}
			{foundWord && <p>{errorMessage}</p>}
			<div className="cards-wrapper">
				{items?.map((item) => (
					<ItemCard key={item.id} item={item} />
				))}
			</div>
		</UserHomeContainer>
	);
};

export default HomePage;
