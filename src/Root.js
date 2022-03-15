import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ErrorBoundary, Navbar } from './components';

const Home = lazy(() => import('./screens/Home'));
const Dashboard = lazy(() => import('./screens/Dashboard'));
const NotFound = lazy(() => import('./screens/404'));

export default function Root() {
	return (
		<>
			<Navbar />
			<ErrorBoundary>
				<Suspense fallback={<div>Loading...</div>}>
					<BrowserRouter>
						<Routes>
							<Route path='/dashboard' element={<Dashboard />} />
							<Route exact path='/' element={<Home />} />

							<Route path='*' element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</Suspense>
			</ErrorBoundary>
		</>
	);
}
