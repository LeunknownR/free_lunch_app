import { Router } from "express";
import MySqlContextProvider from "../../shared/infrastructure/persistence/MySqlContextProvider";
import GetSupplyHistoryUseCase from "../../application/GetSupplyHistoryUseCase";
import MySqlSupplyRepository from "../persistence/MySqlSupplyRepository";
import SupplyHistoryRecord from "../../domain/SupplyHistoryRecord";
import SupplyHistoryRecordDTO from "./SupplyHistoryRecordDTO";
import ServiceRouter from "../../../shared/infrastructure/api/ServiceRouter";
import IngredientId from "../../domain/IngredientId";

const router = Router();

router.get("/:ingredientId", async (req, res) => {
	const getAllIngredientsUseCase = new GetSupplyHistoryUseCase(
		new MySqlSupplyRepository(MySqlContextProvider.getSupplyDatabase())
	);
	const supplyHistory: SupplyHistoryRecord[] =
		await getAllIngredientsUseCase.invoke(new IngredientId(req.params.ingredientId));
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
	path: "/history",
	router,
};

export default serviceRouter;
