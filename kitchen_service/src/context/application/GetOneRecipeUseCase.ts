import Recipe from "../domain/recipes/Recipe";
import RecipeRepository from "../domain/recipes/RecipeRepository";

export default class GetOneRecipeUseCase {
	constructor(private readonly repository: RecipeRepository) {}
	//#region Methods
	async invoke(): Promise<Recipe> {
		return await this.repository.getOneRecipe();
	}
	//#endregion
}