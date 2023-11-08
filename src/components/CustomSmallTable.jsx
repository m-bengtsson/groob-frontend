import {
	StyledCustomRow,
	StyledHeadCustomRow,
	StyledSmallTable,
} from "../styles/Tables.styled";

export const CustomSmallTable = ({ data, titles }) => {
	return (
		<StyledSmallTable>
			<StyledHeadCustomRow>
				{titles.map((title) => {
					return (
						<div key={title}>
							<p>{title}</p>
						</div>
					);
				})}
			</StyledHeadCustomRow>
			{data.map((item) => (
				<StyledCustomRow key={item.id}>
					{Object.keys(item).map((key) => {
						if (
							key !== "role" &&
							key !== "createdAt" &&
							key !== "updatedAt" &&
							key !== "updatedBy"
						) {
							console.log("KEY", key);
							return (
								<div key={key}>
									<p>{item[key]}</p>
								</div>
							);
						}
						return null;
					})}
				</StyledCustomRow>
			))}
		</StyledSmallTable>
	);
};
