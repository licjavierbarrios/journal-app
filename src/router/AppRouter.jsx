import { AuthRoutes } from '../auth';
import { JournalRoutes } from '../journal';

import { Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
	return (
		<Routes>
			{/* Login y Registro */}
			<Route path="/auth/*" element={<AuthRoutes />} />

			{/* JournalApp */}
			<Route path="/*" element={<JournalRoutes />} />
		</Routes>
	);
};
