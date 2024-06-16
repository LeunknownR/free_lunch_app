import MongoDBOrderContext from "../../../shared/infrastructure/persistence/MongoDBOrderContext";
import Recipe from "../../domain/recipes/Recipe";
import RecipeDescription from "../../domain/recipes/RecipeDescription";
import RecipeId from "../../domain/recipes/RecipeId";
import RecipeImage from "../../domain/recipes/RecipeImage";
import RecipeIngredient from "../../domain/recipes/RecipeIngredient";
import RecipeIngredientId from "../../domain/recipes/RecipeIngredientId";
import RecipeIngredientLabel from "../../domain/recipes/RecipeIngredientLabel";
import RecipeIngredientQuantity from "../../domain/recipes/RecipeIngredientQuantity";
import RecipeIngredients from "../../domain/recipes/RecipeIngredients";
import RecipeName from "../../domain/recipes/RecipeName";
import RecipeRepository from "../../domain/recipes/RecipeRepository";
import { RecipeDocument } from "./RecipeCollection";

export default class MongoDBRecipeRepository implements RecipeRepository {
	constructor(private readonly orderDatabase: MongoDBOrderContext) {}
	//#region Methods
	async getAllRecipes(): Promise<Recipe[]> {
		const allRecipes = await this.orderDatabase.Recipe.find({});
		return allRecipes.map(recipeDocument => this.toRecipe(recipeDocument));
	}
	async getOneRecipe(): Promise<Recipe> {
		const [oneRecipe] =
			await this.orderDatabase.Recipe.aggregate<RecipeDocument>().sample(
				1
			);
		return this.toRecipe(oneRecipe);
	}
	private toRecipe({
		_id, name,
		description, image,
		ingredients
	}: RecipeDocument): Recipe {
		return new Recipe(
			new RecipeId(_id),
			new RecipeName(name),
			new RecipeDescription(description),
			new RecipeImage(image),
			new RecipeIngredients(
				ingredients.map(
					ingredient =>
						new RecipeIngredient(
							new RecipeIngredientId(ingredient.id),
							new RecipeIngredientLabel(ingredient.label),
							new RecipeIngredientQuantity(ingredient.quantity)
						)
				)
			)
		);
	}
	//#endregion
}
