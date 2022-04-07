import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import FormStepper from '../../components/FormStepper';

import './style.css';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	bgcolor: 'background.paper',
	borderRadius: 4,
	boxShadow: 24,
	p: 4,
};

export default function Home() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className='container home'>
			<div className='centerStuff'>
				<h1>
					Recharge de comptes <span className='pay'>pay</span>
					<span className='sera'>sera</span> et/ou <span className='wise'>wise</span> EN toute sécurité!
				</h1>
				<button className='refillButton' onClick={handleOpen}>
					<p>JE Recharge</p>
					<Typography variant='h2' component='h2'>
						<span className='pay'>pay</span>
						<span className='sera'>sera</span> / <span className='wise'>wise</span>
					</Typography>
				</button>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<FormStepper />
				</Box>
			</Modal>
			<div className='footerStuff'>
				Appelez le <a href='tel:+213542151469'>+213 542 15 14 69</a> pour plus d’informations
			</div>
		</div>
	);
}
