import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundView from "./NotFoundView";
import LoginView from "./Login/LoginView";
import AbsolutePaths from "./router/AbsolutePaths";
import NotAuthenticatedRoute from "./router/NotAuthenticatedRoute";
import AppContext from "./context/AppContext";
import AuthenticatedRoute from "./router/AuthenticatedRoute";
import OrderView from "./Orders/OrderView";
import InventoryView from "./Inventory/InventoryView";
import useCurrentUserStorage from "./hooks/useCurrentUserStorage";
import User from "./Login/domain/User";

const DashboardRoutes = () => {
	const currentUser: User = useCurrentUserStorage();
	return (
		<AppContext.Provider
			value={{
				currentUser,
			}}
		>
			<Routes>
				<Route
					path={AbsolutePaths.Login}
					element={
						<NotAuthenticatedRoute>
							<LoginView />
						</NotAuthenticatedRoute>
					}
				/>
				<Route
					path={AbsolutePaths.Orders}
					element={
						<AuthenticatedRoute>
							<OrderView />
						</AuthenticatedRoute>
					}
				/>
				<Route
					path={AbsolutePaths.Inventory}
					element={
						<AuthenticatedRoute>
							<InventoryView />
						</AuthenticatedRoute>
					}
				/>
				<Route
					path="*"
					element={<NotFoundView />}
				/>
			</Routes>
		</AppContext.Provider>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Navigate to={AbsolutePaths.Login} />}
				/>
				<Route
					path={AbsolutePaths.Login}
					element={
						<NotAuthenticatedRoute>
							<LoginView />
						</NotAuthenticatedRoute>
					}
				/>
				<Route
					path="/*"
					element={<DashboardRoutes />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
