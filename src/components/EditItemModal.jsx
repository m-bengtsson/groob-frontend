import { StyledButton } from "../styles/Button.styled";
import { StyledSmallModal } from "../styles/Modal.styled";

const EditUserModal = ({ setShowEditModal, selectedItem }) => {
	return (
		<StyledSmallModal>
			<p>This function will be coming soon!</p>

			<StyledButton onClick={() => setShowEditModal(false)}>Close</StyledButton>

			<button className="close-button" onClick={() => setShowEditModal(false)}>
				X
			</button>
		</StyledSmallModal>
	);
};

export default EditUserModal;
