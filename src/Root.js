import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';

import { ErrorBoundary, Navbar } from './components';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

const Home = lazy(() => import('./screens/Home'));
const NotFound = lazy(() => import('./screens/404'));

export default function Root() {
	return (
		<StyledEngineProvider injectFirst>
			<ErrorBoundary>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<BrowserRouter>
						<Navbar />
						<Suspense fallback={<div>Loading...</div>}>
							<Routes>
								<Route exact path='/' element={<Home />} />

								<Route path='*' element={<NotFound />} />
							</Routes>
						</Suspense>
						<ToastContainer
							position='bottom-right'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
						/>
					</BrowserRouter>
				</ThemeProvider>
			</ErrorBoundary>
		</StyledEngineProvider>
	);
}
