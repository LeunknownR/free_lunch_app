import { BackendAPIResult } from "../../../shared/infrastructure/services/AxiosProvider";
import HttpRequest from "../../../shared/domain/HttpRequest";
import RecipeRepository from "../../domain/RecipeRepository";
import Recipe from "../../domain/Recipe";
import { GetAllRecipesData } from "./AxiosRecipeResponsePayloadData";

export default class AxiosRecipeRepository implements RecipeRepository {
	constructor(private readonly httpRequest: HttpRequest) {}
	//#region Methods
	async getAllRecipes(): Promise<Recipe[]> {
		const { payload } = await this.httpRequest.get<
		BackendAPIResult<GetAllRecipesData>>("/kitchen/recipes");
		return payload.data.recipes;
	}
	//#endregion
}
