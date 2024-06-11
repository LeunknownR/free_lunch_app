import mysql from "mysql2/promise";

const {
	MYSQL_DATABASE, 
	MYSQL_USERNAME, MYSQL_PASSWORD,
	MYSQL_HOSTNAME
} = process.env;
export default async function getDatabaseManager() {
	const pool = mysql.createPool({
		user: MYSQL_USERNAME,
		password: MYSQL_PASSWORD,
		database: MYSQL_DATABASE,
		host: MYSQL_HOSTNAME,
		connectionLimit: 10
	});
	return {
		saveMessage: async ({ from, to, content }) => {
			const [information] = await pool.query("INSERT INTO chat(_from, _to, content) VALUES(?, ?, ?)", [from, to, content]);
			return information.affectedRows > 0;
		},
		getMessages: async to => {
			const [rows] = await pool.query("SELECT * FROM chat WHERE _to = ?;", [to]);
			return rows.map(record => ({
				id: record["id"],
				from: record["_from"], 
				to: record["_to"], 
				content: record["content"]
			}));
		}
	};
}