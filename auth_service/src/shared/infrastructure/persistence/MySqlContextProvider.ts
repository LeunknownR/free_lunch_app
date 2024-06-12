import MySqlContext from "./MySqlContext";

const { MYSQL_INVENTORY_DATABASE } = process.env;
export default class MySqlContextProvider {
	private static inventoryDatabase: MySqlContext;
	static getInventoryDatabase(): MySqlContext {
		if (!MySqlContextProvider.inventoryDatabase)
			MySqlContextProvider.inventoryDatabase = new MySqlContext(MYSQL_INVENTORY_DATABASE);
		return MySqlContextProvider.inventoryDatabase;
	}
}