import {
	StyledAdminPage,
	StyledPartContainer,
} from "../styles/Container.styled";
import { CustomSmallTable } from "../components/CustomSmallTable";

//**NOTE - this page is not ready for prod, only shows mock data */

const AdminPage = () => {
	const mockUsers = [
		{
			id: "123",
			name: "new user",
			email: "newuser@newuser.com",
			createdBy: "123",
		},
	];
	const mockItems = [
		{
			id: "123",
			title: "New item ",
			price: 2000,
			description: "description.",
			numberOfItems: "15",
			createdBy: "123",
		},
	];
	const userTitles = ["id", "Name", "Email", "Added By"];
	const itemTitles = [
		"id",
		"Title",
		"Price",
		"Description",
		"Items in stock",
		"Added By",
	];
	return (
		<StyledAdminPage>
			<div className="main-container">
				<StyledPartContainer $long>
					<div className="new-container">
						<div>
							<h4>Number of sales:</h4>
							<p>12582</p>
						</div>
						<div>
							<h4>Revenue:</h4>
							<p>2.000.000.000 kr</p>
						</div>
						<div>
							<h4>Pending sales:</h4>
							<p>3478</p>
						</div>
					</div>
				</StyledPartContainer>

				<div>
					<StyledPartContainer>
						<div className="new-container">
							<h4>New Users</h4>
						</div>
						<CustomSmallTable data={mockUsers} titles={userTitles} />
					</StyledPartContainer>

					<StyledPartContainer>
						<div className="new-container">
							<h4>New Items</h4>
						</div>
						<CustomSmallTable data={mockItems} titles={itemTitles} />
					</StyledPartContainer>
				</div>
			</div>
		</StyledAdminPage>
	);
};

export default AdminPage;
