import { useContext, useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";
import { StyledManagePage } from "../styles/Container.styled";
import { ItemsContext } from "../context/items";
import instance from "../axiosconfig";
import DeleteModal from "../components/DeleteModal";
import EditItemModal from "../components/EditItemModal";
import { SmallButton } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";

const ManageItemsPage = () => {
  const { items, setItems, errorMessage, setErrorMessage } =
    useContext(ItemsContext);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [showEditModal, setShowEditModal] = useState(false);

  const navigate = useNavigate();

  const titles = [
    "id",
    "Title",
    "Description",
    "In stock",
    "Added By",
    "Updated By",
    "Created",
    "Updated",
  ];

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

  const editItem = (item) => {
    if (item.name) {
      setSelectedItem({ title: item.name, id: item.id, role: item.role });
      setShowEditModal(true);
    } else if (item.title) {
      setSelectedItem({ title: item.title, id: item.id });
      setShowEditModal(true);
    }
  };

  const deleteItem = (item) => {
    if (item.name) {
      setSelectedItem({ title: item.name, id: item.id });
      setShowDeleteModal(true);
    } else if (item.title) {
      setSelectedItem({ title: item.title, id: item.id });
      setShowDeleteModal(true);
    }
  };

  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <StyledManagePage>
      <h2>Manage Items</h2>

      <div>
        <div className={"title-btn-container"}>
          <h5>Manage Items</h5>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <SmallButton onClick={() => navigate("add-item")}>
          + Add item
        </SmallButton>
        <CustomTable
          data={items}
          titles={titles}
          editHandler={editItem}
          deleteHandler={deleteItem}
        />
      </div>
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          selectedItem={selectedItem}
          dataType={"items"}
        />
      )}
      {showEditModal && (
        <EditItemModal
          setShowEditModal={setShowEditModal}
          selectedItem={selectedItem}
        />
      )}
    </StyledManagePage>
  );
};

export default ManageItemsPage;
