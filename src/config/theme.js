import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	direction: 'ltr',
});

theme.components = {
	MuiButton: {
		styleOverrides: {
			root: {
				borderRadius: 10,
				padding: '0.65rem 1.5rem',
				fontWeight: 700,
				boxShadow: 'none',
			},
			contained: {
				background: '#61a569',

				'&:hover': {
					background: '#78BD80',
					boxShadow: 'none',
				},
			},
			text: {
				color: '#61a569',
			},
			outlined: {
				color: '#61a569',
			},
		},
	},
};

export default theme;
