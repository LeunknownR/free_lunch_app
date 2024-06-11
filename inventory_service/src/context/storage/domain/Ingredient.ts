import IngredientId from "./IngredientId";
import IngredientLabel from "./IngredientLabel";
import IngredientStock from "./IngredientStock";

export default class Ingredient {
	constructor(
		private readonly _id: IngredientId,
		private readonly _label: IngredientLabel,
		readonly stock: IngredientStock
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
