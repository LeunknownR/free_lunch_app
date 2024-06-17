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
import FoodView from "./Food/FoodView";
import Recipe from "./Food/domain/Recipe";
import useRecipes from "./Food/hooks/useRecipes";
import usePreloader from "./components/Preloader/hooks/usePreloader";
import Preloader from "./components/Preloader";
import Order from "./Orders/domain/Order";
import useOrders from "./Orders/hooks/useOrders";

const DashboardRoutes = () => {
	const preloader = usePreloader();
	const currentUser: User = useCurrentUserStorage();
	const recipes: Recipe[] = useRecipes(preloader);
	const orders: Order[] = useOrders();
	return (
		<AppContext.Provider
			value={{
				currentUser,
				recipes,
				orders,
				preloader
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
					path={AbsolutePaths.Food}
					element={
						<AuthenticatedRoute>
							<FoodView />
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
			<Preloader preloader={preloader}/>
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
