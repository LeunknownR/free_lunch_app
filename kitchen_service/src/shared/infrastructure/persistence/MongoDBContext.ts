import mongoose, { Connection, Model, Schema } from "mongoose";

const { 
	MONGODB_HOSTNAME, 
	MONGODB_USERNAME, MONGODB_PASSWORD, 
	MONGODB_PORT 
} = process.env;
export default class MongoDBContext {
	protected constructor(protected readonly connection: Connection) {}
	//#region Methods
	protected static async getNewConnection(databaseName: string): Promise<Connection> {
		const context = await mongoose
			.createConnection(this.getConnectionString(databaseName))
			.asPromise();
		return context;
	}
	private static getConnectionString(databaseName: string): string {
		return `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOSTNAME}:${MONGODB_PORT}/${databaseName}`;
	}
	protected createModel<T>(collectionName: string, structure: Record<keyof T, any>): Model<T> {
		return this.connection.model<T>(
			collectionName,
			new Schema<T, Model<T>>(structure)
		);
	}
	//#endregion
}
