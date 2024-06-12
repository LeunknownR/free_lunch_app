import MessageQueue from "../../shared/domain/MessageQueue";

export type RequestIngredientQueueData = {
	ingredientId: string;
	quantity: number;
};
export type RequestIngredientQueue = MessageQueue<RequestIngredientQueueData[]>;
export const REQUEST_INGRENDIENTS_QUEUE_NAME = "REQUEST_INGREDIENTS";