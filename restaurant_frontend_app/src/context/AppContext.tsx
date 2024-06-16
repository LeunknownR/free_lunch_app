import { createContext } from "react";
import User from "../Login/domain/User";

export type AppContextModel = {
	currentUser: User;
};
const AppContext = createContext<AppContextModel>({
	currentUser: {
		id: 0,
		username: "",
		name: "",
		surname: "",
	}
});

export default AppContext;