import User from "../../../Login/domain/User";
import LocalStorageEntry from "./core/LocalStorageEntry";

const currentUserStorage = new LocalStorageEntry<User>("currentUser");
export default currentUserStorage;