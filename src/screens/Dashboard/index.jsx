import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Dashboard() {
	const [cmds, setCmds] = useState([]);
	useEffect(() => {
		setCmds(cmdData);
	}, []);

	return (
		<div className='container'>
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
}

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
