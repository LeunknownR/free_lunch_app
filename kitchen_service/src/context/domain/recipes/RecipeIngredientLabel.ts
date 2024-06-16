import RecipeError from "./RecipeError";

export default class RecipeIngredientLabel {
	readonly value: string;
	constructor(value: string) {
		if (!value) 
			throw new RecipeError("Invalid recipe ingredient label");
		this.value = value;
	}
}