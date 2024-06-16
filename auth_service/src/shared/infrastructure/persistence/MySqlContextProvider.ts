import MySqlContext from "./MySqlContext";

const { MYSQL_USER_DATABASE } = process.env;
export default class MySqlContextProvider {
	private static inventoryDatabase: MySqlContext;
	static getUserDatabase(): MySqlContext {
		if (!MySqlContextProvider.inventoryDatabase)
			MySqlContextProvider.inventoryDatabase = new MySqlContext(MYSQL_USER_DATABASE);
		return MySqlContextProvider.inventoryDatabase;
	}
}