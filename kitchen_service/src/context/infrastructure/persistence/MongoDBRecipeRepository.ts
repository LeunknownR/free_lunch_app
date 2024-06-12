import RecipeId from "../../../shared/domain/RecipeId";
import MongoDBOrderContext from "../../../../shared/infrastructure/persistence/MongoDBOrderContext";
import Recipe from "../../../recipes/domain/Recipe";
import RecipeIngredient from "../../../recipes/domain/RecipeIngredient";
import RecipeIngredientId from "../../../recipes/domain/RecipeIngredientId";
import RecipeIngredientQuantity from "../../../recipes/domain/RecipeIngredientQuantity";
import RecipeIngredients from "../../../recipes/domain/RecipeIngredients";
import RecipeName from "../../../recipes/domain/RecipeName";
import RecipeRepository from "../../../recipes/domain/RecipeRepository";
import { RecipeDocument } from "./RecipeCollection";

type RecipeSaved = RecipeDocument & { _id: number };
export default class MongoDBRecipeRepository implements RecipeRepository {
	constructor(private readonly orderDatabase: MongoDBOrderContext) {}
	//#region Methods
	async getOneRecipe(): Promise<Recipe> {
		const [oneRecipe] =
			await this.orderDatabase.Recipes.aggregate<RecipeSaved>().sample(1);
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
