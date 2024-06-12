import RabbitMQManager from "../../../../shared/infrastructure/message_queue/RabbitMQManager";
import RabbitMQQueue from "../../../../shared/infrastructure/message_queue/RabbitMQQueue";
import { REQUEST_INGRENDIENTS_QUEUE_NAME, RequestIngredientQueue } from "../../../domain/RequestIngredientQueueData";

export default class QueueContext {
	private static instance: QueueContext;
	private _requestIngredients: RequestIngredientQueue;
	private constructor(private readonly rabbitMQManager: RabbitMQManager) {}
	static async getInstance() {
		if (!QueueContext.instance)
			QueueContext.instance = await QueueContext.NewConnection();
		return QueueContext.instance;
	}
	private async startAllQueues() {
		this._requestIngredients = await RabbitMQQueue.New(REQUEST_INGRENDIENTS_QUEUE_NAME, this.rabbitMQManager)
	}
	private static async NewConnection(): Promise<QueueContext> {
		const rabbitMQManager = await RabbitMQManager.connect();
		const rabbitMQContext = new QueueContext(rabbitMQManager);
		rabbitMQContext.startAllQueues();
		return rabbitMQContext;
	}
	//#region Methods
	get requestIngredients(): RequestIngredientQueue {
		return this._requestIngredients;
	}
	//#endregion
}