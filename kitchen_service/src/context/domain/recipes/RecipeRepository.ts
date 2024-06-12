import Recipe from "./Recipe";

export default interface RecipeRepository {
	getOneRecipe(): Promise<Recipe>;
}