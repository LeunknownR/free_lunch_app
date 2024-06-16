import OrderRepository from "../domain/orders/OrderRepository";
import Recipe from "../domain/recipes/Recipe";
import RecipeRepository from "../domain/recipes/RecipeRepository";

export default class GetAllRecipesUseCase {
	constructor(private readonly repository: RecipeRepository) {}
	//#region Methods
	async invoke(): Promise<Recipe[]> {
		return await this.repository.getAllRecipes();
	}
	//#endregion
}