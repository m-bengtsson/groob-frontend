/* import mockUsers from "../MockData/mockUsers.json"; */
import { useState } from "react";
import {
	StyledCustomTable,
	StyledCustomRow,
	StyledHeadCustomRow,
} from "../styles/Tables.styled";
import ManageIcons from "./ManageIcons";
import DeleteModal from "./DeleteModal";
import EditUserModal from "./EditUserModal";

/**
 *
  - props - data : array, titles: array
  - render table with titles and data
 */

const CustomTable = ({ data, titles }) => {
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState();
	const [showEditModal, setShowEditModal] = useState(false);

	const editHandler = (item) => {
		if (item.name) {
			setSelectedItem({ title: item.name, id: item.id, role: item.role });
			setShowEditModal(true);
		} else if (item.title) {
			setSelectedItem({ title: item.title, id: item.id });
			setShowEditModal(true);
		}
	};

	const deleteHandler = (item) => {
		if (item.name) {
			setSelectedItem({ title: item.name, id: item.id });
			setShowDeleteModal(true);
		} else if (item.title) {
			setSelectedItem({ title: item.title, id: item.id });
			setShowDeleteModal(true);
		}
	};

	return (
		<div>
			<StyledCustomTable>
				<StyledHeadCustomRow>
					{titles.map((title) => {
						return (
							<div key={title}>
								<p>{title}</p>
							</div>
						);
					})}
					<div>
						<p></p>
					</div>
				</StyledHeadCustomRow>

				{data.map((item) => (
					<StyledCustomRow key={item.id}>
						{Object.keys(item).map((key) => {
							if (key !== "role") {
								if (key === "createdAt" || key === "updatedAt") {
									return (
										<div key={key}>
											<p>{item[key].substring(0, 10)}</p>
										</div>
									);
								}
								return (
									<div key={key}>
										<p>{item[key]}</p>
									</div>
								);
							}
							return null;
						})}
						<ManageIcons
							editHandler={() => editHandler(item)}
							deleteHandler={() => deleteHandler(item)}
						/>
					</StyledCustomRow>
				))}
			</StyledCustomTable>
			{showDeleteModal && (
				<DeleteModal
					setShowDeleteModal={setShowDeleteModal}
					selectedItem={selectedItem}
				/>
			)}
			{showEditModal && (
				<EditUserModal
					setShowEditModal={setShowEditModal}
					selectedItem={selectedItem}
				/>
			)}
		</div>
	);
};

export default CustomTable;
