import defaultImage from "../assets/default-image.jpg";
const HomePage = ({ item }) => {
  // todo: default bild

  return (
    <div className="card-container">
      <img className="default-image" src={defaultImage} />
      <div className="item-prev-info">
        <p>{item.title}</p>
        <p>1700kr</p>
      </div>
    </div>
  );
};

export default HomePage;
