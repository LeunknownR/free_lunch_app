import { ReactNode } from "react";
import AbsolutePaths from "./AbsolutePaths";
import userTokenStorage from "../shared/infrastructure/storage/userTokenStorage";
import ConditionalRoute from "./ConditionalRoute";

type AuthenticatedRouteProps = {
	children: ReactNode;
};
const AuthenticatedRoute = ({ children }: AuthenticatedRouteProps) => {
	return (
		<ConditionalRoute
			canProceed={() => userTokenStorage.exists()}
			to={AbsolutePaths.Login}
		>
			{children}
		</ConditionalRoute>
	);
};

export default AuthenticatedRoute;
