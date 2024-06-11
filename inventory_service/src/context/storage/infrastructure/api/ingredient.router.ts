import { Router } from "express";
import GetAllIngredientsUseCase from "../../application/GetAllIngredientsUseCase";
import MySqlContentProvider from "../../../../shared/infrastructure/persistence/MySqlContentProvider";
import MySqlStorageRepository from "../persistence/MySqlStorageRepository";
import IngredientDTO from "./IngredientDTO";
import Ingredient from "../../domain/Ingredient";

const router = Router();

router.get("/", async (_, res) => {
	const getAllIngredientsUseCase = new GetAllIngredientsUseCase(
		new MySqlStorageRepository(MySqlContentProvider.getInventoryDatabase())
	);
	const allIngredients: Ingredient[] = await getAllIngredientsUseCase.invoke();
	res.json({
		data: allIngredients.map(ingredient => new IngredientDTO(ingredient)),
		message: "SUCCESS",
	});
});

export default router;
