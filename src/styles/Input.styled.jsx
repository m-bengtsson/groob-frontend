import styled from "styled-components";

export const StyledInput = styled.input`
	background-color: var(--light-grey);
	border: none;
	width: 300px;
	height: 40px;
	padding: 0 0.5em;
	font-size: 14px;
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
	margin: 0.5em 0;

	.error {
		position: absolute;
		top: 5px;
		color: var(--error-text);
	}
`;

export const SmallStyledInput = styled(StyledInput)`
	height: 30px;
	width: 200px;
	margin-right: 0;
`;
