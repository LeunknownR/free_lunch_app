import onRequestIngredientQueue from "./context/infrastructure/message_queue/request_ingredients.queue";
import onIngredientSuppliedQueue from "./context/infrastructure/message_queue/ingredient_supplied.queue";

export default async function onMessageQueues() {
	await onRequestIngredientQueue();
	await onIngredientSuppliedQueue();
}