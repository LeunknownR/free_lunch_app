import SupplyHistoryError from "./SupplyHistoryError";

export default class IngredientQuantity {
	//#region Attributes
	readonly value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumberOrZero(value)) 
			throw new SupplyHistoryError("Invalid supply history record quantity");
		this.value = value;
	}
	//#region Methods
	private isPositiveNumberOrZero(value: number): boolean {
		return value >= 0;
	}
	//#endregion
}