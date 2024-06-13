import onIngredientDistribuitedQueue from "./context/infrastructure/message_queue/ingredients_distributed.queue";

export default async function onMessageQueues() {
	onIngredientDistribuitedQueue();
}