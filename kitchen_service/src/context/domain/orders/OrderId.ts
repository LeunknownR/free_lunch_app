import OrderError from "./OrderError";

export default class OrderId {
	//#region Attributes
	readonly value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumber(value)) 
			throw new OrderError("Invalid order id");
		this.value = value;
	}
	//#region Methods
	private isPositiveNumber(value: number): boolean {
		return value > 0;
	}
	//#endregion
}