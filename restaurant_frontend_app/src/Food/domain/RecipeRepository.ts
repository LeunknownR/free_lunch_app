import Recipe from "./Recipe";

export default interface RecipeRepository {
	getAllRecipes(): Promise<Recipe[]>;
}