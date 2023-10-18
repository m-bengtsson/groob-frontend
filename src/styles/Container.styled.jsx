import styled from "styled-components";

export const AuthPhotoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 60vh;

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
	min-width: 220px;
	align-items: center;
	justify-content: space-around;

	p {
		font-size: 12px;
		margin: 0.5em 0;
	}
`;
