import React from 'react';
import { Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import * as pallette from '../pallete';

const useStyles = makeStyles({
	root: {
		borderColor: pallette.GREEN,
		borderWidth: '1px',
		width: '100%',
		margin: '1.3125rem 0',

		'&::before, &::after': {
			borderColor: pallette.GREEN,
			borderWidth: '2px',
		},
	},
});

const CMDDivider = (props) => {
	const classes = useStyles(props);
	const { text } = props;

	return <Divider className={classes.root}>{text}</Divider>;
};

export default CMDDivider;
