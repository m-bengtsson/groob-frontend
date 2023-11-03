/* import mockUsers from "../MockData/mockUsers.json"; */
import { UserTable, UserRow, HeadUserRow } from "../styles/Tables.styled";

/**
 *
  - props - users : array, titles: array
  - render table with titles and users data
 */

const UsersTable = ({ users, titles }) => {
	return (
		<div>
			<UserTable>
				<HeadUserRow>
					{titles.map((title) => {
						return (
							<div key={title}>
								<p>{title}</p>
							</div>
						);
					})}
				</HeadUserRow>

				{users.map((user) => (
					<UserRow key={user.id}>
						{Object.keys(user).map((key) => {
							if (key !== "role") {
								if (key === "createdAt" || key === "updatedAt") {
									return (
										<div key={key}>
											<p>{user[key].substring(0, 10)}</p>
										</div>
									);
								}
								return (
									<div key={key}>
										<p>{user[key]}</p>
									</div>
								);
							}
							return null;
						})}
					</UserRow>
				))}
			</UserTable>
		</div>
	);
};

export default UsersTable;
