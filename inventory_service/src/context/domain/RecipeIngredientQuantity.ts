import InventoryError from "./InventoryError";

export default class RecipeIngredientQuantity {
	//#region Attributes
	private _value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumber(value)) 
			throw new InventoryError("Invalid recipe ingredient quantity");
		this._value = value;
	}
	//#region Methods
	get value(): number {
		return this._value;
	}
	private isPositiveNumber(value: number): boolean {
		return value > 0;
	}
	distribuite(value: number): void {
		const newValue = this._value - value;
		this._value = Math.max(0, newValue)
	}
	//#endregion
}