import React from 'react';
import styled from '@emotion/styled';

import * as pallette from '../pallete';

const CMDButton = ({ handleClick = null, label = 'Button', primary = false, full = false }) => {
	return (
		<Button primary={primary} full={full} onClick={handleClick}>
			{label}
		</Button>
	);
};

const Button = styled.button`
	padding: 1rem 1.75rem;
	font-size: 1.125rem;
	font-weight: bold;
	border: 2px solid;
	border-radius: 10px;
	margin: 0.75rem 0;

	color: ${(props) => (props.primary ? 'white' : pallette.GREEN)};
	background-color: ${(props) => (props.primary ? pallette.GREEN : 'white')};
	border-color: ${pallette.GREEN};

	width: ${(props) => props.full && '100%'};

	&:hover {
		color: ${(props) => !props.primary && pallette.GREEN};
		background-color: ${(props) => props.primary && pallette.GREEN};
		border-color: ${(props) => (props.primary ? pallette.GREEN : pallette.GREEN)};
	}
`;

export default CMDButton;
