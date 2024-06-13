import InventoryError from "./InventoryError";

export default class IngredientSuppliedQuantity {
	//#region Attributes
	private _value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumber(value)) 
			throw new InventoryError("Invalid ingredient supplied quantity");
		this._value = value;
	}
	//#region Methods
	get value(): number {
		return this._value;
	}
	private isPositiveNumber(value: number): boolean {
		return value > 0;
	}
	//#endregion
}