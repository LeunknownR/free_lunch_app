import RecipeError from "./RecipeError";

export default class RecipeIngredientId {
	//#region Attributes
	readonly value: string;
	//#endregion
	constructor(value: string) {
		if (!value)
			throw new RecipeError("Invalid recipe ingredient id");
		this.value = value;
	}
}