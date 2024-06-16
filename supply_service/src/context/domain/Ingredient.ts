import IngredientId from "./IngredientId";
import IngredientQuantity from "./IngredientQuantity";

export default class Ingredient {
	constructor(
		private readonly _id: IngredientId,
		readonly quantity: IngredientQuantity
	) {}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	//#endregion
}