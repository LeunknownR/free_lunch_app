import { ReactNode } from "react";
import MainSidebar from "./MainSidebar";
import { Container } from "./styles";
import { Main } from "./Main";
import MainHeader from "./MainHeader";

export type DashboardLayoutProps = {
	children: ReactNode;
};
const DashboardLayout = ({
	children
}: DashboardLayoutProps) => {
	return (
		<Container>
			<MainSidebar/>
			<Main>
				<MainHeader/>
				{children}
			</Main>
		</Container>
	);
}

export default DashboardLayout;