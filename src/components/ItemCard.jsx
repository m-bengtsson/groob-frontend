import { Link } from "react-router-dom";
import defaultImage from "../assets/default-image.jpg";

const HomePage = ({ item }) => {
	return (
		<div className="card-container">
			<Link to={`item/${item.id}`}>
				<div className="image-div">
					<img className="default-image" src={defaultImage} />
				</div>
				<div className="item-prev-info">
					<p>{item.title}</p>
					{item.price && <p>{item.price} sek</p>}
				</div>
			</Link>
		</div>
	);
};

export default HomePage;
