import Recipe from "../../domain/recipes/Recipe";

type RecipeIngredientDTO = {
	id: string;
	quantity: number;
};
export default class RecipeDTO {
	//#region Attributes
	id: number;
	name: string;
	ingredients: RecipeIngredientDTO[];
	//#endregion
	constructor(recipe: Recipe) {
		this.id = recipe.id;
		this.name = recipe.name;
		this.ingredients = recipe.ingredients.map(ingredient => ({
			id: ingredient.id,
			quantity: ingredient.quantity
		}));
	}
}