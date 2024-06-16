import User from "./User";
import UserLogin from "./UserLogin";

export type LoginResponse = {
	user: User;
	token: string;
};
export default interface AuthRepository {
	login(user: UserLogin): Promise<LoginResponse>;
}