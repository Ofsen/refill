import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ErrorBoundary, Navbar } from './components';

const Home = lazy(() => import('./screens/Home'));
const Dashboard = lazy(() => import('./screens/Dashboard'));
const NotFound = lazy(() => import('./screens/404'));

export default function Root(props) {
	return (
		<>
			<Navbar {...props} />
			<ErrorBoundary>
				<Suspense fallback={<div>Loading...</div>}>
					<BrowserRouter>
						<Routes>
							<Route path='/dashboard' element={<Dashboard {...props} />} />
							<Route exact path='/' element={<Home {...props} />} />

							<Route path='*' element={<NotFound {...props} />} />
						</Routes>
					</BrowserRouter>
				</Suspense>
			</ErrorBoundary>
		</>
	);
}
