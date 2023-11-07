import {
	StyledCustomTable,
	StyledCustomRow,
	StyledHeadCustomRow,
} from "../styles/Tables.styled";
import ManageIcons from "./ManageIcons";

/**
 *
  - props - data : array, titles: array
  - render table with titles and data
 */

const CustomTable = ({ data, titles, editHandler, deleteHandler }) => {
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
		</div>
	);
};

export default CustomTable;
