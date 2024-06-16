import LocalStorageEntry from "./core/LocalStorageEntry";

const userTokenStorage = new LocalStorageEntry<string>("token");
export default userTokenStorage;