import RecipeIngredientId from "./RecipeIngredientId";
import RecipeIngredientQuantity from "./RecipeIngredientQuantity";

export default class RecipeIngredient {
	//#region Attributes
	//#endregion
	constructor(
		private readonly _id: RecipeIngredientId,
		private readonly _quantity: RecipeIngredientQuantity
	) {}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	get quantity(): number {
		return this._quantity.value;
	}
	//#endregion
}