import onRequestIngredientQueue from "./context/infrastructure/message_queue/request_ingredients.queue";
import onSupplyIngredientQueue from "./context/infrastructure/message_queue/supply_ingredients.queue";

export default async function onMessageQueues() {
	await onRequestIngredientQueue();
	await onSupplyIngredientQueue();
}