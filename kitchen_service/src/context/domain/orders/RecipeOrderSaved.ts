import RecipeId from "../recipes/RecipeId";
import RecipeImage from "../recipes/RecipeImage";
import RecipeName from "../recipes/RecipeName";

export default class RecipeOrderSaved {
	constructor(
		private readonly _id: RecipeId,
		private readonly _name: RecipeName,
		private readonly _image: RecipeImage
	) {}
	//#region Methods
	get id(): number {
		return this._id.value;
	}
	get name(): string {
		return this._name.value;
	}
	get image(): string {
		return this._image.value;
	}
	//#endregion
}