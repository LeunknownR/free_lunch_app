import RecipeId from "./RecipeId";
import RecipeIngredient from "./RecipeIngredient";
import RecipeIngredients from "./RecipeIngredients";
import RecipeName from "./RecipeName";

export default class Recipe {
	constructor(
		private readonly _id: RecipeId,
		private readonly _name: RecipeName,
		private readonly _ingredients: RecipeIngredients
	) {}
	//#region Methods
	get id(): number {
		return this._id.value;
	}
	get name(): string {
		return this._name.value;
	}
	get ingredients(): RecipeIngredient[] {
		return this._ingredients.value;
	}
	//#endregion
}
