import RabbitMQManager from "../../../../shared/infrastructure/message_queue/RabbitMQManager";
import RabbitMQQueue from "../../../../shared/infrastructure/message_queue/RabbitMQQueue";
import { INGREDIENTS_SUPPLIED_QUEUE_NAME, IngredientSuppliedQueue } from "../../../domain/queue_data/IngredientSuppliedQueueData";
import { SUPPLY_INGRENDIENTS_QUEUE_NAME, SupplyIngredientQueue } from "../../../domain/queue_data/SupplyIngredientQueueData";
import MessageQueue from "../../domain/MessageQueue";

export default class QueueContext {
	private static instance: QueueContext;
	private _supplyIngredientQueue: SupplyIngredientQueue;
	private _ingredientSuppliedQueue: IngredientSuppliedQueue;
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
		this._supplyIngredientQueue = await this.startQueue(SUPPLY_INGRENDIENTS_QUEUE_NAME);
		this._ingredientSuppliedQueue = await this.startQueue(INGREDIENTS_SUPPLIED_QUEUE_NAME);
	}
	private async startQueue<D>(queueName: string): Promise<MessageQueue<D>> {
		return await RabbitMQQueue.New<D>(queueName, this.rabbitMQManager);
	}
	get supplyIngredientQueue(): SupplyIngredientQueue {
		return this._supplyIngredientQueue;
	}
	get ingredientSuppliedQueue(): IngredientSuppliedQueue {
		return this._ingredientSuppliedQueue;
	}
	//#endregion
}