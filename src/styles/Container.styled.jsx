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
