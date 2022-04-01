import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import withAuth from '../../libs/withAuth';

import './style.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const Dashboard = () => {
	const [cmds, setCmds] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (!loaded) {
			setCmds(cmdData);
			setLoaded(true);
		}
	}, [loaded]);

	return !loaded ? (
		<p>Loading...</p>
	) : (
		<div className='container dashboard'>
			<h1>COMMANDES</h1>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>#</StyledTableCell>
							<StyledTableCell>Informations</StyledTableCell>
							<StyledTableCell>Photo</StyledTableCell>
							<StyledTableCell>État</StyledTableCell>
							<StyledTableCell>Actions</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{cmds.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component='th' scope='row'>
									{row.id}
								</StyledTableCell>
								<StyledTableCell>
									<p>{row.nom + ' ' + row.prenom}</p>
									<p>{row.tel}</p>
									<p>{row.email}</p>
								</StyledTableCell>
								<StyledTableCell>{row.photo}</StyledTableCell>
								<StyledTableCell>{row.etat}</StyledTableCell>
								<StyledTableCell>buttons</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default withAuth(Dashboard);

const cmdData = [
	{
		id: 0,
		nom: 'doe',
		prenom: 'john',
		tel: '+213 510 10 20 30',
		email: 'johndoe@gmail.com',
		photo: 'photo',
		etat: 'en attente',
	},
	{
		id: 1,
		nom: 'doe',
		prenom: 'john',
		tel: '+213 510 10 20 30',
		email: 'johndoe@gmail.com',
		photo: 'photo',
		etat: 'réglée',
	},
	{
		id: 2,
		nom: 'doe',
		prenom: 'john',
		tel: '+213 510 10 20 30',
		email: 'johndoe@gmail.com',
		photo: 'photo',
		etat: 'annulée',
	},
];
