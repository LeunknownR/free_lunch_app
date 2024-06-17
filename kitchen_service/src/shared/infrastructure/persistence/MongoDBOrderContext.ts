import { Connection, Model, Schema } from "mongoose";
import MongoDBContext from "./MongoDBContext";
import { Ingredient, RecipeDocument } from "../../../context/infrastructure/persistence/RecipeCollection";
import { OrderDocument } from "../../../context/infrastructure/persistence/OrderCollection";

const { MONGODB_ORDER_DATABASE } = process.env;
export default class MongoDBOrderContext extends MongoDBContext {
	//#region Attributes
	readonly Recipe: Model<RecipeDocument>;
	readonly Order: Model<OrderDocument>;
	//#endregion
	private constructor(connection: Connection) {
		super(connection);
		this.Recipe = this.getRecipeModel();
		this.Order = this.getOrderModel();
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
			_id: {
				type: Number,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true
			},
			image: {
				type: String,
				required: true
			},
			ingredients: {
				type: [{
					id: {
						type: String,
						required: true
					},
					label: {
						type: String,
						required: true
					},
					quantity: {
						type: Number,
						required: true
					}
				}],
				required: true,
			},
		});
	}
	private getOrderModel(): Model<OrderDocument> {
		return this.createModel<OrderDocument>("orders", {
			_id: {
				type: String,
				required: true
			},
			recipe: {
				type: Number,
				ref: "recipes",
				required: true,
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
