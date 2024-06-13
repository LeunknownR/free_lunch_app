import MySqlContext from "../../../../shared/infrastructure/persistence/MySqlContext";

const { MYSQL_SUPPLY_DATABASE } = process.env;
export default class MySqlContextProvider {
	private static supplyDatabase: MySqlContext;
	static getSupplyDatabase(): MySqlContext {
		if (!MySqlContextProvider.supplyDatabase)
			MySqlContextProvider.supplyDatabase = new MySqlContext(MYSQL_SUPPLY_DATABASE);
		return MySqlContextProvider.supplyDatabase;
	}
}