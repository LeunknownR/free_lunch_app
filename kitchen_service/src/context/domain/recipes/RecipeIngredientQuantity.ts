import RecipeError from "./RecipeError";

export default class RecipeIngredientQuantity {
	//#region Attributes
	readonly value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumberOrZero(value)) 
			throw new RecipeError("Invalid recipe ingredient quantity");
		this.value = value;
	}
	//#region Methods
	private isPositiveNumberOrZero(value: number): boolean {
		return value >= 0;
	}
	//#endregion
}