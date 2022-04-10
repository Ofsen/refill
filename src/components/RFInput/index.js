import React, { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';

import * as pallette from '../pallete';

const useStyles = makeStyles({
	root: {
		// padding: '0.25rem 0',
		margin: '0.75rem 0',
	},
	input: {
		borderRadius: '10px',

		'& input': {
			// padding: '0.25rem 0',
		},

		'& fieldset': {
			border: '2px solid',
			borderColor: pallette.GREEN,
			borderRadius: '10px',
		},
	},
	icon: {
		marginRight: '-0.5rem',
		color: pallette.GREEN,
	},
});

const CMDInput = (props) => {
	const [text, setText] = useState('');

	const {
		label = 'Text',
		name = label.toLowerCase(),
		id = label.toLowerCase(),
		handleChange = null,
		full = false,
		variant = 'outlined',
		value = null,
		type = 'text',
		adornment = null,
		required = false,
	} = props;
	const classes = useStyles(props);

	const handleLocalChange = (e) => {
		setText(e.target.value);
	};

	if (type === 'file') {
		return (
			<FormControl required={required} className={classes.root} variant={variant} fullWidth={full}>
				<OutlinedInput
					className={classes.input}
					id={id}
					required={required}
					value={value}
					name={name}
					type={type}
					onChange={handleChange || handleLocalChange}
					startAdornment={type === 'tel' && <InputAdornment position='start'>+213</InputAdornment>}
					endAdornment={
						type !== 'password' && adornment !== null && <InputAdornment position='end'>{adornment}</InputAdornment>
					}
				/>
			</FormControl>
		);
	}

	return (
		<FormControl required={required} className={classes.root} variant={variant} fullWidth={full}>
			<InputLabel required={required} htmlFor={id}>
				{label}
			</InputLabel>
			<OutlinedInput
				className={classes.input}
				id={id}
				required={required}
				value={value || text}
				label={label}
				name={name}
				type={type}
				onChange={handleChange || handleLocalChange}
				startAdornment={type === 'tel' && <InputAdornment position='start'>+213</InputAdornment>}
				endAdornment={
					type !== 'password' && adornment !== null && <InputAdornment position='end'>{adornment}</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export default CMDInput;
