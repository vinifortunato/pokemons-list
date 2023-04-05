import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import DetailsPage from '../../pages/DetailsPage';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/details/:name" element={<DetailsPage />} />
				<Route path="*" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
