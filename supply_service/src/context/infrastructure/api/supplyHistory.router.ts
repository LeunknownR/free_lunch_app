import { Router } from "express";
import MySqlContextProvider from "../../../shared/infrastructure/persistence/MySqlContextProvider";
import GetSupplyHistoryUseCase from "../../application/GetSupplyHistoryUseCase";
import MySqlSupplyingRepository from "../persistence/MySqlSupplyingRepository";
import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";
import IngredientId from "../../domain/IngredientId";
import SupplyHistoryRecordDTO from "./SupplyHistoryRecordDTO";
import ServiceRouter from "../../../shared/infrastructure/api/ServiceRouter";

const router = Router();

router.get("/:ingredientId", async (req, res) => {
	const getAllIngredientsUseCase = new GetSupplyHistoryUseCase(
		new MySqlSupplyingRepository(
			MySqlContextProvider.getInventoryDatabase()
		)
	);
	const supplyHistory: SupplyHistoryRecord[] =
		await getAllIngredientsUseCase.invoke(
			new IngredientId(req.params.ingredientId)
		);
	res.json({
		data: {
			supplyHistory: supplyHistory.map(
				record => new SupplyHistoryRecordDTO(record)
			),
		},
		message: "SUCCESS",
	});
});

const serviceRouter: ServiceRouter = {
	path: "/history", router
};

export default serviceRouter;
