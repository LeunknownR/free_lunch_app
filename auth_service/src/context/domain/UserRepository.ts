import User from "./User";
import UserUsername from "./UserUsername";

export default interface UserRepository {
	getUserByUsername(username: UserUsername): Promise<User>;
}