import MessageQueue from "../../../shared/domain/MessageQueue";
import IngredientQueueData from "./IngredientQueueData";

export type RequestIngredientQueueData = {
	orderId: string;
	ingredients: IngredientQueueData[];
};
export type RequestIngredientQueue = MessageQueue<RequestIngredientQueueData>;
export const REQUEST_INGREDIENT_QUEUE_NAME = "REQUEST_INGREDIENTS";