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
						return (
							<div key={key}>
								<p>{item[key]}</p>
							</div>
						);
					})}
				</StyledCustomRow>
			))}
		</StyledSmallTable>
	);
};
