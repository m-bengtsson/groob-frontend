import { View } from "../styles/Global.styled";
import { HiOutlineWrench, HiOutlineTrash } from "react-icons/hi2";

const ManageIcons = () => {
	const editHandler = () => {
		console.log("EDIT!");
	};

	const deleteHandler = () => {
		console.log("DELETE!");
	};
	return (
		<View>
			<HiOutlineWrench size={14} onClick={editHandler} />
			<HiOutlineTrash size={14} onClick={deleteHandler} />
		</View>
	);
};

export default ManageIcons;
