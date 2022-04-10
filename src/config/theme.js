import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					'&.MuiButton-root': {
						color: 'red',
					},
				},
			},
		},
	},
});

export default theme;
