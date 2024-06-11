import MySqlContext from "./MySqlContext";

const { MYSQL_INVENTORY_DATABASE } = process.env;
export default class MySqlContentProvider {
	private static inventoryDatabase: MySqlContext;
	static getInventoryDatabase(): MySqlContext {
		if (!MySqlContentProvider.inventoryDatabase)
			MySqlContentProvider.inventoryDatabase = new MySqlContext(MYSQL_INVENTORY_DATABASE);
		return MySqlContentProvider.inventoryDatabase;
	}
}