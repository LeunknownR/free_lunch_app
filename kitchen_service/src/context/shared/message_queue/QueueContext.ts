import RabbitMQManager from "../../../shared/infrastructure/message_queue/RabbitMQManager";
import RabbitMQQueue from "../../../shared/infrastructure/message_queue/RabbitMQQueue";
import {
	REQUEST_INGREDIENT_QUEUE_NAME,
	RequestIngredientQueue,
} from "../../domain/queue_data/RequestIngredientQueueData";
import {
	INGREDIENTS_DISTRIBUTED_QUEUE_NAME,
	IngredientsDistributedQueue,
} from "../../domain/queue_data/IngredientsDistributedQueueData";
import MessageQueue from "../../../shared/domain/MessageQueue";

export default class QueueContext {
	private static instance: QueueContext;
	private _requestIngredients: RequestIngredientQueue;
	private _ingredientsDistributedQueue: IngredientsDistributedQueue;
	private constructor(private readonly rabbitMQManager: RabbitMQManager) {}
	static async getInstance() {
		if (!QueueContext.instance)
			QueueContext.instance = await QueueContext.NewConnection();
		return QueueContext.instance;
	}
	private static async NewConnection(): Promise<QueueContext> {
		const rabbitMQManager = await RabbitMQManager.connect();
		const rabbitMQContext = new QueueContext(rabbitMQManager);
		await rabbitMQContext.startAllQueues();
		return rabbitMQContext;
	}
	//#region Methods
	private async startAllQueues() {
		this._requestIngredients = await this.startQueue(
			REQUEST_INGREDIENT_QUEUE_NAME
		);
		this._ingredientsDistributedQueue = await this.startQueue(
			INGREDIENTS_DISTRIBUTED_QUEUE_NAME
		);
	}
	private async startQueue<D>(queueName: string): Promise<MessageQueue<D>> {
		return await RabbitMQQueue.New<D>(queueName, this.rabbitMQManager);
	}
	get requestIngredients(): RequestIngredientQueue {
		return this._requestIngredients;
	}
	get ingredientsDistributedQueue() {
		return this._ingredientsDistributedQueue;
	}
	//#endregion
}
