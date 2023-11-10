import styled from "styled-components";

export const StyledSmallModal = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	background-color: white;
	width: 450px;
	border: 2px solid var(--medium-grey);
	padding: 2em 0.5em;
	top: 30vh;
	justify-content: space-evenly;
	align-items: center;

	& .close-button {
		position: absolute;
		border: none;
		background-color: white;
		font-size: 20px;
		color: var(--dark-grey);
		right: 5px;
		top: 5px;
	}

	& form {
		display: flex;
		flex-direction: row;

		& button {
			align-self: flex-end;
			height: 40px;
			margin: 0;
		}
	}
`;

export const StyledEditUserModal = styled(StyledSmallModal)`
	background-color: white;
	div {
		display: flex;
		align-items: center;
		flex-direction: column;
		background-color: white;

		label {
			display: flex;
			background-color: white;
			justify-content: space-between;
			margin-right: 15px;
		}
		input {
			margin-left: 10px;
		}

		& div {
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;
		}
	}
`;
