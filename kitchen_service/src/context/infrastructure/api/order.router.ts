import { Router } from "express";
import Order from "../../domain/orders/Order";
import OrderDTO from "./OrderDTO";
import GetAllOrdersUseCase from "../../application/GetAllOrdersUseCase";
import MongoDBOrderRepository from "../persistence/MongoDBOrderRepository";
import GetOneRecipeUseCase from "../../application/GetOneRecipeUseCase";
import MongoDBRecipeRepository from "../persistence/MongoDBRecipeRepository";
import RecipeDTO from "./RecipeDTO";
import Recipe from "../../domain/recipes/Recipe";
import MongoDBContextProvider from "../../../shared/infrastructure/persistence/MongoDBContextProvider";
import ServiceRouter from "../../../shared/infrastructure/api/ServiceRouter";
import QueueContext from "../../../shared/infrastructure/message_queue/QueueContext";
import RequestIngredientsUseCase from "../../application/RequestIngredientsUseCase";

const router = Router();

router.get("/", async (_, res) => {
	const orderDatabase = await MongoDBContextProvider.getOrderDatabase();
	const getAllOrdersUseCase = new GetAllOrdersUseCase(
		new MongoDBOrderRepository(orderDatabase)
	);
	const allOrders: Order[] = await getAllOrdersUseCase.invoke();
	res.json({
		data: {
			orders: allOrders.map(order => new OrderDTO(order)),
		},
		message: "SUCCESS",
	});
});

router.get("/one", async (_, res) => {
	const orderDatabase = await MongoDBContextProvider.getOrderDatabase();
	const getOneRecipeUseCase = new GetOneRecipeUseCase(
		new MongoDBRecipeRepository(orderDatabase)
	);
	const oneRecipe: Recipe = await getOneRecipeUseCase.invoke();
	
	const queueContext = await QueueContext.getInstance();
	const requestIngredientsUseCase = new RequestIngredientsUseCase(
		queueContext.requestIngredients
	);
	requestIngredientsUseCase.invoke(oneRecipe);
	
	res.json({
		data: {
			orders: new RecipeDTO(oneRecipe),
		},
		message: "SUCCESS",
	});
});

const serviceRouter: ServiceRouter = {
	path: "/orders",
	router,
};

export default serviceRouter;
