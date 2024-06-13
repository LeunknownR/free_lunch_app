import { IngredientsDistributedQueue } from "../domain/queue_data/IngredientsDistributedQueueData";
import OrderId from "../domain/OrderId";

export default class DistributeIngredientsUseCase {
	constructor(
		private readonly ingredientsDistributedQueue: IngredientsDistributedQueue
	) {}
	//#region Methods
	async invoke(orderId: OrderId): Promise<void> {
		this.ingredientsDistributedQueue.send({
			orderId: orderId.value
		});
	}
	//#endregion
}