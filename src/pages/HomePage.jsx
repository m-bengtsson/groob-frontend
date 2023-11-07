import largeImage from "../assets/folks-in-a-field.jpg";
import { UserHomeContainer } from "../styles/UserHome.styled";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../context/items";
import ItemCard from "../components/ItemCard";
import instance from "../axiosconfig";

const HomePage = () => {
	const { items, setItems, errorMessage, setErrorMessage } =
		useContext(ItemsContext);

	useEffect(() => {
		setErrorMessage("");
		if (items.length === 0) {
			const getItems = async () => {
				try {
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
	}, [items, setErrorMessage, setItems]);

	if (!items) {
		return <div>Loading...</div>;
	}
	return (
		<UserHomeContainer>
			<img className="image" src={largeImage} />
			{errorMessage && <p>{errorMessage}</p>}
			<div className="cards-wrapper">
				{items?.map((item) => (
					<ItemCard key={item.id} item={item} />
				))}
			</div>
		</UserHomeContainer>
	);
};

export default HomePage;
