import RecipeId from "../recipes/RecipeId";
import OrderId from "./OrderId";
import OrderIssuedOn from "./OrderIssuedOn";
import OrderStatus from "./OrderStatus";

export default class Order {
	constructor(
		private readonly _id: OrderId,
		private readonly _recipeId: RecipeId,
		private readonly _issuedOn: OrderIssuedOn,
		private _status: OrderStatus
	) {}
	static Create(recipeId: RecipeId): Order {
		return new Order(
			OrderId.Create(),
			recipeId,
			OrderIssuedOn.Issue(),
			OrderStatus.InProgress()
		);
	}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	get recipeId(): number {
		return this._recipeId.value;
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
