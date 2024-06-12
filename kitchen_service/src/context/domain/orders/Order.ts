import RecipeId from "../recipes/RecipeId";
import OrderIssuedOn from "./OrderIssuedOn";
import OrderStatus from "./OrderStatus";

export default class Order {
	constructor(
		//private readonly _id: OrderId,
		private readonly _recipeId: RecipeId,
		private readonly _issuedOn: OrderIssuedOn,
		readonly status: OrderStatus
	) {}
	//#region Methods
	//get id(): number {
	//	return this._id.value;
	//}
	get recipeId(): number {
		return this._recipeId.value;
	}
	get issuedOn(): Date {
		return this._issuedOn.value;
	}
	//#endregion
}
