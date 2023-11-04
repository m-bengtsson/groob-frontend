import styled from "styled-components";

export const StyledButton = styled.button`
	margin: 0.5em 0;
	padding: 0.5em 1em;
	background-color: black;
	color: white;
	font-weight: 900;
	border: none;
	box-shadow: 0.5px 1px 2px grey;
	cursor: pointer;
`;

export const LargeButton = styled(StyledButton)`
	width: 300px;
	height: 40px;
`;

export const SmallButton = styled(StyledButton)`
	width: 80px;
	height: 20px;
	font-size: 0.7em;
	font-weight: 700;
	padding: 0 0.2em;
`;
