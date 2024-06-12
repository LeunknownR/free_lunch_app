import { Connection, Model } from "mongoose";
import { RecipeDocument } from "../../../context/orders/infrastructure/persistence/RecipeCollection";
import { OrderDocument } from "../../../context/orders/infrastructure/persistence/OrderCollection";
import MongoDBContext from "./MongoDBContext";

const { MONGODB_ORDER_DATABASE } = process.env;
export default class MongoDBOrderContext extends MongoDBContext {
	//#region Attributes
	readonly Recipes: Model<RecipeDocument>;
	readonly Orders: Model<OrderDocument>;
	//#endregion
	private constructor(connection: Connection) {
		super(connection);
		this.Recipes = this.getRecipeModel();
		this.Orders = this.getOrderModel();
	}
	//#endregion
	//#region Methods
	static async connect(): Promise<MongoDBOrderContext> {
		const connection = await MongoDBContext.getNewConnection(
			MONGODB_ORDER_DATABASE
		);
		return new MongoDBOrderContext(connection);
	}
	private getRecipeModel(): Model<RecipeDocument> {
		return this.createModel<RecipeDocument>("recipes", {
			name: {
				type: String,
				required: true,
			},
			ingredients: {
				type: [String],
				required: true,
			},
		});
	}
	private getOrderModel(): Model<OrderDocument> {
		return this.createModel<OrderDocument>("orders", {
			recipeId: {
				type: Number,
				required: true
			},
			issuedOn: {
				type: Date,
				required: true
			},
			status: {
				type: String,
				required: true
			},
		});
	}
	//#endregion
}
