import AbsolutePaths from "../../router/AbsolutePaths";
import { MainSidebarLinkProps } from "./MainSidebarLink";

export const MAIN_SIDEBAR_LINKS: MainSidebarLinkProps[] = [
	{
		to: AbsolutePaths.Orders,
		text: "Pedidos"
	},
	{
		to: AbsolutePaths.Inventory,
		text: "Inventario"
	}
];