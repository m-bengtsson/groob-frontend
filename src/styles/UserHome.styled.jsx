import styled from "styled-components";

export const UserHomeContainer = styled.div`
	display: flex;
	flex-direction: column;

	div {
		width: 100vw;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: 500px;
		object-fit: cover;
		overflow: hidden;
	}
	.cards-wrapper {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.card-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 25%;
		height: 350px;
		border: 1px solid grey;
		padding: 1em 0.5em 0.5em;
	}

	.default-image {
		width: 210px;
		height: 290px;
		object-fit: cover;
		overflow: hidden;
		align-self: center;
	}
	.item-prev-info {
		display: flex;
		width: initial;
		justify-content: space-between;
		padding: 0.5em 1em;
	}
`;
