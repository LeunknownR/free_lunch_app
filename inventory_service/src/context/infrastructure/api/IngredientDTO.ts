import Ingredient from "../../domain/Ingredient";

export default class IngredientDTO {
	//#region Attributes
	id: string;
	label: string;
	stock: number;
	//#endregion
	constructor(ingredient: Ingredient) {
		this.id = ingredient.id;
		this.label = ingredient.label;
		this.stock = ingredient.stock.value;
	}
}