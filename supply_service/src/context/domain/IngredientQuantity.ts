import SupplyHistoryError from "./SupplyHistoryError";

export default class IngredientQuantity {
	//#region Attributes
	private _value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumber(value)) 
			throw new SupplyHistoryError("Invalid ingredient quantity");
		this._value = value;
	}
	//#region Methods
	get value(): number {
		return this._value;
	}
	private isPositiveNumber(value: number): boolean {
		return value >= 0;
	}
	supply(value: number): number {
		const newValue = this._value - value;
		this._value = Math.max(0, newValue);
		if (newValue < 0)
			return Math.abs(newValue);
		return 0;
	}
	//#endregion
}