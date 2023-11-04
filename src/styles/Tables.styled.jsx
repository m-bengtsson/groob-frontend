import styled from "styled-components";

export const StyledCustomTable = styled.div`
	border: 1px solid var(--light-grey);
	justify-content: space-evenly;
	margin: 0 0.5em;
	width: 90vw;
	height: 100%;
	max-height: 30vh;
	overflow-y: auto;
	margin: 0 0 2em 0;

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
	}

	p {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

export const StyledHeadCustomRow = styled(StyledCustomRow)`
	background: var(--light-grey);

	p {
		font-weight: bold;
	}
`;
