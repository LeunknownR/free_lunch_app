import IngredientId from "./IngredientId";
import RecipeIngredientQuantity from "./RecipeIngredientQuantity";

export default class RecipeIngredient {
	constructor(
		private readonly _ingredientId: IngredientId,
		readonly quantity: RecipeIngredientQuantity
	) {}
	//#region Methods
	get ingredientId(): string {
		return this._ingredientId.value;
	}
	//#endregion
}