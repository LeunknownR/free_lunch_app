import MessageQueue from "../../../shared/domain/MessageQueue";

type IngredientsDistributedQueueData ={
	orderId: string;
};
export type IngredientsDistributedQueue = MessageQueue<IngredientsDistributedQueueData>;
export const INGREDIENTS_DISTRIBUTED_QUEUE_NAME = "INGREDIENTS_DISTRIBUTED";