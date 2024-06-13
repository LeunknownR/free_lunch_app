import IngredientId from "./IngredientId";
import RecipeIngredientQuantity from "./RecipeIngredientQuantity";

export default class RecipeIngredient {
	constructor(
		private readonly _id: IngredientId,
		readonly quantity: RecipeIngredientQuantity
	) {}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	//#endregion
}