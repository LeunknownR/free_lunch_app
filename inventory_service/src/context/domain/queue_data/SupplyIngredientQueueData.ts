import MessageQueue from "../../../shared/domain/MessageQueue";
import IngredientQueueData from "./IngredientQueueData";

export type SupplyIngredientQueueData = {
	orderId: string;
	ingredients: IngredientQueueData[];
};
export type SupplyIngredientQueue = MessageQueue<SupplyIngredientQueueData>;
export const SUPPLY_INGRENDIENTS_QUEUE_NAME = "SUPPLY_INGREDIENTS";