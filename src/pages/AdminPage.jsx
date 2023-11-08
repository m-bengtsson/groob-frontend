import {
	StyledAdminPage,
	StyledManagePage,
	StyledPartContainer,
} from "../styles/Container.styled";
import mockUsers from "../MockData/mockUsers.json";
import mockItems from "../MockData/mockItems.json";
import { CustomSmallTable } from "../components/CustomSmallTable";

const AdminPage = () => {
	const userTitles = ["id", "Name", "Email", "Added By"];
	const itemTitles = [
		"id",
		"Title",
		"Description",
		"Items in stock",
		"Added By",
	];
	return (
		<StyledAdminPage long>
			<div className="main-container">
				<StyledPartContainer long>
					<div className="new-container">
						<div>
							<h4>Number of sales:</h4>
							<p>This function will be available soon</p>
						</div>
						<div>
							<h4>Revenue:</h4>
							<p>This function will be available soon</p>
						</div>
						<div>
							<h4>Pending sales:</h4>
							<p>This function will be available soon</p>
						</div>
					</div>
				</StyledPartContainer>

				<div>
					<StyledPartContainer>
						<div className="new-container">
							<h4>New Users</h4>
							<p>This function will be available soon</p>
						</div>
						<CustomSmallTable data={mockUsers} titles={userTitles} />
					</StyledPartContainer>

					<StyledPartContainer>
						<div className="new-container">
							<h4>New Items</h4>
							<p>This function will be available soon</p>
						</div>
						<CustomSmallTable data={mockItems} titles={itemTitles} />
					</StyledPartContainer>
				</div>
			</div>
		</StyledAdminPage>
	);
};

export default AdminPage;
