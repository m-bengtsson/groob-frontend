import styled from "styled-components";

export const StyledCustomTable = styled.div`
	border: 1px solid var(--light-grey);
	justify-content: space-evenly;
	width: 90vw;
	max-height: 30vh;
	overflow-y: auto;

	p {
		font-size: 12px;
	}
`;

export const StyledCustomRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	&:last-child {
		div {
			border-bottom: none;
		}
	}

	div {
		border-bottom: 1px solid var(--light-grey);
		flex: 1 1 0;
		width: 0;
		padding: 0.5em;
		background-color: #ffffff;
	}

	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background-color: #ffffff;
	}
`;

export const StyledHeadCustomRow = styled(StyledCustomRow)`
	background: var(--light-grey);

	p {
		font-weight: bold;
		background-color: var(--superlight-grey);
	}
	div {
		background-color: var(--superlight-grey);
	}
`;

export const StyledSmallTable = styled(StyledCustomTable)`
	width: 50vw;
`;
