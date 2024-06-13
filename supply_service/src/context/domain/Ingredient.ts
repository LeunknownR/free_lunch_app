import IngredientId from "./IngredientId";
import IngredientLabel from "./IngredientLabel";
import IngredientQuantity from "./IngredientQuantity";

export default class Ingredient {
	constructor(
		private readonly _id: IngredientId,
		private readonly _label: IngredientLabel,
		readonly quantity: IngredientQuantity
	) {}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	get label(): string {
		return this._label.value;
	}
	//#endregion
}