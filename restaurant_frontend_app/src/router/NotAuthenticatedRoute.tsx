import { ReactNode } from "react";
import userTokenStorage from "../shared/infrastructure/storage/userTokenStorage";
import AbsolutePaths from "./AbsolutePaths";
import ConditionalRoute from "./ConditionalRoute";

type NotAuthenticatedRouteProps = {
	children: ReactNode;
};
const NotAuthenticatedRoute = ({ children }: NotAuthenticatedRouteProps) => {
	return (
		<ConditionalRoute
			canProceed={() => !userTokenStorage.exists()}
			to={AbsolutePaths.Orders}
		>
			{children}
		</ConditionalRoute>
	);
};

export default NotAuthenticatedRoute;
