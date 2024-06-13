import RecipeId from "../recipes/RecipeId";
import RecipeName from "../recipes/RecipeName";

export default class RecipeOrderSaved {
	//#region Attributes
	//#endregion
	constructor(
		private readonly _id: RecipeId,
		private readonly _name: RecipeName
	) {}
	//#region Methods
	get id(): number {
		return this._id.value;
	}
	get name(): string {
		return this._name.value;
	}
	//#endregion
}