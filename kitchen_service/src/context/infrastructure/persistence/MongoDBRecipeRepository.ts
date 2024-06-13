import MongoDBOrderContext from "../../../shared/infrastructure/persistence/MongoDBOrderContext";
import Recipe from "../../domain/recipes/Recipe";
import RecipeId from "../../domain/recipes/RecipeId";
import RecipeIngredient from "../../domain/recipes/RecipeIngredient";
import RecipeIngredientId from "../../domain/recipes/RecipeIngredientId";
import RecipeIngredientQuantity from "../../domain/recipes/RecipeIngredientQuantity";
import RecipeIngredients from "../../domain/recipes/RecipeIngredients";
import RecipeName from "../../domain/recipes/RecipeName";
import RecipeRepository from "../../domain/recipes/RecipeRepository";
import { RecipeDocument } from "./RecipeCollection";

export default class MongoDBRecipeRepository implements RecipeRepository {
	constructor(private readonly orderDatabase: MongoDBOrderContext) {}
	//#region Methods
	async getOneRecipe(): Promise<Recipe> {
		const [oneRecipe] =
			await this.orderDatabase.Recipe.aggregate<RecipeDocument>().sample(1);
		return new Recipe(
			new RecipeId(oneRecipe._id),
			new RecipeName(oneRecipe.name),
			new RecipeIngredients(
				oneRecipe.ingredients.map(
					ingredient =>
						new RecipeIngredient(
							new RecipeIngredientId(ingredient.id),
							new RecipeIngredientQuantity(ingredient.quantity)
						)
				)
			)
		);
	}
	//#endregion
}
