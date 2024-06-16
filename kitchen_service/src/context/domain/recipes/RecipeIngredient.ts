import RecipeIngredientId from "./RecipeIngredientId";
import RecipeIngredientLabel from "./RecipeIngredientLabel";
import RecipeIngredientQuantity from "./RecipeIngredientQuantity";

export default class RecipeIngredient {
	constructor(
		private readonly _id: RecipeIngredientId,
		private readonly _label: RecipeIngredientLabel,
		private readonly _quantity: RecipeIngredientQuantity
	) {}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	get label(): string {
		return this._label.value;
	}
	get quantity(): number {
		return this._quantity.value;
	}
	//#endregion
}