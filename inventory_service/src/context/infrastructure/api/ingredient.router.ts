import { Router } from "express";
import GetAllIngredientsUseCase from "../../application/GetAllIngredientsUseCase";
import MySqlContextProvider from "../../../shared/infrastructure/persistence/MySqlContextProvider";
import MySqlInventoryRepository from "../persistence/MySqlInventoryRepository";
import IngredientDTO from "./IngredientDTO";
import Ingredient from "../../domain/Ingredient";
import ServiceRouter from "../../../shared/infrastructure/api/ServiceRouter";

const router = Router();

router.get("/", async (_, res) => {
	const getAllIngredientsUseCase = new GetAllIngredientsUseCase(
		new MySqlInventoryRepository(MySqlContextProvider.getInventoryDatabase())
	);
	const allIngredients: Ingredient[] =
		await getAllIngredientsUseCase.invoke();
	res.json({
		data: {
			ingredients: allIngredients.map(
				ingredient => new IngredientDTO(ingredient)
			),
		},
		message: "SUCCESS",
	});
});

const serviceRouter: ServiceRouter = {
	path: "/ingredients",
	router,
};

export default serviceRouter;
