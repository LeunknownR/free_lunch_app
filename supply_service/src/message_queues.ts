import onSupplyIngredientQueue from "./context/infrastructure/message_queue/supply_ingredients.queue";

export default async function onMessageQueues() {
	onSupplyIngredientQueue();
}