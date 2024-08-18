import MySqlContext from "./MySqlContext";

const { MYSQL_USER_DATABASE } = process.env;
export default class MySqlContextProvider {
	private static userDatabase: MySqlContext;
	static getUserDatabase(): MySqlContext {
		if (!MySqlContextProvider.userDatabase)
			MySqlContextProvider.userDatabase = new MySqlContext(MYSQL_USER_DATABASE);
		return MySqlContextProvider.userDatabase;
	}
}