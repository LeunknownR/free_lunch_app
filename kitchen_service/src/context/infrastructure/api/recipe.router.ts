import { Router } from "express";
import MongoDBContextProvider from "../../../shared/infrastructure/persistence/MongoDBContextProvider";
import ServiceRouter from "../../../shared/infrastructure/api/ServiceRouter";
import GetAllRecipesUseCase from "../../application/GetAllRecipesUseCase";
import MongoDBRecipeRepository from "../persistence/MongoDBRecipeRepository";
import Recipe from "../../domain/recipes/Recipe";
import RecipeDTO from "./RecipeDTO";
import withErrorHandler from "../../../shared/infrastructure/api/withErrorHandler";

const router = Router();

router.get("/", withErrorHandler(async (_, res) => {
	const orderDatabase = await MongoDBContextProvider.getOrderDatabase();
	const getAllRecipesUseCase = new GetAllRecipesUseCase(
		new MongoDBRecipeRepository(orderDatabase)
	);
	const allRecipes: Recipe[] = await getAllRecipesUseCase.invoke();
	res.json({
		data: {
			recipes: allRecipes.map(recipe => new RecipeDTO(recipe)),
		},
		message: "SUCCESS",
	});
}));

const serviceRouter: ServiceRouter = {
	path: "/recipes",
	router,
};

export default serviceRouter;
