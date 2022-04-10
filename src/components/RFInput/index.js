import React, { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { IoEye, IoEyeOff } from 'react-icons/io5';

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
	const [viewPassword, setViewPassword] = useState(false);

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
				type={type === 'password' && viewPassword ? 'text' : type}
				onChange={handleChange || handleLocalChange}
				startAdornment={type === 'tel' && <InputAdornment position='start'>+213</InputAdornment>}
				endAdornment={
					type === 'password' ? (
						<InputAdornment position='end'>
							<IconButton
								className={classes.icon}
								aria-label='toggle password visibility'
								onClick={() => setViewPassword(!viewPassword)}
								onMouseDown={(e) => e.preventDefault()}
								edge='end'
							>
								{viewPassword ? <IoEyeOff /> : <IoEye />}
							</IconButton>
						</InputAdornment>
					) : (
						adornment !== null && <InputAdornment position='end'>{adornment}</InputAdornment>
					)
				}
			/>
		</FormControl>
	);
};

export default CMDInput;
