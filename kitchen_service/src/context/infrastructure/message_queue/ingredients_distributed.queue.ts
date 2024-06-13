import MongoDBContextProvider from "../../../shared/infrastructure/persistence/MongoDBContextProvider";
import DispatchOrderUseCase from "../../application/DispatchOrderUseCase";
import OrderId from "../../domain/orders/OrderId";
import QueueContext from "../../shared/message_queue/QueueContext";
import MongoDBOrderRepository from "../persistence/MongoDBOrderRepository";

export default async function onIngredientDistribuitedQueue() {
	const queueContext = await QueueContext.getInstance();
	queueContext.ingredientsDistributedQueue.on(async data => {
		const orderId = new OrderId(data.orderId);
		const orderDatabase = await MongoDBContextProvider.getOrderDatabase();
		const dispatchOrderUseCase = new DispatchOrderUseCase(new MongoDBOrderRepository(orderDatabase));
		dispatchOrderUseCase.invoke(orderId);
	});
}
