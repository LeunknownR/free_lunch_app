import { createContext } from "react";
import User from "../Login/domain/User";
import Recipe from "../Food/domain/Recipe";
import { PreloaderHook } from "../components/Preloader/hooks/usePreloader";
import Order from "../Orders/domain/Order";

export type AppContextModel = {
	preloader: PreloaderHook;
	currentUser: User;
	recipes: Recipe[];
	orders: Order[];
};
const AppContext = createContext<AppContextModel>({
	currentUser: {
		id: 0,
		username: "",
		name: "",
		surname: "",
	},
	recipes: [],
	orders: [],
	preloader: {
		show: () => {},
		hide: () => {},
		value: false
	}
});

export default AppContext;