import styled from "styled-components";

export const StyledInput = styled.input`
	background-color: #f8f4f4;
	border: none;
	width: 200px;
	height: 40px;
	padding: 0 0.5em;
	font-size: 20px;
	font-weight: 700;
	box-shadow: inset 0 1px 2px #949494;

	&:active {
		border: none;
	}

	&::placeholder {
		color: #949494;
	}
`;

export const StyledInputLabel = styled.label`
	font-weight: 700;
	display: flex;
	flex-direction: column;
`;
