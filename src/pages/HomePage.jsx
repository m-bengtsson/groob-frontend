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
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setErrorMessage("");
		setFoundWord("");
		setIsLoading(true);

		if (searchParams.size !== 0) {
			const searchItem = async () => {
				setErrorMessage("");
				let url;
				if (currentUser) {
					url = `/items?title=${searchedWord}`;
				} else {
					url = `/items/public?title=${searchedWord}`;
				}
				try {
					const response = await instance.get(url);

					if (response.data.length === 0) {
						setFoundWord("");
						return setErrorMessage(`No matches for "${searchedWord}."`);
					}
					setFoundWord(searchedWord);
					setItems(response.data);
					setIsLoading(false);
				} catch (error) {
					setIsLoading(false);
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
						setIsLoading(false);
						setItems(items);
					}
					const response = await instance.get("/items");
					const items = response.data;
					setItems(items);
					setIsLoading(false);
				} catch (error) {
					if (error.response.status === 404) {
						setIsLoading(false);
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

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<UserHomeContainer>
			{!foundWord && !searchedWord ? (
				<img className="image" src={largeImage} />
			) : (
				<h1>Results for &quot;{foundWord}&quot;</h1>
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
