import { useEffect, useState } from "react";
import currentUserStorage from "../shared/infrastructure/storage/currentUserStorage";
import User from "../Login/domain/User";

const useCurrentUserStorage = (): User => {
	const [user, setUser] = useState<User>({
		id: 0,
		username: "",
		name: "",
		surname: ""
	});
	useEffect(() => {
		const currentUser = currentUserStorage.get();
		setUser(currentUser);
	}, []);
	return user;
}

export default useCurrentUserStorage;