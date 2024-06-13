import OrderError from "./OrderError";

export default class OrderStatus {
	//#region Constants
	static readonly IN_PROGRESS: string = "IN_PROGRESS";
	static readonly DISPATCHED: string = "DISPATCHED";
	//#endregion
	//#region Attributes
	private _value: string;
	//#endregion
	constructor(value: string) {
		if (!value) 
			throw new OrderError("Invalid order state");
		this._value = value;
	}
	static InProgress(): OrderStatus {
		return new OrderStatus(OrderStatus.IN_PROGRESS);
	}
	static Dispatched(): OrderStatus {
		return new OrderStatus(OrderStatus.DISPATCHED);
	}
	//#region Methods
	get value(): string {
		return this._value;
	}
	//#endregion
}