import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type ConditionalRouteProps = {
	children: ReactNode;
	canProceed: () => boolean;
	to: string;
};
const ConditionalRoute = ({
	children,
	canProceed,
	to,
}: ConditionalRouteProps) => {
	const [proceed, setProceed] = useState<boolean>(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (canProceed()) setProceed(true);
		else navigate(to);
	}, []);
	if (!proceed) return null;
	return children;
};

export default ConditionalRoute;
