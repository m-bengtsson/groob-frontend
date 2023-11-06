import { View } from "../styles/Global.styled";
import { HiOutlineWrench, HiOutlineTrash } from "react-icons/hi2";

const ManageIcons = ({ editHandler, deleteHandler }) => {
	return (
		<View>
			<HiOutlineWrench size={14} onClick={editHandler} />
			<HiOutlineTrash size={14} onClick={deleteHandler} />
		</View>
	);
};

export default ManageIcons;
