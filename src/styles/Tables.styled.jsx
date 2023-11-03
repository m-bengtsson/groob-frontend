import styled from "styled-components";

export const UserTable = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid var(--light-grey);
	justify-content: space-evenly;
	margin: 0 0.5em;
	width: 90vw;
	margin: 0 0 2em 0;

	p {
		font-size: 10px;
	}
`;

export const UserRow = styled.div`
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

export const HeadUserRow = styled(UserRow)`
	background: var(--light-grey);

	p {
		font-weight: bold;
	}
`;
