import RecipeError from "./RecipeError";
import RecipeIngredient from "./RecipeIngredient";

export default class RecipeIngredients {
	constructor(
		readonly value: RecipeIngredient[]
	) {
		if (value.length === 0)
			throw new RecipeError("Invalid recipe ingredients");
	}
}