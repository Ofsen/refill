import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import { RFButton, RFInput } from '../';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import * as pallete from '../pallete';

const steps = ['Montant', 'Informations', 'Pièce(s) jointe(s)', 'Finalisation'];

export default function FormStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [skipped, setSkipped] = React.useState(new Set());

	const [form, setForm] = React.useState({});
	const handleForm = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const isStepOptional = (step) => {
		return step === 2;
	};

	const isStepSkipped = (step) => {
		return skipped.has(step);
	};

	const handleNext = () => {
		let newSkipped = skipped;
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values());
			newSkipped.delete(activeStep);
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped(newSkipped);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this,
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
		setSkipped((prevSkipped) => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
		setForm({});
	};

	return (
		<Box sx={{ width: '100%' }}>
			{activeStep === steps.length ? (
				<Box sx={{ textAlign: 'center' }}>
					<Typography sx={{ mt: 4, fontWeight: '700', color: pallete.GREEN }} component='p'>
						<CheckCircleOutlineRoundedIcon style={{ fontSize: '8rem' }} />
					</Typography>
					<Typography sx={{ fontWeight: '700', color: pallete.GREEN, mb: 1, mt: 3 }} variant='h3' component='h1'>
						Commande finalisée!
					</Typography>
					<Typography variant='h5' component='span'>
						Votre commande sera traité dans les meilleurs délais.
					</Typography>
					<Box sx={{ mt: 4, display: 'flex', flexDirection: 'row', pt: 2 }}>
						<Box sx={{ flex: '1 1 auto' }} />
						<Button onClick={handleReset}>Passer une autre commande</Button>
					</Box>
				</Box>
			) : (
				<>
					<Typography sx={{ textAlign: 'center', fontWeight: '900', mb: '2rem' }} variant='h3'>
						JE COMMANDE
					</Typography>
					<Stepper activeStep={activeStep}>
						{steps.map((label, index) => {
							const stepProps = {};
							const labelProps = {};

							if (isStepOptional(index)) {
								labelProps.optional = <Typography variant='caption'>Optionnèlle</Typography>;
							}

							if (isStepSkipped(index)) {
								stepProps.completed = false;
							}

							return (
								<Step key={label} {...stepProps}>
									<StepLabel {...labelProps}>{label}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
					{activeStep !== steps.length && (
						<React.Fragment>
							{activeStep === 0 && (
								<Grid sx={{ mt: 2, mb: 1 }}>
									<RFInput
										handleChange={handleForm}
										value={form.montant}
										label='Montant'
										full
										adornment='€'
									/>
								</Grid>
							)}
							<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
									Retour
								</Button>

								<Box sx={{ flex: '1 1 auto' }} />
								{isStepOptional(activeStep) && (
									<Button color='inherit' variant='outlined' onClick={handleSkip} sx={{ mr: 1 }}>
										Passer
									</Button>
								)}
								<Button variant='contained' onClick={handleNext}>
									{activeStep === steps.length - 1 ? 'Commander' : 'Suivant'}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</>
			)}
		</Box>
	);
}
