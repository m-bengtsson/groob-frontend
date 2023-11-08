import styled from "styled-components";

export const StyledNavbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f8f8f8;
	height: 8vh;
	border-bottom: 1px solid #303030;
	padding: 1em;
	font-size: 14px;

	div {
		gap: 1.5em;
	}
`;

export const Logo = styled.h1`
	font-family: "Akshar";
	font-weight: 500;
	letter-spacing: 2px;
	color: #242424;
`;
