import MessageQueue from "../../../shared/domain/MessageQueue";

export type IngredientQueueData = {
	id: string;
	label: string;
	quantity: number;
};
export type SupplyIngredientQueueData = {
	orderId: string;
	ingredients: IngredientQueueData[];
};
export type SupplyIngredientQueue = MessageQueue<SupplyIngredientQueueData>;
export const SUPPLY_INGRENDIENTS_QUEUE_NAME = "SUPPLY_INGREDIENTS";