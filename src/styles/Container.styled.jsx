import styled from "styled-components";

export const AuthPhotoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 92vh;
	gap: 0.5em;

	img {
		width: 50%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
	}
`;

export const StyledLoginSignupWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		font-size: 12px;
		margin: 0.5em 0;
	}

	h1 {
		margin-bottom: 30px;
	}
`;

export const StyledManagePage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		margin: 20px;
	}

	h5 {
		margin: 10px;
	}

	.title-btn-container {
		display: flex;
		justify-content: space-between;
	}
`;

export const StyledSmallModal = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	background-color: white;
	width: 450px;
	height: 150px;
	border: 2px solid var(--medium-grey);
	padding: 0.5em;
	top: 30vh;
	justify-content: center;
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
