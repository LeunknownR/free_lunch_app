import IngredientId from "./IngredientId";
import IngredientImage from "./IngredientImage";
import IngredientLabel from "./IngredientLabel";
import IngredientStock from "./IngredientStock";

export default class Ingredient {
	constructor(
		private readonly _id: IngredientId,
		private readonly _label: IngredientLabel,
		private readonly _image: IngredientImage,
		readonly stock: IngredientStock
	) {}
	//#region Methods
	get id(): string {
		return this._id.value;
	}
	get label(): string {
		return this._label.value;
	}
	get image(): string {
		return this._image.value;
	}
	//#endregion
}
