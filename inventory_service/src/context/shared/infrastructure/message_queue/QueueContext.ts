import MessageQueue from "../../../../shared/domain/MessageQueue";
import RabbitMQManager from "../../../../shared/infrastructure/message_queue/RabbitMQManager";
import RabbitMQQueue from "../../../../shared/infrastructure/message_queue/RabbitMQQueue";
import { INGREDIENTS_SUPPLIED_QUEUE_NAME, IngredientSuppliedQueue } from "../../../domain/queue_data/IngredientSuppliedQueueData";
import { INGREDIENTS_DISTRIBUTED_QUEUE_NAME, IngredientsDistributedQueue } from "../../../domain/queue_data/IngredientsDistributedQueueData";
import {
	REQUEST_INGREDIENT_QUEUE_NAME,
	RequestIngredientQueue,
} from "../../../domain/queue_data/RequestIngredientQueueData";
import { SUPPLY_INGRENDIENTS_QUEUE_NAME, SupplyIngredientQueue } from "../../../domain/queue_data/SupplyIngredientQueueData";

export default class QueueContext {
	private static instance: QueueContext;
	//#region Attributes
	private _requestIngredients: RequestIngredientQueue;
	private _supplyIngredientQueue: SupplyIngredientQueue;
	private _ingredientSuppliedQueue: IngredientSuppliedQueue;
	private _ingredientsDistributedQueue: IngredientsDistributedQueue;
	//#endregion
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
		this._supplyIngredientQueue = await this.startQueue(
			SUPPLY_INGRENDIENTS_QUEUE_NAME
		);
		this._ingredientSuppliedQueue = await this.startQueue(
			INGREDIENTS_SUPPLIED_QUEUE_NAME
		);
	}
	private async startQueue<D>(queueName: string): Promise<MessageQueue<D>> {
		return await RabbitMQQueue.New<D>(queueName, this.rabbitMQManager);
	}
	get requestIngredients(): RequestIngredientQueue {
		return this._requestIngredients;
	}
	get supplyIngredientQueue(): SupplyIngredientQueue {
		return this._supplyIngredientQueue;
	}
	get ingredientsDistributedQueue(): IngredientsDistributedQueue {
		return this._ingredientsDistributedQueue;
	}
	get ingredientSuppliedQueue(): IngredientSuppliedQueue {
		return this._ingredientSuppliedQueue;
	}
	//#endregion
}
