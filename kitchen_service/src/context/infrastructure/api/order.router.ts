import { Router } from "express";
import Order from "../../domain/orders/Order";
import OrderDTO from "./OrderDTO";
import GetAllOrdersUseCase from "../../application/GetAllOrdersUseCase";
import MongoDBOrderRepository from "../persistence/MongoDBOrderRepository";
import GetOneRecipeUseCase from "../../application/GetOneRecipeUseCase";
import MongoDBRecipeRepository from "../persistence/MongoDBRecipeRepository";
import Recipe from "../../domain/recipes/Recipe";
import MongoDBContextProvider from "../../../shared/infrastructure/persistence/MongoDBContextProvider";
import ServiceRouter from "../../../shared/infrastructure/api/ServiceRouter";
import QueueContext from "../../shared/message_queue/QueueContext";
import RequestIngredientsUseCase from "../../application/RequestIngredientsUseCase";
import CreateOrderUseCase from "../../application/CreateOrderUseCase";
import OrderSaved from "../../domain/orders/OrderSaved";

const router = Router();

router.get("/", async (_, res) => {
	const orderDatabase = await MongoDBContextProvider.getOrderDatabase();
	const getAllOrdersUseCase = new GetAllOrdersUseCase(
		new MongoDBOrderRepository(orderDatabase)
	);
	const allOrders: OrderSaved[] = await getAllOrdersUseCase.invoke();
	res.json({
		data: {
			orders: allOrders.map(order => new OrderDTO(order)),
		},
		message: "SUCCESS",
	});
});

router.get("/one", async (_, res) => {
	try {
		const orderDatabase = await MongoDBContextProvider.getOrderDatabase();
		const getOneRecipeUseCase = new GetOneRecipeUseCase(
			new MongoDBRecipeRepository(orderDatabase)
		);
		const oneRecipe: Recipe = await getOneRecipeUseCase.invoke();
		
		const createOrderUseCase = new CreateOrderUseCase(
			new MongoDBOrderRepository(orderDatabase)
		);
		const orderCreated: Order = await createOrderUseCase.invoke(oneRecipe);

		const queueContext = await QueueContext.getInstance();
		const requestIngredientsUseCase = new RequestIngredientsUseCase(
			queueContext.requestIngredients
		);
		requestIngredientsUseCase.invoke(orderCreated, oneRecipe);

		res.json({
			data: null,
			message: "SUCCESS",
		});
	}
	catch (err) {
		console.log(err);
		res.status(500).json({
			data: null,
			message: "ERROR",
		});
	}
});

const serviceRouter: ServiceRouter = {
	path: "/orders",
	router,
};

export default serviceRouter;
