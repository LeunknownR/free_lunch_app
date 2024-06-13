import Recipe from "../recipes/Recipe";
import OrderId from "./OrderId";
import OrderIssuedOn from "./OrderIssuedOn";
import OrderStatus from "./OrderStatus";
import RecipeOrderSaved from "./RecipeOrderSaved";

export default class OrderSaved {
	constructor(
		private readonly _id: OrderId,
		readonly recipe: RecipeOrderSaved,
		private readonly _issuedOn: OrderIssuedOn,
		private _status: OrderStatus
	) {}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	get issuedOn(): Date {
		return this._issuedOn.value;
	}
	get status(): string {
		return this._status.value;
	}
	dispatch(): void {
		this._status = OrderStatus.Dispatched();
	}
	//#endregion
}
