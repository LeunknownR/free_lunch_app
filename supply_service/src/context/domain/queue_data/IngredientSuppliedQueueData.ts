import MessageQueue from "../../shared/domain/MessageQueue";
import IngredientQueueData from "./IngredientQueueData";

export type IngredientSuppliedQueueData = {
	orderId: string;
	leftOverIngredients: IngredientQueueData[];
};
export type IngredientSuppliedQueue = MessageQueue<IngredientSuppliedQueueData>;
export const INGREDIENTS_SUPPLIED_QUEUE_NAME = "INGREDIENTS_SUPPLIED";