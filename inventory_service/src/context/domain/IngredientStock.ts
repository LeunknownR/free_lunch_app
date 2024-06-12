import InventoryError from "./InventoryError";

export default class IngredientStock {
	//#region Attributes
	private _value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumberOrZero(value)) 
			throw new InventoryError("Invalid ingredient stock");
		this._value = value;
	}
	//#region Methods
	get value(): number {
		return this._value;
	}
	private isPositiveNumberOrZero(value: number): boolean {
		return value >= 0;
	}
	supply(value: number): void {
		this._value += value;
	}
	take(value: number): number {
		const newValue = this._value - value;
		this._value = Math.max(0, newValue)
		return Math.abs(newValue);
	}
	//#endregion
}