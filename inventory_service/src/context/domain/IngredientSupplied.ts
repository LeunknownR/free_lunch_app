import IngredientId from "./IngredientId";
import IngredientSuppliedQuantity from "./IngredientSuppliedQuantity";

export default class IngredientSupplied {
	constructor(
		private readonly _ingredientId: IngredientId,
		private readonly _quantity: IngredientSuppliedQuantity
	) {}
	//#region Methods
	get ingredientId(): string {
		return this._ingredientId.value;
	}
	get quantity(): number {
		return this._quantity.value;
	}
	//#endregion
}