import mysql, { FieldPacket, Pool } from "mysql2/promise";

const {
	MYSQL_HOSTNAME,
	MYSQL_USERNAME, MYSQL_PASSWORD,
	MYSQL_POOL_CONNECTIONS
} = process.env;
export default class MySqlContext {
	//#region Attributes
	private readonly pool: Pool;
	//#endregion
	constructor(databaseName: string) {
		this.pool = mysql.createPool({
			host: MYSQL_HOSTNAME,
			user: MYSQL_USERNAME,
			password: MYSQL_PASSWORD,
			database: databaseName,
			multipleStatements: true,
			supportBigNumbers: true,
			decimalNumbers: true,
			connectionLimit: parseInt(MYSQL_POOL_CONNECTIONS)
		});
	}
	//#region Methods
	async query(sql: string, params: any[] = []): Promise<[any[], FieldPacket[]]> {
		return await this.pool.query(sql, params);
	}
	//#endregion
}
