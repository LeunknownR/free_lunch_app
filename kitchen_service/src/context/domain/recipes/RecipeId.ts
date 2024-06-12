import RecipeError from "./RecipeError";

export default class RecipeId {
	//#region Attributes
	readonly value: number;
	//#endregion
	constructor(value: number) {
		if (!this.isPositiveNumber(value)) 
			throw new RecipeError("Invalid recipe id");
		this.value = value;
	}
	//#region Methods
	private isPositiveNumber(value: number): boolean {
		return value > 0;
	}
	//#endregion
}