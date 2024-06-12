import MongoDBOrderContext from "./MongoDBOrderContext";

export default class MongoDBContextProvider {
	private static orderDatabase: MongoDBOrderContext;
	static async getOrderDatabase(): Promise<MongoDBOrderContext> {
		if (!MongoDBContextProvider.orderDatabase)
			MongoDBContextProvider.orderDatabase = await MongoDBOrderContext.connect();
		return MongoDBContextProvider.orderDatabase;
	}
}