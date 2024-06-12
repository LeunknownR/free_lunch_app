import MySqlContext from "./MySqlContext";

const { MYSQL_SUPPLY_DATABASE } = process.env;
export default class MySqlContextProvider {
	private static inventoryDatabase: MySqlContext;
	static getInventoryDatabase(): MySqlContext {
		if (!MySqlContextProvider.inventoryDatabase)
			MySqlContextProvider.inventoryDatabase = new MySqlContext(MYSQL_SUPPLY_DATABASE);
		return MySqlContextProvider.inventoryDatabase;
	}
}