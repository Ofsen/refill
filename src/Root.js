import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ErrorBoundary, Navbar } from './components';

const Home = lazy(() => import('./screens/Home'));
const NotFound = lazy(() => import('./screens/404'));

export default function Root() {
	return (
		<>
			<ErrorBoundary>
				<BrowserRouter>
					<Navbar />
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route exact path='/' element={<Home />} />

							<Route path='*' element={<NotFound />} />
						</Routes>
					</Suspense>
				</BrowserRouter>
			</ErrorBoundary>
		</>
	);
}
